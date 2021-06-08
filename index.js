const searchForm = document.getElementById("search-artist");
const searchInput = document.getElementById("search-area");
const message = document.querySelector("p");
const recommendations = document.getElementById("recommendations");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = searchInput.value;
  searchInput.value = "";
  message.innerHTML = `Because you like <span class="red">${value}</span>, we recommend...`;
  clearArea();
  for (let i = 1; i < 5; i++) {
    createArtistBlock(`Artist ${i}`);
  }
});

const clearArea = () => {
  while (recommendations.childNodes.length) {
    recommendations.childNodes[0].remove();
  }
};

const createArtistBlock = (name) => {
  const artist = document.createElement("div");
  artist.classList.add("artist");
  const artistName = document.createElement("h3");
  artistName.innerHTML = `${name} <i class="fas fa-caret-down"></i>`;

  // const artistMore = document.createElement("div");
  // artistMore.classList.add("dropdown");

  // artistName.addEventListener("click", () => {
  //   artistMore.classList.toggle("show-dropdown");
  // });

  // const artistInfo = document.createElement("div");
  // const artistInfoHeader = document.createElement("h5");
  // const artistInfoFull = document.createElement("p");
  // artistInfoHeader.innerHTML = "Information:";
  // artistInfoFull.innerHTML = "Lorem ipsum dolor sit amet, consectetur";
  // artistInfo.append(artistInfoHeader, artistInfoFull);
  // artistMore.appendChild(artistInfo);

  // const artistVideo = document.createElement("div");
  // artistVideo.innerHTML = `<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  // artistMore.appendChild(artistVideo);

  // const artistSonglist = document.createElement("div");
  // artistSonglist.innerHTML =
  //   "<h5>Top Songs:</h5><ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>";
  // artistMore.appendChild(artistSonglist);

  artist.appendChild(artistName);
  // artist.appendChild(artistMore);
  recommendations.appendChild(artist);
};
