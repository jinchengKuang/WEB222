const { doc } = require("prettier");
/* updateTableTitle --> updateCardsTitle */
// Add the text to the <span>...<span> element in the element with id=table-title
// function updateTableTitle(title) {
//     // TODO
//     var h2 = document.getElementById("table-title");
//     var span = h2.getElementsByTagName("span")[0];
//     var text = document.createTextNode(title);
//     if (span.hasChildNodes()) {
//         span.removeChild(span.firstChild);
//     }
//     span.appendChild(text);
// }

/* updateCardsTitle */
// Add the text to the <span>...<span> element in the element with id=cards-title
function updateCardsTitle(title) {
    // TODO
    var span = document.getElementById("title_span");
    var txt = document.createTextNode(title);
    while (span.firstChild) {
        span.removeChild(span.firstChild);
    }
    span.appendChild(txt);
}

/* delete addRowToTable */
// Add the given <tr>...</tr> element to the table body element with id=rows
// function addRowToTable(row) {
//     // TODO
//     var tbody = document.getElementById("rows");
//     tbody.appendChild(row);
// }

/* clearAllTableRows --> clearAllCards */
// Remove all content from the table body element with id=rows
// function clearAllTableRows() {
//     // TODO
//     var rows = document.getElementById("rows");
//     while (rows.firstChild) {
//         rows.removeChild(rows.firstChild);
//     }
// }

/* clearAllCards */
// Remove all content from the <div> element with id=observation-data
function clearAllCards() {
    // TODO
    var cards = document.getElementById("observation-cards");
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }
}

/* delete createTableRow */
// Creates and returns new table row <tr> element with the specified id value.
// function createTableRow(id) {
//     // TODO
//     var tr = document.createElement("tr");
//     tr.id = id;
//     return tr;
// }

/* delete createTableCell */
// Given a child element, create a <td> and add this child to it. Return the <td>.
// function createTableCell(child) {
//     // TODO
//     var td = document.createElement("td");
//     td.appendChild(child);
//     return td;
// }

/* delete addContentToRow */
// Wraps a child element in a <td>...</td> and adds it to the table row
// function addContentToRow(child, row) {
//     // TODO
//     var td = document.createElement("td");
//     td.appendChild(child);
//     row.appendChild(td);
// }

/* delete createImg*/
// Given a URL src string and alt text string, create an <img> element and return:
// <img src="https://static.inaturalist.org/photos/109319291/square.jpg?1609877680" alt="Muskrat">
// function createImg(src, alt) {
//     // TODO
//     var img = document.createElement("img");
//     img.src = src;
//     img.alt = alt;
//     return img;
// }

/* delete createText */
// Given a string of text, create and return a TextNode
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
// function createText(text) {
//     // TODO
//     var txt = document.createTextNode(text);
//     return txt;
// }

/* delete createAnchor */
// create and return an anchor element.
// <a href="http://en.wikipedia.org/wiki/Muskrat">Muskrat</a>.  NOTE:
// The innerContent will be a TextNode or HTML Img Element (i.e., it
// won't be simple text).
// function createAnchor(href, innerContent) {
//     // TODO
//     var a = document.createElement("a");
//     a.href = href;
//     a.appendChild(innerContent);
//     return a;
// }

/* delete createTime */
// Return a proper time element with its dateTime property set:
// <time datetime="2020-09-18">2020-09-18</time>
// function createTime(formatted) {
//     // TODO
//     var time = document.createElement("time");
//     time.dateTime = formatted;
//     var txt = document.createTextNode(formatted);
//     time.appendChild(txt);
//     return time;
// }

/* delete toYesNo */
// Given a boolean value (true/false) return a string "Yes" or "No"
// function toYesNo(value) {
//     // TODO
//     return value ? "Yes" : "No";
// }

/* buildRowForObservation --> buildCardForObservation */
// Converts an Observation object into DOM nodes that produce the following HTML:
//
//  <tr id="67868131">
//    <td>
//      <a href="https://www.inaturalist.org/observations/67868131">
//        <img
//          src="https://static.inaturalist.org/photos/109319291/square.jpg?1609877680"
//          alt="Muskrat">
//      </a>
//    </td>
//    <td>
//      <time datetime="2020-09-18">2020-09-18</time>
//    </td>
//    <td>
//      <a href="http://en.wikipedia.org/wiki/Muskrat">Muskrat</a>
//    </td>
//    <td>No</td>
//    <td>Yes</td>
//    <td>No</td>
//    <td>No</td>
//  </tr>
//
// Things to note in your solution:
//
// - Give the table row an id, using the observation's id
// - Create an anchor so you can click the photo and go to the observation's uri
// - Use the observation's name as the alt text of the image, and photoUrl as its src
// - Use a proper <time> element, and format the observation's date using a locale aware format, see
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// - Use the observation's wikipediaUrl to provide a link when you click the name
// - Convert all the boolean values for endangered, native, threatened, introduced to "Yes" or "No" strings
// function buildRowForObservation(observation) {
//     // 1. Create the row for this observation with correct id: <tr id="67868131">...</tr>
//     const row = createTableRow(observation.id);

//     // 2. Create the photo, make it a link to the observation page, and put it in the first cell
//     // <img src="https://static.inaturalist.org/photos/109762131/square.jpg?1610308133">
//     // TODO: complete the code to create an img element using the other functions
//     // in this file, and assign the return value to photo.
//     // const photo = ...
//     const photo = createImg(observation.photoUrl, observation.name);
//     //3. <a href="https://www.inaturalist.org/observations/67868131">...</a>
//     const observationLink = createAnchor(observation.uri, photo);
//     // <td>...</td>
//     addContentToRow(observationLink, row);

//     // 4. Create the date and put in the second cell
//     const time = createTime(observation.date.toLocaleDateString());
//     addContentToRow(time, row);

//     // 5. Create the name with a link to its Wikipedia page in the third cell
//     const name = createText(observation.name);
//     const wikipediaLink = createAnchor(observation.wikipediaUrl, name);
//     addContentToRow(wikipediaLink, row);

//     // 4-9. Create a Yes/No text cell for each of the characteristics in the array
//     ["isEndangered", "isNative", "isThreatened", "isIntroduced"].forEach(
//         (characteristic) => {
//             const yesNoText = toYesNo(observation[characteristic]);
//             const yesNoNode = createText(yesNoText);
//             addContentToRow(yesNoNode, row);
//         }
//     );

//     // 10. TODO: replace this with a return of the fully built row for this observation
//     //console.log({ row });
//     return row;
// }

/* cardImg */
// Given a URL src string , create a <div> element and return:
// <div class="card-img" style="background-image: url(‘https://inaturalist-open-data.s3.amazonaws.com/photos/10177220/medium.jpg?1545693877’);"></div>
function cardImg(src) {
    // TODO
    var div = document.createElement("div");
    div.className = "card-img";
    div.style.backgroundImage = "url(" + src + ")";
    return div;
}

/* cardBody */
// Given name, date, uri, and wikipediaUrl, create <div> element and return:
// <div class="card-body">
// <h3> <a href="https://en.wikipedia.org/wiki/Campsis_radicans">American Trumpet Vine</a> </h3>
// <h4> <a href="https://www.inaturalist.org/observations/60706122">9/25/2020</a> </h4>
// </div >
function cardBody(name, date, uri, wikipediaUrl) {
    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    var h4 = document.createElement("h4");
    var aINaturalist = document.createElement("a");
    var aWiki = document.createElement("a");

    div.className = "card-body";
    aINaturalist.href = uri;
    aINaturalist.text = date.toISOString().substr(0, 10);

    aWiki.href = wikipediaUrl;
    aWiki.text = name;

    h3.appendChild(aWiki);
    h4.appendChild(aINaturalist);
    div.appendChild(h3);
    div.appendChild(h4);

    return div;
}

/* cardIcons */
// Given isNative, isIntroduced, isThreatened, isEndangered, create <div> element and return:
// <div class="card-icons"> <i class="fas fa-leaf" title="Native"></i> <i class="fas fa-radiation-alt" title="Threatened"></i> </div>
function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
    var div = document.createElement("div");
    var iNative = document.createElement("i");
    var iIntroduced = document.createElement("i");
    var iThreatened = document.createElement("i");
    var iEndangered = document.createElement("i");

    div.className = "card-icons";

    iNative.className = "fas fa-leaf";
    iNative.title = "Native";
    iIntroduced.className = "fas fa-frog";
    iIntroduced.title = "Introduced";
    iThreatened.className = "fas fa-radiation-alt";
    iThreatened.title = "Threatened";
    iEndangered.className = "fas fa-skull-crossbones";
    iEndangered.title = "Endangered";

    if (isNative) {
        div.appendChild(iNative);
    }
    if (isIntroduced) {
        div.appendChild(iIntroduced);
    }
    if (isThreatened) {
        div.appendChild(iThreatened);
    }
    if (isEndangered) {
        div.appendChild(iEndangered);
    }

    return div;
}

/* buildCardForObservation */
// accept an observation object and use it to create a card, return a completed card <div>
function buildCardForObservation(observation) {
    // 1. Create the card for this observation with correct id
    var div = document.createElement("div");
    div.className = "card";
    div.id = observation.id;

    // 2. Create the card image, and put it in the first place
    var img = cardImg(observation.photoUrl);

    // 3. Create the card body, and put it in the second place
    var body = cardBody(
        observation.name,
        observation.date,
        observation.uri,
        observation.wikipediaUrl
    );

    // 4. Create the card icons, and put it in the third place
    var icons = cardIcons(
        observation.isNative,
        observation.isIntroduced,
        observation.isThreatened,
        observation.isEndangered
    );

    // 5. append above to the card <div> in order
    div.appendChild(img);
    div.appendChild(body);
    div.appendChild(icons);

    // 6. return completed card <div>
    var cards = document.getElementById("observation-cards");
    cards.appendChild(div);
    return div;
}