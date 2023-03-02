const favs = [];
window.onload = (event) => {
  // Fav Add/Delete functionality
  document
    .querySelectorAll("#cats .list .cat .image-wrapper i")
    .forEach((fav) =>
      fav.addEventListener("click", (event) => {
        event.preventDefault(); // don't navigate away
        var id = event.target.dataset.id;
        if (favs.includes(id)) {
          favs.splice(favs.indexOf(id), 1);
          event.target.classList.remove("fa-solid");
          event.target.classList.add("fa-regular");
        } else {
          favs.push(id);
          event.target.classList.remove("fa-regular");
          event.target.classList.add("fa-solid");
        }
        document.querySelector("header .favourites .heart span").innerHTML =
          favs.length;
      })
    );

  // Reset Button functionality
  document
    .querySelector("#cats .toolbar .reset")
    .addEventListener("click", (event) => {
      document
        .querySelectorAll("#cats .list .cat .image-wrapper i")
        .forEach((fav) => {
          fav.classList.remove("fa-solid");
          fav.classList.add("fa-regular");
        });
      favs.splice(0, favs.length);
      document.querySelector("header .favourites .heart span").innerHTML =
        favs.length;
    });
};
