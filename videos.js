let arrayData = [];

async function fetchVideo(array) {
    try{
        const monArray = await fetch("./entries.json");
        const response = await monArray.json();
        array.push(response);
            }
    catch (Error) {
        console.error(Error);
    }
}

await fetchVideo(arrayData);

function dateCalculator(date) {
    const jour = 3600000*24;
    console.log(date);
    const today = new Date();
    const newDate = new Date(date);
    const publication = Date.parse(today) - Date.parse(newDate);
    let result = Math.floor(publication/jour);
    console.log(result)

    if (result === 1) {
        return result + " jour";
    }
    if (result < 7) {
        return result + " jours";
    }
    if (result < 30) {
        const semaines = Math.floor(result/7);
        if (semaines === 1) {
            return semaines + " semaine";
        } else {
            return semaines + " semaines";
        }
    }
    if (result <360) {
        const mois = Math.floor(result/30);
        return mois + " mois";

    } else {
        const years = Math.floor(result/ 360);
        if (years === 1) {
            return years + " an";
        } else {
            return years + " ans";
        }
    }
}

const divInitial = document.querySelector(".main_videos");

for (let i =0; i < 12; i++) {
    const div = document.createElement("div");
    div.classList = "vignette_totale";
    div.innerHTML = `
    <div class="image">
        <img src="https://picsum.photos/300/200?random=${i}">
    </div>
    <div class="video_details">
        <div class="mise-en-page">
            <div class="details_perso">
                <img src="https://picsum.photos/30/30?random=${i}">
            </div>
            <div class="video_title">
                <h2>${arrayData[0][i].title}</h2>
            </div>
        </div>
            <div class="publication_date">
            <h2>Publication : ${dateCalculator(arrayData[0][i].publication_date)}</h2>
            <h2>${arrayData[0][i].nb_views} vues</h2>
            </div>
    </div>
    `
divInitial.appendChild(div);
}

