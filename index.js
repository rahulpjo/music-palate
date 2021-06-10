const searchForm = document.getElementById("search-artist");
const searchInput = document.getElementById("search-area");
const message = document.querySelector("p");
const recommendations = document.getElementById("recommendations");
const additionalInfo = document.querySelector(".more-info");
const footer = document.querySelector("footer");
const cover = document.querySelector(".body-cover");


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

const addListener = (artist, dropdown) => {
  artist.firstChild.addEventListener("click", (e) => {
    let artistBox = e.target.parentNode;
    let artistHeader = e.target;
    let shiftAmount = recommendations.firstChild.offsetLeft;
    if (e.target.localName === "i"){
      artistBox = e.target.parentNode.parentNode;
      artistHeader = e.target.parentNode;
    }
    artistHeader.lastChild.classList.toggle("fa-caret-down");
    artistHeader.lastChild.classList.toggle("fa-caret-up");
    artistBox.classList.toggle("show");
    artistBox.classList.toggle("move-up");
    let leftShift = `${shiftAmount - artistBox.offsetLeft}px`;
    dropdown.style.left = leftShift;
    //https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/
    dropdown.style.width = `calc(100vw - ${shiftAmount*2}px)`
    dropdown.classList.toggle("show-dropdown");
    cover.classList.toggle("show-cover");
  });
};

const createArtistBlock = (artist, imageUrl, songList) => {
  const artistDiv = document.createElement("div");
  artistDiv.classList.add("artist");
  artistDiv.style.background = `url(${imageUrl})`;
  artistDiv.style.backgroundSize = 'cover';
  artistDiv.style.backgroundPosition = 'center';

  const artistName = document.createElement("h3");
  artistName.innerHTML = `${artist.Name} <i class="fas fa-caret-down"></i>`;

  const artistDropdown = document.createElement("div");
  artistDropdown.classList.add("dropdown");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");
  const infoHeader = document.createElement("h3");
  infoHeader.innerHTML = "Information:";
  const artistInfo = document.createElement("p");
  artistInfo.innerHTML = artist.wTeaser;
  infoDiv.append(infoHeader,artistInfo);

  const videoDiv = document.createElement("div");
  videoDiv.classList.add("video");
  const videoHeader = document.createElement("h3");
  videoHeader.innerHTML = "Top Video:";
  const artistVideo = document.createElement("iframe");
  artistVideo.src = artist.yUrl;
  videoDiv.append(videoHeader,artistVideo);

  const songsDiv = document.createElement("div");
  songsDiv.classList.add("songs");
  const songsHeader = document.createElement("h3");
  songsHeader.innerHTML = "Top Songs:";
  const artistSongs = document.createElement("ul");
  songList.forEach((song) => {
    let artistSong = document.createElement("li");
    artistSong.innerHTML = song;
    artistSongs.appendChild(artistSong);
  })
  songsDiv.append(songsHeader,artistSongs);

  artistDropdown.append(infoDiv, videoDiv, songsDiv);

  const artistLink = document.createElement("a");
  artistLink.innerHTML = "Artist Wiki";
  artistLink.href = artist.wUrl;
  artistLink.target = "_blank";
  
  artistDiv.append(artistName, artistDropdown, artistLink);
  addListener(artistDiv,artistDropdown);
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
    let songs = [];
    for (let i = 0; i < 3; i++) {
      songs.push(response.data.response.hits[i].result.title_with_featured);
    }
    createArtistBlock(artist, url, songs);
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
  footer.style.position = "static";
  getResults(val);
});
