const tags = [
  "jeux vidéos",
  "street figthter",
  "guild wars",
  "bloodbowl",
  "skyrim",
  "musique",
  "punk",
  "rock",
  "classique",
  "metal",
  "chanteur",
  "David Bowie",
  "Jimi Hendrix",
  "Bob Dylan",
  "Bruce Springsteen",
  "chanteuse",
  "Patty Smith",
  "Janis Joplin",
  "Marianne Faithfull",
  "Kate Bush",
  "groupes",
  "Dropkick Murphy's",
  "Queen",
  "Noir Désir",
  "Téléphone",
  "films",
  "La cité de la peur",
  "Le père Noël est une ordure",
  "C'est arrivé près de chez vous",
  "Mon voisin Totoro",
  "acteur",
  "Bradd Pitt",
  "Léonardo di Caprio",
  "Matt Damon",
  "George Clooney",
  "actrice",
  "Scarlett Johannson",
  "Charlize Theron",
  "Christina Ricci",
  "Tea Leoni",
  "Mathématiques",
  "Loi d'Euler",
  "Théorème de Gauss",
  "Théorème de Pythagore",
  "Théorème de Thalès",
  "fruits",
  "banane",
  "orange",
  "pomme",
  "kiwi",
  "légumes",
  "aubergine",
  "courgettes",
  "haricots",
  "petits pois",
  "sciences",
  "astronomie",
  "biologie",
  "paléonthologie",
  "chimie",
  "sports",
  "rugby",
  "football",
  "danse",
  "handball",
  "sportif",
  "Cristiano Ronaldo",
  "Romain N'tamack",
  "Antoine Dupont",
  "Teddy Riner",
  "sportive",
  "Ronda Rousey",
  "Kristie Harrower",
  "Maria Sharapova",
  "Manon Fiorot",
  "Chien",
  "Chat",
  "Maison",
  "Bonheur",
  "Soleil",
  "Route",
  "Été",
  "Livre",
  "Table",
  "Musique",
  "Ciel",
  "Voyage",
  "Vitesse",
  "Stylo",
  "Montagne",
  "Rivière",
  "Café",
  "Orange",
  "Écureuil",
  "Plage",
  "Nuage",
  "Danse",
  "Jardin",
  "Fenêtre",
  "Porte",
  "Forêt",
  "Chemin",
  "Bateau",
  "Crayon",
  "Feuille",
  "Vent",
  "Arbre",
  "Terre",
  "Lune",
  "Étoile",
  "Amour",
  "Temps",
  "Téléphone",
  "Cadeau",
  "Matin",
  "Soir",
  "Silence",
  "Rire",
  "Chanson",
  "Peinture",
  "Cadre",
  "Photo",
  "Piscine",
  "Verre",
  "Miroir",
  "Parfum",
  "Boussole",
  "Trésor",
  "Sourire",
  "Toit",
  "Voiture",
  "Marche",
  "Neige",
  "Glace",
  "Pomme",
  "Banane",
  "Couleur",
  "Ventilateur",
  "Télévision",
  "Film",
  "Piano",
  "Guitare",
  "Balcon",
  "Fleur",
  "Ruisseau",
  "Cascade",
  "Téléscope",
  "Microscope",
  "Univers",
  "Espace",
  "Mars",
  "Jupiter",
  "Pluton",
  "Saturne",
  "Galaxie",
  "Restaurant",
  "Cuisine",
  "Fromage",
  "Vin",
  "Bière",
  "Pont",
  "Train",
  "Avion",
  "Oiseau",
  "Poisson",
  "Baleine",
  "Tortue",
  "Serpent",
  "Souris",
  "Violon",
  "Batterie",
  "Tambour",
  "Dessin",
  "Peinture",
  "Sculpture",
  "Statue",
  "Parc",
  "Zoo",
  "Musée",
  "Monument",
  "Histoire",
  "Légende",
  "Mythologie",
  "Robot",
  "Ordinateur",
  "Internet",
  "Réseau",
  "Données",
  "Information",
  "Connaissance",
  "Sagesse",
  "Intelligence",
  "Idée",
  "Créativité",
  "Innovation",
  "Technologie",
  "Futur",
  "Passé",
  "Présent",
  "Monde",
  "Globe",
  "Continent",
  "Île",
  "Mer",
  "Océan",
  "Volcan",
  "Terre",
  "Eau",
  "Feu",
  "Air",
  "Nature",
  "Environnement",
  "Pollution",
  "Réchauffement",
  "Climat",
  "Écosystème",
  "Plante",
  "Animal",
  "Insecte",
  "Papillon",
  "Abeille",
  "Lion",
  "Tigre",
  "Éléphant",
  "Girafe",
  "Crocodile",
  "Lézard",
  "Savane",
  "Désert",
  "Jungle",
  "Montagne",
  "Vallée",
  "Prairie",
  "Champ",
  "Fleuve",
  "Lac",
  "Grotte",
  "Aventure",
  "Exploration",
  "Découverte",
  "Mystère",
  "Énigme",
  "Évasion",
  "Liberté",
  "Prison",
  "Captivité",
  "Voyage",
  "Destination",
  "Itinéraire",
  "Chemin",
  "Route",
  "Trajet",
  "Départ",
  "Arrivée",
  "Retour",
  "Attente",
  "Impatience",
  "Patience",
  "Calme",
  "Tempête",
  "Hiver",
  "Printemps",
  "Automne",
  "Couverture",
  "Oreiller",
  "Sommeil",
  "Rêve",
  "Réveil",
];
let currentFilter = "all";
let arrayData = [];
const divInitial = document.querySelector(".main_videos");
const tagList = createArray(tags);
const randomTags = document.querySelector(".random-tags");

async function fetchVideo(array) {
  try {
    const monArray = await fetch("./entries.json");
    const response = await monArray.json();
    array.push(response);
    return array;
  } catch (Error) {
    console.error(Error);
  }
}
const allVideos = await fetchVideo(arrayData);

const previous = document.getElementById("left_button");
previous.onclick = function () {
    document.getElementById("random-tags").scrollLeft += 100;
};
const next = document.getElementById("right_button");
next.onclick = function () {
    document.getElementById("random-tags").scrollLeft -= 100;
};

function dateCalculator(date) {
  const jour = 3600000 * 24;
  console.log(date);
  const today = new Date();
  const newDate = new Date(date);
  const publication = Date.parse(today) - Date.parse(newDate);
  let result = Math.floor(publication / jour);
  console.log(result);

  if (result === 1) {
    return result + " jour";
  }
  if (result < 7) {
    return result + " jours";
  }
  if (result < 30) {
    const semaines = Math.floor(result / 7);
    if (semaines === 1) {
      return semaines + " semaine";
    } else {
      return semaines + " semaines";
    }
  }
  if (result < 360) {
    const mois = Math.floor(result / 30);
    return mois + " mois";
  } else {
    const years = Math.floor(result / 360);
    if (years === 1) {
      return years + " an";
    } else {
      return years + " ans";
    }
  }
}

function getRandomNumber(entries) {
  const result = Math.floor(Math.random() * entries);
  return result;
}

function createArray(array) {
  const resultArray = [];
  let count = 0;
  while (count < 20) {
    let randomIndex = getRandomNumber(268);
    if (!resultArray.includes(array[randomIndex])) {
      resultArray.push(array[randomIndex]);
      count += 1;
    }
  }
  return resultArray;
}

function cardGenerator(videoFiltered) {
  console.log(videoFiltered, "regarde ici");
  for (let i = 0; i < videoFiltered.length; i++) {
    const div = document.createElement("div");
    div.classList = "vignette_totale";
    console.log(videoFiltered[i].title);
    div.innerHTML = `
        <div class="image">
            <img src="https://picsum.photos/300/200?random=${getRandomNumber(100)}">
        </div>
        <div class="video_details">
            <div class="mise-en-page">
                <div class="details_perso">
                    <img src="https://picsum.photos/30/30?random=${getRandomNumber(100)}">
                </div>
                <div class="video_title">
                    <h2>${videoFiltered[i].title}</h2>
                </div>
            </div>
                <div class="publication_date">
                <h2>Publication : ${dateCalculator(
                  videoFiltered[i].publication_date
                )}</h2>
                <h2>${videoFiltered[i].nb_views} vues</h2>
                </div>
        </div>
        `;
    divInitial.appendChild(div);
  }
}

cardGenerator(allVideos[0]);

const btnAll = document.querySelector("#btn_all");

btnAll.addEventListener("click", () => {
    const vignettes = document.querySelectorAll(".vignette_totale");
    const allButton = document.querySelectorAll(".tags");
    currentFilter = "all";
    Array.from(vignettes).map((elem) => elem.remove());
    Array.from(allButton).map((elem) => elem.classList.remove("newcolor"));
    btnAll.classList.add("newcolor");
    cardGenerator(allVideos[0]);
  });

for (let i = 0; i < 20; i++) {
  let newSpan = document.createElement("button");
  newSpan.innerText = tagList[i];
  newSpan.setAttribute("class", "tags");
  randomTags.appendChild(newSpan);
  newSpan.addEventListener("click", () => {
    const vignettes = document.querySelectorAll(".vignette_totale");
    const allButton = document.querySelectorAll(".tags");
    currentFilter = tagList[i];
    Array.from(vignettes).map((elem) => elem.remove());
    Array.from(allButton).map((elem) => elem.classList.remove("newcolor"));
    newSpan.classList.add("newcolor");
    cardGenerator(
      allVideos[0].filter((elem) => {
        if (currentFilter === "all") {
          return elem;
        } else {
          return elem.categories.includes(currentFilter);
        }
      })
    );
  });
}
