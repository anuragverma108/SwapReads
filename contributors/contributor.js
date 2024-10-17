document.addEventListener("DOMContentLoaded", () => {
    const contributorsContainer = document.getElementById("contributors");
  
    async function fetchContributors() {
      let contributors = [];
      let page = 1;
      let perPage = 100; // Max per page is 100
      let moreContributors = true;
  
      while (moreContributors) {
        try {
          const response = await fetch(
            `https://api.github.com/repos/anuragverma108/SwapReads/contributors?page=${page}&per_page=${perPage}`
          );
          const data = await response.json();
          
          // If no more contributors, stop fetching
          if (data.length === 0) {
            moreContributors = false;
          } else {
            contributors = contributors.concat(data);
            page++;
          }
        } catch (error) {
          console.error("Error fetching contributors:", error);
          break; // Exit loop if there's an error
        }
      }
  
      displayContributors(contributors);
    }
  
    function displayContributors(contributors) {
      contributorsContainer.innerHTML = "";
      contributors.forEach((contributor) => {
        const contributorCard = document.createElement("div");
        contributorCard.className = "contributor-card";
  
        contributorCard.innerHTML = `
          <a href="${contributor.html_url}" target="_blank" rel="noopener noreferrer">
            <img src="${contributor.avatar_url}" alt="${contributor.login}">
          </a>
          <h3>${contributor.login}</h3>
          <p>Contributions: ${contributor.contributions}</p>
        `;
  
        contributorsContainer.appendChild(contributorCard);
      });
    }
  
    fetchContributors();
  });
  