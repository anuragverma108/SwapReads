// Fetch data from GitHub API
async function fetchData() {
    try {
        const contributors = [];
        let page = 1;
        let totalContributions = 0;

        // Fetch all contributors with pagination
        while (true) {
            const contributorsResponse = await fetch(`https://api.github.com/repos/anuragverma108/SwapReads/contributors?per_page=100&page=${page}`);
            const contributorsData = await contributorsResponse.json();
            
            console.log(`Page ${page} contributors:`, contributorsData); // Log contributors data

            if (contributorsData.length === 0) break; // Exit loop if no more contributors

            contributors.push(...contributorsData);
            totalContributions += contributorsData.reduce((sum, contributor) => sum + contributor.contributions, 0);
            page++;
        }

        const repoResponse = await fetch('https://api.github.com/repos/anuragverma108/SwapReads');
        const repoData = await repoResponse.json();

        return { contributors, repoStats: { ...repoData, totalContributions } };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { contributors: [], repoStats: {} };
    }
}


// Render stats
function renderStats(repoStats, contributorsCount) {
    const statsGrid = document.getElementById('statsGrid');
    const stats = [
        { label: 'Contributors', value: contributorsCount, icon: 'users' },
        { label: 'Total Contributions', value: repoStats.totalContributions || 0, icon: 'git-commit' }, // Use totalContributions
        { label: 'GitHub Stars', value: repoStats.stargazers_count || 0, icon: 'star' },
        { label: 'Forks', value: repoStats.forks_count || 0, icon: 'git-branch' }
    ];

    statsGrid.innerHTML = stats.map(stat => `
        <div class="contributor-stat-card">
            <div class="contributor-icon">${getIcon(stat.icon)}</div>
            <h3>${stat.value}</h3>
            <p>${stat.label}</p>
        </div>
    `).join('');
}


// Render contributors
function renderContributors(contributors) {
    const contributorsGrid = document.getElementById('contributorsGrid');
    contributorsGrid.innerHTML = contributors.map(contributor => `
        <div class="contributor-contributor-card">
            <img src="${contributor.avatar_url}" alt="${contributor.login}">
            <h3>${contributor.login}</h3>
            <p>${contributor.type}</p>
            <div class="contributor-contributions">${contributor.contributions} contributions</div>
            <div class="contributor-footer">
                <a href="${contributor.html_url}" target="_blank" rel="noopener noreferrer">
                    ${getIcon('external-link')}
                    View Profile
                </a>
                ${getIcon('github')}
            </div>
        </div>
    `).join('');
}


// Helper function to get icons (simplified version)
function getIcon(name) {
    const icons = {
        'users': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        'git-commit': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line></svg>',
        'star': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        'git-branch': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>',
        'external-link': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21  9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
        'github': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
    };
    return icons[name] || '';
}


// Initialize the page
async function init() {
    const loading = document.getElementById('loading');
    const contributorsGrid = document.getElementById('contributorsGrid');

    loading.style.display = 'flex';
    contributorsGrid.style.display = 'none';

    const { contributors, repoStats } = await fetchData();

    renderStats(repoStats, contributors.length); // Pass the correct parameters
    renderContributors(contributors);

    loading.style.display = 'none';
    contributorsGrid.style.display = 'grid';
}


// Handle form submission
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const notification = document.getElementById('notification');

    notification.textContent = `Thank you for subscribing with ${email}. We'll keep you updated!`;
    notification.classList.remove('hidden');

    document.getElementById('emailInput').value = '';

    setTimeout(() => {
        notification.classList.add('hidden');
    }, 5000);
});


// Scroll to contribute section
function scrollToContribute() {
    document.getElementById('contribute').scrollIntoView({ behavior: 'smooth' });
}


// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

