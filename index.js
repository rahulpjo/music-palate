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

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = searchInput.value;
  searchInput.value = "";
  message.innerHTML = `Because you like <span class="red">${value}</span>, we recommend...`;
  clearArea();
  for (let i = 1; i < 5; i++) {
    createArtistBlock(`Artist ${i}`);
  }
  addListeners();
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

  artist.appendChild(artistName);
  recommendations.appendChild(artist);
};
