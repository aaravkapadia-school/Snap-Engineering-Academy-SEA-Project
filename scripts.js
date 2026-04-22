/**
 * This is a catalog of the top 5 UFC fighter per each weight class, saved as objects.
 * By default, the catalog is displayed by weight class, where each row contians the weight class' fighter in descending order by rank.
 * The champion card of each division is given a special golden shine to show off the status.
 * 3 different functions are supported: searching, filtering, and adding a new fighter.
 * There are 6 filter-by modes: default(weight class), wins, losses, knockouts, submissions, and ranking.
 * The searching function supports not only full fighter names, but also substrings of names
 * Adding a new fighter uses a form with user validation to add a new fighter to the rankings. 
 * If a new fighter is placed in the top 5, it pushes all subsequent fighters down 1 ranking
 */

//Top 5 UFC fighters from each weight class, stored as objects
let ufcFighters = [
  //Flyweight Top 5
  {name: "Joshua Van", nickname: "The Fearless", division: "Flyweight", wins: "16", losses: "2", draws: "0", ranking: "C", knockouts: "8", submissions: "2", posterUrl: "https://images.tapology.com/letterbox_images/254261/default/Screenshot_%284%29.png?1751300945"},
  {name: "Alexandre Pantoja", nickname: "The Cannibal", division: "Flyweight", wins: "30", losses: "6", draws: "0", ranking: "1", knockouts: "8", submissions: "12", posterUrl: "https://images.tapology.com/letterbox_images/12767/default/Screenshot_%282%29.png?1751300844"},
  {name: "Manel Kape", nickname: "Starboy", division: "Flyweight", wins: "22", losses: "7", draws: "0", ranking: "2", knockouts: "14", submissions: "5", posterUrl: "https://images.tapology.com/letterbox_images/70075/default/Screenshot_%281%29.png?1715203553"},
  {name: "Tatsuro Taira", nickname: "The Best", division: "Flyweight", wins: "18", losses: "1", draws: "0", ranking: "3", knockouts: "6", submissions: "8", posterUrl: "https://images.tapology.com/letterbox_images/145595/default/Screenshot.png?1718171041"},
  {name: "Brandon Royval", nickname: "Raw Dawg", division: "Flyweight", wins: "17", losses: "9", draws: "0", ranking: "4", knockouts: "4", submissions: "9", posterUrl: "https://images.tapology.com/letterbox_images/25031/default/Screenshot.png?1734752013"},

  //Bantamweight Top 5
  {name: "Petr Yan", nickname: "No Mercy", division: "Bantamweight", wins: "20", losses: "5", draws: "0", ranking: "C", knockouts: "7", submissions: "1", posterUrl: "https://images.tapology.com/letterbox_images/90075/default/yan_2.png?1526525773"},
  {name: "Merab Dvalishvili", nickname: "The Machine", division: "Bantamweight", wins: "21", losses: "5", draws: "0", ranking: "1", knockouts: "3", submissions: "2", posterUrl: "https://images.tapology.com/letterbox_images/47934/default/Screenshot_%282%29.png?1746475538"},
  {name: "Umar Nurmagomedov", nickname: "Young Eagle", division: "Bantamweight", wins: "20", losses: "1", draws: "0", ranking: "2", knockouts: "2", submissions: "7", posterUrl: "https://images.tapology.com/letterbox_images/134206/default/https___fansided.com_files_2022_03_ABC06592.jpg?1656222100"},
  {name: "Sean O'Malleyn", nickname: "Suga", division: "Bantamweight", wins: "19", losses: "3", draws: "0", ranking: "3", knockouts: "12", submissions: "0", posterUrl: "https://images.tapology.com/letterbox_images/68186/default/Sean_O'Malley.jpg?1583296159"},
  {name: "Cory Sandhagen", nickname: "The Sandman", division: "Bantamweight", wins: "18", losses: "6", draws: "0", ranking: "4", knockouts: "8", submissions: "3", posterUrl: "https://images.tapology.com/letterbox_images/32931/default/IMG_20230225_045714.jpg?1677301152"},

  //Featherweight Top 5
  {name: "Alexander Volkanovski", nickname: "The Great", division: "Featherweight", wins: "28", losses: "4", draws: "0", ranking: "C", knockouts: "13", submissions: "3", posterUrl: "https://images.tapology.com/letterbox_images/41705/default/Screenshot.png?1751298323"},
  {name: "Movsar Evloev", nickname: "N/A", division: "Featherweight", wins: "20", losses: "0", draws: "0", ranking: "1", knockouts: "3", submissions: "4", posterUrl: "https://images.tapology.com/letterbox_images/85897/default/Movsar_Evloev.jpg?1552573824"},
  {name: "Diego Lopes", nickname: "N/A", division: "Featherweight", wins: "27", losses: "8", draws: "0", ranking: "2", knockouts: "11", submissions: "12", posterUrl: "https://images.tapology.com/letterbox_images/85643/default/55554450_625477591236755_8661314822450708480_n.jpg?1553106120"},
  {name: "Lerone Murphy", nickname: "The Miracle", division: "Featherweight", wins: "17", losses: "1", draws: "1", ranking: "3", knockouts: "8", submissions: "0", posterUrl: "https://images.tapology.com/letterbox_images/84753/default/Screenshot.png?1714275347"},
  {name: "Yair Rodriguez", nickname: "El Pantera", division: "Featherweight", wins: "21", losses: "5", draws: "0", ranking: "4", knockouts: "8", submissions: "5", posterUrl: "https://images.tapology.com/letterbox_images/70995/default/Yair-Rodriguez-UFC-weigh-in.jpg?1569256920"},

  //Lightweight Top 5
  {name: "Ilia Topuria", nickname: "El Matador", division: "Lightweight", wins: "17", losses: "0", draws: "0", ranking: "C", knockouts: "7", submissions: "8", posterUrl: "https://images.tapology.com/letterbox_images/129278/default/f.elconfidencial.com_original_d70_97f_0c5_d7097f0c5fa2faa6da13f7005e95997c_edit_9549835779116750.jpg?1675041526"},
  {name: "Justin Gaethje", nickname: "The Highlight", division: "Lightweight", wins: "27", losses: "5", draws: "0", ranking: "1", knockouts: "20", submissions: "0", posterUrl: "https://images.tapology.com/letterbox_images/16421/default/image.jpg?1555518358"},
  {name: "Arman Tsarukyan", nickname: "Ahalkalakets", division: "Lightweight", wins: "23", losses: "3", draws: "0", ranking: "2", knockouts: "9", submissions: "6", posterUrl: "https://images.tapology.com/letterbox_images/115752/default/Arman_Tsarukyan.jpg?1655131245"},
  {name: "Charles Oliveira", nickname: "Do Bronx", division: "Lightweight", wins: "37", losses: "11", draws: "0", ranking: "3", knockouts: "10", submissions: "22", posterUrl: "https://images.tapology.com/letterbox_images/1613/default/IMG_20220822_213322.jpg?1661200598"},
  {name: "Max Holloway", nickname: "Blessed", division: "Lightweight", wins: "27", losses: "9", draws: "0", ranking: "4", knockouts: "12", submissions: "2", posterUrl: "https://images.tapology.com/letterbox_images/12723/default/Holloway-Max-UFC155-1.jpg?1356760787"},

  //Welterweight Top 5
  {name: "Islam Makhachev", nickname: "N/A", division: "Welterweight", wins: "28", losses: "1", draws: "0", ranking: "C", knockouts: "5", submissions: "13", posterUrl: "https://images.tapology.com/letterbox_images/40148/default/Islam_Makhachev.jpg?1716556088"},
  {name: "Jack Della Maddalena", nickname: "JDM", division: "Welterweight", wins: "18", losses: "3", draws: "0", ranking: "1", knockouts: "12", submissions: "2", posterUrl: "https://images.tapology.com/letterbox_images/119831/default/Screenshot_%281%29.png?1746453029"},
  {name: "Ian Machado Garry", nickname: "The Future", division: "Welterweight", wins: "17", losses: "1", draws: "0", ranking: "2", knockouts: "7", submissions: "1", posterUrl: "https://images.tapology.com/letterbox_images/171377/default/maxresdefault.jpg?1707591994"},
  {name: "Michael Morales", nickname: "The Cobra", division: "Welterweight", wins: "19", losses: "0", draws: "0", ranking: "3", knockouts: "14", submissions: "1", posterUrl: "https://images.tapology.com/letterbox_images/164286/default/morales1.jpg?1739916031"},
  {name: "Belal Muhammad", nickname: "Remember the Name", division: "Welterweight", wins: "24", losses: "5", draws: "0", ranking: "4", knockouts: "5", submissions: "1", posterUrl: "https://images.tapology.com/letterbox_images/32797/default/belal-muhammad.jpg?1726175132"},

  //Middleweight Top 5
  {name: "Khamzat Chimaev", nickname: "Borz", division: "Middleweight", wins: "15", losses: "0", draws: "0", ranking: "C", knockouts: "6", submissions: "6", posterUrl: "https://images.tapology.com/letterbox_images/188143/default/IMG_20200725_171428.jpg?1595693702"},
  {name: "Dricus Du Plessis", nickname: "StillKnocks", division: "Middleweight", wins: "23", losses: "3", draws: "0", ranking: "1", knockouts: "9", submissions: "11", posterUrl: "https://images.tapology.com/letterbox_images/51267/default/dricus-du-plessis.jpg?1738201950"},
  {name: "Nassourdine Imavov", nickname: "The Sniper", division: "Middleweight", wins: "17", losses: "4", draws: "0", ranking: "2", knockouts: "7", submissions: "4", posterUrl: "https://images.tapology.com/letterbox_images/125404/default/IMG-20201021-WA0000.jpg?1603259229"},
  {name: "Sean Strickland", nickname: "N/A", division: "Middleweight", wins: "30", losses: "7", draws: "0", ranking: "3", knockouts: "12", submissions: "4", posterUrl: "https://images.tapology.com/letterbox_images/6055/default/1039222573_seanstricklanddadad_202401.jpg?1705617252"},
  {name: "Brendan Allen", nickname: "All In", division: "Middleweight", wins: "26", losses: "7", draws: "0", ranking: "4", knockouts: "6", submissions: "14", posterUrl: "https://images.tapology.com/letterbox_images/91516/default/Brendan.jpg?1515965823"},

  //Light Heavyweight Top 5
  {name: "Carlos Ulberg", nickname: "Black Jag", division: "Light Heavyweight", wins: "15", losses: "1", draws: "0", ranking: "C", knockouts: "10", submissions: "1", posterUrl: "https://images.tapology.com/letterbox_images/203365/default/Carlos_Ulberg.png?1614918871"},
  {name: "Magomed Ankalaev", nickname: "N/A", division: "Light Heavyweight", wins: "21", losses: "2", draws: "1", ranking: "1", knockouts: "11", submissions: "0", posterUrl: "https://images.tapology.com/letterbox_images/83405/default/ANKALAEV_MAGOMED_L_03-12.png?1670565268"},
  {name: "Alex Pereira", nickname: "Poatan", division: "Light Heavyweight", wins: "13", losses: "3", draws: "0", ranking: "2", knockouts: "11", submissions: "0", posterUrl: "https://images.tapology.com/letterbox_images/117305/default/Screenshot.png?1727291880"},
  {name: "Jiri Prochazka", nickname: "N/A", division: "Light Heavyweight", wins: "32", losses: "6", draws: "1", ranking: "3", knockouts: "28", submissions: "3", posterUrl: "https://images.tapology.com/letterbox_images/34779/default/IMG_20201028_052204.jpg?1603862546"},
  {name: "Jan Blachowicz", nickname: "N/A", division: "Light Heavyweight", wins: "29", losses: "11", draws: "2", ranking: "4", knockouts: "9", submissions: "9", posterUrl: "https://images.tapology.com/letterbox_images/11301/default/jan_blachowicz_belt.jpg?1601228777"},

  //Heavyweight Top 5
  {name: "Tom Aspinall", nickname: "The Honey Badger", division: "Heavyweight", wins: "15", losses: "3", draws: "0", ranking: "C", knockouts: "12", submissions: "3", posterUrl: "https://images.tapology.com/letterbox_images/23273/default/3750412-76298168-2560-1440_2.jpg?1761945563"},
  {name: "Ciryl Gane", nickname: "Bon Gamin", division: "Heavyweight", wins: "13", losses: "2", draws: "0", ranking: "1", knockouts: "6", submissions: "3", posterUrl: "https://images.tapology.com/letterbox_images/187819/default/IMG_20190825_204813.jpg?1566758964"},
  {name: "Alexander Volkov", nickname: "Drago", division: "Heavyweight", wins: "39", losses: "11", draws: "0", ranking: "2", knockouts: "24", submissions: "4", posterUrl: "https://images.tapology.com/letterbox_images/3992/default/Alexander_Volkov.png?1612673227"},
  {name: "Sergei Pavlovich", nickname: "N/A", division: "Heavyweight", wins: "20", losses: "3", draws: "0", ranking: "3", knockouts: "15", submissions: "0", posterUrl: "https://images.tapology.com/letterbox_images/89112/default/Sergey_Pavlovich.jpg?1539891381"},
  {name: "Waldo Cortes Acosta", nickname: "Salsa Boy", division: "Heavyweight", wins: "17", losses: "2", draws: "0", ranking: "4", knockouts: "9", submissions: "1", posterUrl: "https://images.tapology.com/letterbox_images/92314/default/Screenshot_%281%29.png?1741583499"},
]


/**
 * This function displays the cards, with 5 fighters per row
 * if no filter was applied, display by weight divisions (with titles for each division)
 * if a filter was applied, display as flat, untitled rows.
 * @param fighters array of fighters to be inputted
 * @param unfiltered boolean- True-> display weight divisions with titles, False-> display with no titles
 */
function showCards(fighters, unfiltered) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  if (unfiltered) {
    const divisions = ["Flyweight", "Bantamweight", "Featherweight", "Lightweight", "Welterweight", "Middleweight", "Light Heavyweight", "Heavyweight"];
    for (let i = 0; i < divisions.length; i++) {
      let header = document.createElement("h2");
      header.textContent = divisions[i];
      header.className = "division-header";
      cardContainer.appendChild(header);
      let row = document.createElement("div");
      row.className = "division-row";
      cardContainer.appendChild(row);
      let divisionFighters = [];
      for (let j = 0; j < fighters.length; j++) {
        if (fighters[j].division === divisions[i]) {
          divisionFighters.push(fighters[j]);
        }
      }
      divisionFighters.sort((a, b) => {
        if (a.ranking === "C") return -1;
        if (b.ranking === "C") return 1;
        return Number(a.ranking) - Number(b.ranking);
      });
      for (let k = 0; k < divisionFighters.length; k++) {
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, divisionFighters[k]);
        row.appendChild(nextCard);
      }
    }
  } else {
    const row = document.createElement("div");
    row.className = "division-row";
    cardContainer.appendChild(row);
    for (let j = 0; j < fighters.length; j++) {
      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, fighters[j]);
      row.appendChild(nextCard);
    }
  }
}

/**
 * This functions sorts the fighters by different categories, then calls showCards with the sorted list of fighters to display
 */
function filter() {
  const filterBy = document.getElementById("sort-select").value;
  if (filterBy === "default") {
    showCards(ufcFighters, true);
    return;  
  }
  let sorted = [...ufcFighters]; 
  if (filterBy === "wins-desc") {
    sorted.sort((a, b) => Number(b.wins) - Number(a.wins));
  } else if (filterBy === "losses-desc") {
    sorted.sort((a, b) => Number(b.losses) - Number(a.losses));
  } else if (filterBy === "knockouts-desc") {
    sorted.sort((a, b) => Number(b.knockouts) - Number(a.knockouts));
  } else if (filterBy === "submissions-desc") {
    sorted.sort((a, b) => Number(b.submissions) - Number(a.submissions));
  } else if (filterBy === "ranking") {
    sorted.sort((a, b) => {
      if (a.ranking === "C") return -1;
      if (b.ranking === "C") return 1;
      return Number(a.ranking) - Number(b.ranking);
    });
  }
  showCards(sorted, false);
}

/**
 * This function is to add a new fighter using user input
 * If a new fighter is added to the top 5, it shifts subsequent fighters down 1
 * If a new ifther is a champion, they are given the gold status
 */
function addFighter() {
  const name = document.getElementById("input-name").value;
  const nickname = document.getElementById("input-nickname").value;
  const division = document.getElementById("input-division").value;
  const wins = document.getElementById("input-wins").value;
  const losses = document.getElementById("input-losses").value;
  const draws = document.getElementById("input-draws").value;
  const knockouts = document.getElementById("input-knockouts").value;
  const submissions = document.getElementById("input-submissions").value;
  const ranking = document.getElementById("input-ranking").value;
  const posterUrl = document.getElementById("input-poster").value;
  if (name === "") {
    alert("Please enter a fighter name");
    return;
  }
  if (wins === "" || losses === "" || draws === "" || knockouts === "" || submissions === "") {
    alert("Please fill in all record fields (wins, losses, draws, KOs, submissions)");
    return;
  }
  if (Number(wins) < 0 || Number(losses) < 0 || Number(draws) < 0) {
    alert("Wins, losses, and draws cannot be negative");
    return;
  }
  if (ranking === "") {
    alert("Please enter a ranking (1-15 or C)");
    return;
  }
  if (ranking !== "C" && (isNaN(Number(ranking)) || Number(ranking) < 1 || Number(ranking) > 15)) {
    alert("Ranking must be a number between 1-15 or C for champion");
    return;
  }
  if (Number(knockouts) > Number(wins)) {
    alert("Knockouts cannot be greater total wins");
    return;
  }
  if (Number(submissions) > Number(wins)) {
    alert("Submissions cannot be greater total wins");
    return;
  } 
  if(((Number(submissions)) + Number(knockouts)) > Number(wins)) {
    alert("Finishes cannot be greater than total wins")
  }
  const newFighter = {
    name: name,
    nickname: nickname,
    division: division,
    wins: wins,
    losses: losses,
    draws: draws,
    knockouts: knockouts,
    submissions: submissions,
    ranking: ranking,
    posterUrl: posterUrl
  };
  if (newFighter.ranking !== "C") {
    for (let i = 0; i < ufcFighters.length; i++) {
      if (
        ufcFighters[i].division === newFighter.division &&
        ufcFighters[i].ranking !== "C" &&
        Number(ufcFighters[i].ranking) >= Number(newFighter.ranking)
      ) {
        ufcFighters[i].ranking = String(Number(ufcFighters[i].ranking) + 1);
      }
    }
  } else if (newFighter.ranking === "C") {
    for (let i = 0; i < ufcFighters.length; i++) {
      if (
        ufcFighters[i].division === newFighter.division &&
        ufcFighters[i].ranking === "C"
      ) {
        ufcFighters[i].ranking = "1";
        for (let j = 0; j < ufcFighters.length; j++) {
          if (
            ufcFighters[j].division === newFighter.division &&
            ufcFighters[j].ranking !== "C" &&
            ufcFighters[j] !== ufcFighters[i]
          ) {
            ufcFighters[j].ranking = String(Number(ufcFighters[j].ranking) + 1);
          }
        }
        break;
      }
    }
  }
  ufcFighters.push(newFighter);
  showCards(ufcFighters, true);
  document.getElementById("add-fighter-form").reset();
}

/**
 * This function searches throught the fighter data, and gives the user back fighters that contain the substring inputted by the user
 */
function searchFighters() {
  const query = document.getElementById("search-input").value.toLowerCase();
  if (query === "") {
    showCards(ufcFighters, true);
    return;
  }
  let filtered = [];
  for (let i = 0; i < ufcFighters.length; i++) {
    const nameMatch = ufcFighters[i].name.toLowerCase().includes(query);
    const nicknameMatch = ufcFighters[i].nickname.toLowerCase().includes(query);
    const divisionMatch = ufcFighters[i].division.toLowerCase().includes(query);
    if (nameMatch || nicknameMatch || divisionMatch) {
      filtered.push(ufcFighters[i]);
    }
  }

  showCards(filtered, false);
}

/**
 * Function to clear the search
 */
function clearSearch() {
  document.getElementById("search-input").value = "";
  showCards(ufcFighters, true);
}

/**
 * Funnction to create the card and add content
 * @param card card to be edited
 * @param fighter fighter object
 */
function editCardContent(card, fighter) {
  card.style.display = "block";
  if (fighter.ranking === "C") {
    card.classList.add("champion-card");
  } else {
    card.classList.remove("champion-card");
  }
  card.querySelector("h2").textContent = fighter.name;
  card.querySelector("img").src = fighter.posterUrl
  card.querySelector("img").alt = fighter.name;
  card.querySelector(".nickname").textContent = fighter.nickname != "N/A" ? "Nickname: " + fighter.nickname : "";
  card.querySelector(".record").textContent = fighter.wins + "-" + fighter.losses + "-" + fighter.draws;
  card.querySelector(".ranking").textContent = fighter.ranking === "C" ? "Champion" : "Rank: #" + fighter.ranking;
  card.querySelector(".kos").textContent = fighter.knockouts + " KOs";
  card.querySelector(".subs").textContent = fighter.submissions + " Submissions";
  console.log("new card:", fighter.name, "- html: ", card);
}
showCards(ufcFighters, true);

