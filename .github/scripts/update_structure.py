import os
import github
from github import Github

# Helper function to recursively build the repo structure and include file extensions
def get_repo_structure(path='.', prefix=''):
    structure = []
    try:
        items = sorted(os.listdir(path))
    except FileNotFoundError:
        print(f"Path not found: {path}")
        return structure

    for i, item in enumerate(items):
        if item.startswith('.'):
            continue  # Skip hidden files and directories
        item_path = os.path.join(path, item)
        is_last = i == len(items) - 1
        current_prefix = '└── ' if is_last else '├── '

        if os.path.isdir(item_path):
            # Directory case
            structure.append(f"{prefix}{current_prefix}{item}/")
            next_prefix = prefix + ('    ' if is_last else '│   ')
            structure.extend(get_repo_structure(item_path, next_prefix))
        else:
            # File case with extension
            file_name, file_extension = os.path.splitext(item)
            structure.append(f"{prefix}{current_prefix}{file_name}{file_extension}")
    
    return structure

# Function to update the repo_structure.txt file
def update_structure_file(structure):
    try:
        with open('repo_structure.txt', 'w') as f:
            f.write('\n'.join(structure))
        print("repo_structure.txt updated successfully.")
    except IOError as e:
        print(f"Error writing to repo_structure.txt: {e}")

# Function to update the README.md with the new structure
def update_README(structure):
    try:
        with open('README.md', 'r') as f:
            content = f.read()
    except FileNotFoundError:
        print("README.md not found.")
        return

    start_marker = '<!-- START_STRUCTURE -->'
    end_marker = '<!-- END_STRUCTURE -->'
    
    start_index = content.find(start_marker)
    end_index = content.find(end_marker)

    if start_index != -1 and end_index != -1:
        new_content = (
            content[:start_index + len(start_marker)] +
            '\n```\n' + '\n'.join(structure) + '\n```\n' +
            content[end_index:]
        )
        try:
            with open('README.md', 'w') as f:
                f.write(new_content)
            print("README.md updated with new structure.")
        except IOError as e:
            print(f"Error writing to README.md: {e}")
    else:
        print("Markers not found in README.md. Structure not updated.")

# Main function to compare and update repository structure
def main():
    gh_token = os.getenv('GH_TOKEN')
    gh_repo = os.getenv('GITHUB_REPOSITORY')

    if not gh_token or not gh_repo:
        print("Environment variables GH_TOKEN and GITHUB_REPOSITORY must be set.")
        return

    g = Github(gh_token)
    repo = g.get_repo(gh_repo)

    current_structure = get_repo_structure()

    try:
        # Fetch the contents of repo_structure.txt from GitHub
        contents = repo.get_contents("repo_structure.txt")
        existing_structure = contents.decoded_content.decode().split('\n')
    except github.GithubException:
        existing_structure = None

    if current_structure != existing_structure:
        update_structure_file(current_structure)
        update_README(current_structure)
        print("Repository structure updated.")
    else:
        print("No changes in repository structure.")

if __name__ == "__main__":
    main()