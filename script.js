const favs = window.localStorage.getItem("favs")
  ? JSON.parse(window.localStorage.getItem("favs"))
  : [];

const renderFavs = () => {
  document
    .querySelectorAll(".items .list .item .image-wrapper i")
    .forEach((fav) => {
      const { id } = fav.dataset;
      if (favs.includes(parseInt(id))) {
        fav.classList.remove("fa-regular");
        fav.classList.add("fa-solid");
      } else {
        fav.classList.remove("fa-solid");
        fav.classList.add("fa-regular");
      }
    });
  document.querySelector("header .favourites .heart span").innerHTML =
    favs.length;
};

window.onload = (event) => {
  renderFavs();
  // Fav Add/Delete functionality
  document
    .querySelectorAll(".items .list .item .image-wrapper i")
    .forEach((fav) =>
      fav.addEventListener("click", (event) => {
        event.preventDefault(); // don't navigate away
        const { id } = event.target.dataset;
        if (favs.includes(parseInt(id))) {
          favs.splice(favs.indexOf(id), 1);
        } else {
          favs.push(parseInt(id));
        }
        window.localStorage.setItem("favs", JSON.stringify(favs));
        renderFavs();
      })
    );

  // Reset Button functionality
  document
    .querySelector(".items .toolbar .reset")
    .addEventListener("click", (event) => {
      favs.splice(0, favs.length);
      window.localStorage.setItem("favs", JSON.stringify(favs));
      renderFavs();
    });
};
