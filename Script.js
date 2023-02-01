/* KONSTANTER */
let temp = document.querySelector("template");
let container = document.querySelector("section");

/* HENTER DATA */

/* Henter daten via filen actor.json */
const fil = "actors.json";
/* Henter json  */
async function hentData(fil) {
  const response = await fetch(fil);
  /* Gør at vores template nu indeholder vores json data */
  const json = await response.json();
  vis(json);
}

/* ARRAY  */
function vis(json) {
  console.log(json);

  json.forEach((actor) => {
    /* Gør at filreringen altid starter med at vise alle */
    const klon = temp.cloneNode(true).content;
    klon.querySelector(".fuldeNavn").textContent = actor.fullname;
    klon.querySelector(".film").textContent = actor.movie;
    klon.querySelector("article").addEventListener("click", () => visEnkelt(actor));
    container.appendChild(klon);
  });
}

/* LUK */
/* document.querySelector("#luk").addEventListener("click", () => (popup.style.display = "none")); */

function visEnkelt(popopData) {
  console.log(popopData);
  const popop = document.querySelector(".popup_container");
  popop.style.display = "flex";
  popop.querySelector("p").textContent = popopData.fullname;
  popop.querySelector("p").textContent = popopData.movie;
}

hentData(fil);
