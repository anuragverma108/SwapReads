const loading = document.getElementById("loading1");
loading.innerHTML = `<h1 class="loading">Loading</h1>`;
// Hamburger menu
// hamBurger.addEventListener("click", mobileMenu);
// function mobileMenu() {
//   hamBurger.classList.toggle("active");
//   nMenu.classList.toggle("active");
// }

const cont = document.getElementById("contributor");
const owner = "anuragverma108";
const repoName = "SwapReads";

async function fetchContributors(pageNumber) {
  const apiUrl =
    "https://script.googleusercontent.com/macros/echo?user_content_key=SOnBnlAhhwAY2lLH5HfppGmJGT_2ps5V6IQnMqMGBXbQfQRkZzw_v_5iRGG0aocf2N5fb1QagfriAH_KtdGjmF5EZ-d2l64Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC62rQSNc23BPEU_1j4s8hh_HP6kAPpX9xtypcE4mPgzpikbBkSG4MZLP8aImUTewbmUkdfzbTtyUarIvNXMDMKXAagsogLIsQ&lib=MghKih2WtI3ppVHa2nSvtXXt7vnFOnL-L";

  async function getkey() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data); // Log the response data
      return data.apik[0].apikey;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const token = await getkey();
  const perPage = 100;
  const url = `https://api.github.com/repos/${owner}/${repoName}/contributors?page=${pageNumber}&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch contributors data. Status code: ${response.status}`
    );
  }

  const contributorsData = await response.json();
  loading.innerHTML = ``;
  return contributorsData;
}

// Function to fetch all contributors
async function fetchAllContributors() {
  let allContributors = [];
  let pageNumber = 1;

  try {
    while (true) {
      const contributorsData = await fetchContributors(pageNumber);
      if (contributorsData.length === 0) {
        break;
      }
      allContributors = allContributors.concat(contributorsData);
      pageNumber++;
    }
    allContributors.forEach((contributor) => {
      if (contributor.login === owner) {
        return;
      }

      const contributorCard = document.createElement("div");
      contributorCard.classList.add("contributor-card");

      const avatarImg = document.createElement("img");
      avatarImg.src = contributor.avatar_url;
      avatarImg.alt = `${contributor.login}'s Picture`;

      const loginLink = document.createElement("a");
      loginLink.href = contributor.html_url;
      loginLink.target = "_blank";
      loginLink.appendChild(avatarImg);

      contributorCard.appendChild(loginLink);

      cont.appendChild(contributorCard);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchAllContributors();

let calcScrollValue = () => {
  let scrollProg = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProg.style.display = "grid";
  } else {
    scrollProg.style.display = "none";
  }
  scrollProg.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProg.style.background = `conic-gradient(#0063ba ${scrollValue}%, #d499de ${scrollValue}%)`;
};

window.addEventListener("scroll", function () {
  var scrollToTopButton = document.getElementById("progress");
  if (window.pageYOffset > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
 