const searchForm = document.getElementById("search-artist");
const searchInput = document.getElementById("search-area");
const message = document.querySelector("p");
const recommendations = document.getElementById("recommendations");
const additionalInfo = document.querySelector(".more-info");

const removeClass = () => {
  document.querySelectorAll(".artist").forEach((artist) => {
    artist.classList.remove("show");
  });
};

const clearArea = () => {
  while (recommendations.childNodes.length) {
    recommendations.childNodes[0].remove();
  }
};

const addListeners = () => {
  document.querySelectorAll(".artist").forEach((artist) => {
    artist.addEventListener("click", (e) => {
      // removeClass();
      console.log(e);
      if (e.target.localName === "h3") {
        e.target.parentNode.classList.toggle("show");
      } else {
        e.target.classList.toggle("show");
      }
      additionalInfo.classList.toggle("show-info");
    });
  });
};

const createArtistBlock = (artist, imageUrl) => {
  const artistDiv = document.createElement("div");
  artistDiv.classList.add("artist");
  artistDiv.style.background = `url(${imageUrl})`;
  artistDiv.style.backgroundSize = 'cover';
  artistDiv.style.backgroundPosition = 'center';

  const artistName = document.createElement("h3");
  artistName.innerHTML = `${artist.Name} <i class="fas fa-caret-down"></i>`;

  const artistInfo = document.createElement("p");
  artistInfo.innerHTML = artist.wTeaser;
  artistInfo.style.display = "none";

  const artistLink = document.createElement("a");
  artistLink.innerHTML = "Link";
  artistLink.href = artist.wUrl;
  artistLink.target = "_blank";

  artistDiv.append(artistName, artistInfo, artistLink);
  recommendations.appendChild(artistDiv);
};

const getPicture = async(artist) => {
  try {
    //https://flaviocopes.com/axios-send-authorization-header/
    let response = await axios.get(
      `https://ancient-anchorage-80263.herokuapp.com/https://api.genius.com/search?q=${artist.Name}`,
      {
        headers: {
          'Authorization': `Bearer ${gToken}`,
        },
      }
    );
    let url = response.data.response.hits[0].result.primary_artist.image_url;
    createArtistBlock(artist, url);
  } catch (error) {
    console.error(error.message);
  }
};

const getResults = async (value) => {
  try {
    //solved CORS issue using Stack Overflow response linked below:
    //https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    let response = await axios.get(
      `https://ancient-anchorage-80263.herokuapp.com/https://tastedive.com/api/similar?k=${tdKey}&q=${value}&info=1`
    );
    response.data.Similar.Results.forEach((artist) => {
      getPicture(artist);
    });
  } catch (error) {
    console.error(error.message);
  }
};


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = searchInput.value;
  searchInput.value = "";
  message.innerHTML = `Because you like <span class="red">${val}</span>, we recommend...`;
  clearArea();
  getResults(val);
  addListeners();
});
