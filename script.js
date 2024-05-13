let likes = 0;
function likePhoto() {
  likes++;
  document.getElementById("likes").innerHTML = likes;
}
const apiKey = "Z7lokYLp7i078V-xBAWQfDxdTMrLIXoNGFX-N_4phRw";
const randomImage = document.getElementById("randomImage");

async function getRandomImage() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${apiKey}`
  );
  const data = await response.json();
  randomImage.src = data.urls.small;
}

function saveLikes() {
  localStorage.setItem("likes", document.getElementById("likes").innerHTML);
}

function loadLikes() {
  const likes = localStorage.getItem("likes");
  document.getElementById("likes").innerHTML = likes || 0;
}

getRandomImage();
saveLikes();
loadLikes();