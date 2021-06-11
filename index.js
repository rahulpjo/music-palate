const gToken = config.G_TOKEN;
const tdKey = config.TD_KEY;

//search bar values
const searchForm = document.getElementById("search-artist");
const searchInput = document.getElementById("search-area");

//message below search bar
const message = document.querySelector("main>p");

//area where artist results show up
const recommendations = document.getElementById("recommendations");

//footer
const footer = document.querySelector("footer");

//fixed layer that covers the screen except for selected artist
//implemented to prevent opening of one artist while another is already open
//as it could lead to errors
const cover = document.querySelector(".body-cover");


//clears artists for new search results
const clearArea = () => {
  while (recommendations.childNodes.length) {
    recommendations.childNodes[0].remove();
  }
};

//adds event listeners to newly created artist divs
const addListener = (artist, dropdown) => {
  artist.firstChild.addEventListener("click", (e) => {
    let artistBox = e.target.parentNode;
    let artistHeader = e.target;
    let shiftAmount = recommendations.firstChild.offsetLeft;
    //checks case where specfically the down arrow was clicked
    if (e.target.localName === "i"){
      artistBox = e.target.parentNode.parentNode;
      artistHeader = e.target.parentNode;
    }
    //switches between up and down arrow on click
    artistHeader.lastChild.classList.toggle("fa-caret-down");
    artistHeader.lastChild.classList.toggle("fa-caret-up");

    //increases z-index to be above fixed layer
    artistBox.classList.toggle("move-up");

    //determine width of screen for dropdown. used source:
    //https://dmitripavlutin.com/screen-window-page-sizes/
    let width = window.innerWidth;
    console.log(width);

    // if screen is wide enough, makes dropdown menu start where the artist section seemingly starts
    // if not, dropdown starts 5 pixels from left of screen
    let leftShift = (width > 570) ? `${shiftAmount - artistBox.offsetLeft}px`:`${5 - artistBox.offsetLeft}px`;
    dropdown.style.left = leftShift;

    //https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/
    // if screen is wide enough, makes dropdown area same width as artist area with responsiveness
    // if not, dropdown is roughly width of screen minus 5 pixels on each side
    dropdown.style.width = (width > 570) ? `calc(100vw - ${shiftAmount*2}px)`: 'calc(100vw - 10px)';

    //reveals dropdown and cover layer
    dropdown.classList.toggle("show-dropdown");
    cover.classList.toggle("show-cover");
  });
};

const createArtistBlock = (artist, imageUrl, songList) => {
  //create artist block
  const artistDiv = document.createElement("div");
  artistDiv.classList.add("artist");
  artistDiv.style.background = `url(${imageUrl})`;
  artistDiv.style.backgroundSize = 'cover';
  artistDiv.style.backgroundPosition = 'center';
  //create artist name with down arrow for dropdown
  const artistName = document.createElement("h3");
  artistName.innerHTML = `${artist.Name} <i class="fas fa-caret-down"></i>`;
  //create dropdown
  const artistDropdown = document.createElement("div");
  artistDropdown.classList.add("dropdown");
  //create information block in dropdown
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");
  const infoHeader = document.createElement("h3");
  infoHeader.innerHTML = "Information:";
  const artistInfo = document.createElement("p");
  artistInfo.innerHTML = artist.wTeaser;
  infoDiv.append(infoHeader,artistInfo);
  //create video block in dropdown
  const videoDiv = document.createElement("div");
  videoDiv.classList.add("video");
  const videoHeader = document.createElement("h3");
  videoHeader.innerHTML = "Top Video:";
  const artistVideo = document.createElement("iframe");
  artistVideo.src = artist.yUrl;
  videoDiv.append(videoHeader,artistVideo);
  //create song list block in dropdown
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
  //add all three blocks to dropdown
  artistDropdown.append(infoDiv, videoDiv, songsDiv);
  //add top left wikipedia link
  const artistLink = document.createElement("a");
  artistLink.innerHTML = "Artist Wiki";
  artistLink.href = artist.wUrl;
  artistLink.target = "_blank";
  //add name, dropdown, and wikipedia link to artist block
  artistDiv.append(artistName, artistDropdown, artistLink);
  //add event listeners
  addListener(artistDiv,artistDropdown);
  //add artist to div
  recommendations.appendChild(artistDiv);
  artistDiv.animate([
    // keyframes
    { transform: 'scale(0)' },
    { transform: 'scale(1.2)' },
    { transform: 'scale(1)' }
  ], {
    // timing options
    duration: 500
  });
  //after adding artist check if footer needs to be moved down
  if (document.documentElement.scrollHeight > window.innerHeight){
    //change from absolute position to static so footer moves as artists are being added
    footer.style.position = "static";
  }
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
    //get artist picture
    let url = response.data.response.hits[0].result.primary_artist.image_url;
    let songs = [];
    //get first three song results when searching artist
    for (let i = 0; i < 3; i++) {
      songs.push(response.data.response.hits[i].result.title_with_featured);
    }
    //create artist block with retrieved info
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
    //send each recommendation name to genius api now to get pictures
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
  //clear search
  searchInput.value = "";
  //clear anything that exists in reccomendation area
  clearArea();
  //send to chain of functions above
  getResults(val);
  //respond with message to confirm user's input
  message.innerHTML = `Because you like <span class="red">${val}</span>, we recommend...`;
});
