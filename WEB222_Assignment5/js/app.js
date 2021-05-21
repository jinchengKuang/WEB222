// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // TODO: call the Simple Map's addObservation method for every one
  // of the observations in order to add markers to the map.
  observations.forEach((observation) => {
    map.addObservation(observation);
  });
}

// Update the cards to show markers for the set of observations
function updateCards(observations) {
  // Remove any current data from the cards
  clearAllCards();

  // Populate the cards with all observation data we want to show
  observations.forEach((observation) => {
    buildCardForObservation(observation);
  });
}

// Show all species on the map and table
// function showAll() {
//     // Get all the observations from our data.js and format them so we can work with the data
//     const observations = getAllObservations();

//     // Update the map and table
//     updateMap(observations, map);
//     updateTable(observations);
//     updateTableTitle(`All Species (${observations.length})`);
// }

// // Show native species on the map and table
// function showOnlyNative() {
//     // Get all the observations from our data.js and format them so we can work with the data
//     const observations = getAllObservations();
//     // Filter out any that aren't native species
//     const native = filterOnlyNative(observations);

//     // Update the map and table
//     updateMap(native, map);
//     updateTable(native);
//     updateTableTitle(`Only Native Species (${native.length})`);
// }

// // Show introduced species on the map and table
// function showOnlyIntroduced() {
//     // Get all the observations from our data.js and format them so we can work with the data
//     const observations = getAllObservations();
//     // Filter out any that aren't introduced species
//     const introduced = filterOnlyIntroduced(observations);

//     // Update the map and table
//     updateMap(introduced, map);
//     updateTable(introduced);
//     updateTableTitle(`Only Introduced Species (${introduced.length})`);
// }

/* rewrite the show function */
function show(observation) {
  const observations = getAllObservations();
  const native = filterOnlyNative(observations);
  const introduced = filterOnlyIntroduced(observations);
  if (observation === "All") {
    updateMap(observations, map);
    updateCards(observations);
    updateCardsTitle(`All Species (${observations.length})`);
  } else if (observation === "OnlyNative") {
    updateMap(native, map);
    updateCards(native);
    updateCardsTitle(`Only Native Species (${native.length})`);
  } else if (observation === "OnlyIntroduced") {
    updateMap(introduced, map);
    updateCards(introduced);
    updateCardsTitle(`Only Introduced Species (${introduced.length})`);
  }
}

function start() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // TODO: create click handlers for all three buttons.
  // The "All Species" button should call the showAll function.
  // The "Only Native Species" button should call the showOnlyNative function.
  // The "Only Introduced Species" button should call the showOnlyIntroduced function.
  // In your solution, show both ways of creating click event handlers (i.e.,
  // using the on* property and also addEventListener function).
  var btn_all = document.getElementById("show-all");
  var btn_native = document.getElementById("show-native");
  var btn_intro = document.getElementById("show-introduced");

  btn_all.onclick = function () {
    //showAll();
    show("All");
  };

  btn_native.onclick = function () {
    //showOnlyNative();
    show("OnlyNative");
  };

  btn_intro.onclick = function () {
    //showOnlyIntroduced();
    show("OnlyIntroduced");
  };

  /* below using addEventListener */
  //btn_all.addEventListener("click", function() {
  //    showAll();
  //});
  //
  //btn_native.addEventListener("click", function() {
  //    showOnlyNative();
  //});
  //
  //btn_intro.addEventListener("click", function() {
  //    showOnlyIntroduced();
  //});

  // Show all species observations by default when we start.
  //showAll();
  show("All");
}

// TODO: replace this console.log with the code necessary to call the start
// function when the page has finished fully loading.
//console.log(`OK, let's begin!`);
window.onload = function () {
  start();
};
