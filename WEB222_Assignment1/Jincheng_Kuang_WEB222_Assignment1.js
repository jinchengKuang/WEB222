/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Jincheng Kuang
 *      Student ID: 152867164
 *      Date: Feb 6, 2021
 *
 * 
 */

/*******************************************************************************
 * 
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code.
 *
 * Please spend some time reading the information in the Problem's comment. You'll see
 * comments like this one:
 *
 * @param {string} value - a string to be converted
 * @return {string}
 *
 * These are specially formatted comments that define parameters to functions,
 * and tell us the type {string} or {number}, and also the parameter's name.
 * We also indicate the return type for functions.
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 * 
 * A completed function must be followed by one or more instances of 
 * executions of the function (executing the function and printing the result on console). 

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with dashes ('-'),
 * and make it UPPERCASE.
 *
 * We want to be able to convert a string to Upper Kebab Case style, so that it
 * contains no spaces, tabs, or dots, and all letters are upper case.
 *
 * The kebab() function should work like this:
 *
 * kebab('ABC')     --> returns 'ABC' (all Upper Case, the string is unchanged)
 * kebab(' ABC ')   --> returns 'ABC' (all Upper Case, leading/trailing whitespace removed)
 * kebab('abc')     --> returns 'ABC' (the string was converted to upper case)
 * kebab('A BC')    --> returns 'A-BC' (uppercase, single space replaced with -)
 * kebab('A BC')    --> returns 'A-BC' (uppercase, single space replaced with -)
 * kebab('A   BC')  --> returns 'A-BC' (uppercase, multiple spaces replaced with -)
 * kebab('A.BC')    --> returns 'A-BC' (uppercase, period replaced with -)
 * kebab('A..  BC') --> returns 'A-BC' (uppercase, periods/spaces replaced with -)
 *
 * @param {string} value - a string to be converted
 * @return {string}
 ******************************************************************************/

function kebab(value) {
    return value.trim().replace(/\.{1,}/g, ' ').replace(/\s{1,}/g, '-').toUpperCase();
}
console.log("problem1: ");
console.log(kebab('ABC')); // returns 'ABC' 
console.log(kebab(' ABC ')); // returns 'ABC' 
console.log(kebab('abc')); // returns 'ABC' 
console.log(kebab('A BC')); // returns 'A-BC'
console.log(kebab('A BC')); // returns 'A-BC'
console.log(kebab('A   BC')); // returns 'A-BC'
console.log(kebab('A.BC')); // returns 'A-BC'
console.log(kebab('A..  BC')); // returns 'A-BC'

/*******************************************************************************
 * Problem 2: create an HTML <img> element for the given url and alt text.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to a cat picture:
 *
 * https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image?), we have to use special markup.  The <img> element
 * is how we specify that a URL is to be interpreted as an image, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 *
 * Here is how we might use HTML to markup this image:
 *
 * <img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">
 *
 * Our <img> has two attributes:
 *
 * - src: the URL to use when downloading this image's data
 * - alt: the alternative text to display in non-visual browsing environments (e.g., screen readers)
 *
 * Write the createImg() function to accept a URL and alt text, and return the
 * properly formatted img element.  For example:
 *
 * createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down')
 *
 * should return the following string of HTML:
 *
 * '<img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">'
 *
 * An <img> can also optionally contain a width attribute, for example:
 *
 * <img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down" width="300">
 *
 * In this case, the <img> element should use 300 pixels for its width.  Therefore,
 * your createImg() function should also accept a third argument, width:
 *
 * // No width given
 * createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down')
 * // Width of 300 given
 * createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down', 300)
 *
 * The returned <img> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src and alt values before you use them
 * - The src and alt attribute values should be wrapped in double-quotes (e.g., src="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." alt="...")
 * - The width attribute should only be added if a valid integer value (number or string) is passed
 *   for the third argument.  Otherwise ignore it.
 *
 * @param {string} src - the src URL for the img
 * @param {string} alt - the alt text to use for the img
 * @param {string|number} width - (optional) the width of the img. Must be a valid integer
 * @returns {string}
 ******************************************************************************/

function createImg(src, alt, width) {
    var ret = `<img src="${src.trim()}" alt="${alt.trim()}"`;
    if (typeof width === 'number' || parseInt(width) % 1 === 0) {
        ret += ` width="${width}"`;
    }
    ret += ">";
    return ret;
}
console.log("problem2: ");
console.log(createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down'));
// returns <img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">
console.log(createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down', 300));
// returns <img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down" width="300">

/*******************************************************************************
 * Problem 3: validate a coordinate
 *
 * Coordinates are defined as numeric, decimal values of Latitude and Longitude.
 * A example, the Seneca College Newnham campus is located at:
 *
 * Latitude: 43.7955 (positive number means North)
 * Longitude: -79.3496 (negative number means West)
 *
 * Write a function, validateCoord(), which accepts a latitude and longitude,
 * and returns true if they are both valid, or false if one or both are invalid.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * @param {number} lat - the latitude
 * @param {number} lng - the longitude
 * @returns {boolean}
 ******************************************************************************/

function validateCoord(lat, lng) {
    return (lat >= -90 && lat <= 90) && (lng >= -180 && lng <= 180);
}
console.log("problem3: ");
console.log(validateCoord(43.7955, -79.3496)); // returns true

/*******************************************************************************
 * Problem 4, Part 1: format a coordinate as a string
 *
 * As above, coordinates are defined as numeric, decimal values of Latitude and Longitude.
 *
 * Write a function, formatCoord(), which accepts a latitude and longitude,
 * and returns a string formatted as follows:
 *
 * (lat, lng)
 *
 * For example:
 *
 * formatCoord(43.7955, -79.3496) should return the string '43.7955,-79.3496'.
 *
 * An optional third param, includeBrackets, determines whether or not to include
 * parenthesis around the formatted coordinate:
 *
 * formatCoord(43.7955, -79.3496) should return the string '43.7955,-79.3496'.
 * formatCoord(43.7955, -79.3496, true) should return the string '[43.7955,-79.3496]'.
 *
 * Use your validateCoord() function from Problem 3 to determine if the coordinate
 * is valid before you attempt to format it.  If the coordinate is not valid, throw
 * an exception.
 *
 * @param {number} lat - the latitude
 * @param {number} lng - the longitude
 * @param {boolean} includeBrackets - (optional) whether to include the square brackets
 * @returns {string}
 ******************************************************************************/

function formatCoord(lat, lng, includeBrackets) {
    var ret;
    if (validateCoord(lat, lng)) {
        ret = `${lat},${lng}`;
        if (includeBrackets) {
            ret = `[${lat},${lng}]`;
        }
    } else {
        throw "values not valid";
    }
    return ret
}
console.log("problem4_1 " + formatCoord(43.7955, -79.3496));
// returns 43.7955,-79.3496
console.log("problem4_1 " + formatCoord(43.7955, -79.3496, true));
// returns [43.7955,-79.3496]

/*******************************************************************************
 * Problem 4, Part 2: format any number of coordinates as a string
 *
 * Similar to Problem 4 Part 1, you are asked to format lat, lng coordinates
 * into a string. However, where formatCoord() formats a single lat, lng pair,
 * the formatCoords() function (note the `s` suffix) is able to format any
 * number of lag, lng pairs.
 *
 * For example:
 *
 * formatCoords(43.7955, -79.3496) should return '[[43.7955,-79.3496]]'
 * formatCoords(43.7955, -79.3496, 43.7953, -79.3491) should return '[[43.7955,-79.3496], [43.7953,-79.3491]]'
 *
 * In your solution for formatCoords, use the formatCoord function you wrote above.
 *
 * The formatCoords() function can take any number of arguments, but they must all be numbers,
 * there must be an even number of them, and all lat, lng pairs should be valid.
 *
 * If any of these conditions are not met, throw an exception.
 * 
 * Please note that even though the format of the function specifies a rest parameter as input,
 * you can use arguments as well.
 *
 * @param {number} arguments - any number of arguments can be passed, but there must be an even number
 * @returns {string}
 ******************************************************************************/

function formatCoords(...values) {
    var ret = "";
    if (values.length % 2 === 0) {
        ret += "[";
        for (var i = 0; i < arguments.length; i += 2) {
            if (validateCoord(arguments[i], arguments[i + 1])) {
                ret += `[${arguments[i]},${arguments[i+1]}]`;
            } else {
                throw "coord values not valid";
            }
            if (validateCoord(arguments[i + 2], arguments[i + 3])) {
                ret += ", ";
            }
        }
        ret += "]";
    } else {
        throw "number of coord values not even";
    }
    return ret;
}
console.log("problem4_2: ");
console.log(formatCoords(43.7955, -79.3496));
// returns [[43.7955,-79.3496]]
console.log(formatCoords(43.7955, -79.3496, 43.7953, -79.3491));
// returns [[43.7955,-79.3496], [43.7953,-79.3491]]

/*******************************************************************************
 * Problem 5: determine MIME type from filename extension
 *
 * Web browsers and servers exchange streams of bytes, which must be interpreted
 * by the receiver based on their type.  For example, an HTML web page is
 * plain text, while a JPG image is a binary sequence.
 *
 * The Content-Type header contains information about a resource's MIME type, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
 * The type is general, for example, 'text' or 'video'.  The subtype is more
 * specific, indicating the specific type of text, image, video, etc.  See:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *
 * A number of common types are used in web development:
 *
 * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
 *
 * Your mimeFromFilename() function should support all of the following extensions
 * with the leading '.':
 *
 * - .html, .htm --> text/html
 * - .css        --> text/css
 * - .js         --> text/javascript
 * - .jpg, .jpeg --> image/jpeg
 * - .gif        --> image/gif
 * - .bmp        --> image/bmp
 * - .ico, .cur  --> image/x-icon
 * - .png        --> image/png
 * - .svg        --> image/svg+xml
 * - .webp       --> image/webp
 * - .mp3        --> audio/mp3
 * - .wav        --> audio/wav
 * - .mp4        --> video/mp4
 * - .webm       --> video/webm
 * - .json       --> application/json
 *
 * NOTE: any other extension should use the `application/octet-stream` MIME type,
 * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
 * also use `application/octet-stream` if the file has no extension.
 *
 * @param {string} filename - a filename
 * @returns {string}
 ******************************************************************************/

function mimeFromFilename(filename) {
    var suffix;
    suffix = filename.split('.').pop();
    var ret;
    switch (suffix) {
        case "txt":
            ret = "text/plain";
            break;
        case "html":
        case "htm":
            ret = "text/html";
            break;
        case "css":
            ret = "text/css";
            break;
        case "js":
            ret = "text/javascript";
            break;
        case "jpg":
        case "jpeg":
            ret = "image/jpeg";
            break;
        case "gif":
            ret = "image/gif";
            break;
        case "bmp":
            ret = "image/bmp";
            break;
        case "ico":
        case "cur":
            ret = "image/x-icon";
            break;
        case "png":
            ret = "image/png";
            break;
        case "svg":
            ret = "image/svg+xml";
            break;
        case "webp":
            ret = "image/webp";
            break;
        case "mp3":
            ret = "audio/mp3";
            break;
        case "wav":
            ret = "audio/wav";
            break;
        case "mp4":
            ret = "video/mp4";
            break;
        case "webm":
            ret = "video/webm";
            break;
        case "json":
            ret = "application/json";
            break;
        default:
            ret = "application/octet-stream";
            break;
    }
    return ret;
}
console.log("problem5: ");
console.log(mimeFromFilename('/User/Documents/readme.txt'));
// returns text/plain

/*******************************************************************************
 * Problem 6: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * @param {string} licenseCode - a license code
 * @returns {string}
 ******************************************************************************/

function generateLicenseLink(licenseCode) {
    var licenseText;
    switch (licenseCode) {
        case "CC-BY":
            licenseText = " ";
            break;
        case "CC-BY-NC":
            licenseText = "-NonCommercial ";
            break;
        case "CC-BY-SA":
            licenseText = "-ShareAlike ";
            break;
        case "CC-BY-ND":
            licenseText = "-NoDerivs ";
            break;
        case "CC-BY-NC-SA":
            licenseText = "-NonCommercial-ShareAlike ";
            break;
        case "CC-BY-NC-ND":
            licenseText = "-NonCommercial-NoDerivs ";
            break;
        default:
            return '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>';
    }

    return `<a href="https://creativecommons.org/licenses/${licenseCode.slice(3).toLowerCase()}/4.0/">Creative Commons Attribution${licenseText}License</a>`;
}
console.log("problem6: ");
console.log(generateLicenseLink('CC-BY-NC'));
// returns <a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>

/*******************************************************************************
 * Problem 7 Part 1: create a pure Boolean true/false value from a dataset
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats over the years, for example:
 *
 * Yes, yes, YES, Y, t, TRUE, true, True, 1
 * No, no, NO, N, n, f, FALSE, false, False, 0, null, undefined, -1
 *
 * Write a function pureBool() which takes a String, Number, Boolean,
 * null, or undefined and attempts to convert it into a pure Boolean value.
 *
 * If the value is not one of the values above, throw an error with the error
 * message, 'invalid boolean value'.
 *
 * @param {string|number|boolean|null|undefined} value - a value to convert to true/false
 * @returns {bool}
 ******************************************************************************/

function pureBool(value) {
    if (value == 1 || String(value).match(/[y]+(es)*/i) || String(value).match(/[t]+(rue)*/i)) {
        return true;
    } else if (value == "" || value === null || value === undefined || value == -1 || value == 0 || String(value).match(/[n]+o*/i) || String(value).match(/[f]+(alse)*/i)) {
        return false;
    } else {
        throw "invalid boolean value";
    }
}
console.log("problem7_1: ");
console.log(pureBool(true));

/*******************************************************************************
 * Problem 7 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your normalizeBoolean() function, create two new functions to check
 * if a list of arguments are all normalized True or normalized False values:
 *
 * all('Y', 'yes', 1)      --> returns true
 * all('Y', 'no', 1)       --> returns false
 * all('Y', 'invalid', 1)  --> returns false
 *
 * none('N', 'no', 0)      --> returns true
 * none('Y', 'invalid', 1) --> returns false (i.e., does not throw)
 *
 * Use try/catch syntax to avoid having throw errors
 * when normalizeBoolean() throws on invalid data.
 ******************************************************************************/

function all() {
    try {
        for (const element of arguments) {
            if (!pureBool(element))
                return false;
        }
        return true;
    } catch (error) {
        return false;
    }
}

function none() {
    try {
        for (const element of arguments) {
            if (pureBool(element))
                return false;
        }
        return true;
    } catch (error) {
        return false;
    }
}
console.log("problem7_2: ");
console.log(all('Y', 'yes', 1)); // returns true
console.log(all('Y', 'no', 1)); // returns false
console.log(all('Y', 'invalid', 1)); // returns false
console.log(none('N', 'no', 0)); // returns true
console.log(none('Y', 'invalid', 1)); // returns false

/*******************************************************************************
 * Problem 8 - build a URL to query the iNaturalist Web API
 *
 * One of the data sources we'll be exploring in future assignments is
 * https://www.inaturalist.org.  Using iNaturalist, both hobbyist and professional
 * scientists can share sightings and help identify plants and animals in their
 * local area.
 *
 * As a web developer, you have access to this tremendous database of scientific
 * observations via the iNaturalist Web API (application programming interface):
 *
 * https://www.inaturalist.org/pages/api+reference#get-observations
 *
 * Querying the iNaturalist dataset for information involves formatting a URL
 * in a particular way.  As we know from week 1, a URL can contain optional
 * name=value pairs, see: https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - q: a search string, for example "butterfly" or "Horse-chestnut"
 * - per_page: a number from 1 to 200, indicating how many results to return per page
 * - order: a string indicating sort order, with possible values of `asc` or `desc`
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * - lat: a number, indicating the latitude to use for results
 * - lng: a number, indicating the longitude to use for results.
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., perPage must be between 1 and 200, lat and lng
 * must be a valid coord, etc), and returns a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('butterfly', 50, 'asc', 'cc-by', 43.7955, -79.3496) should return
 * the following URL:
 *
 * https://api.inaturalist.org/v1/observations?q=butterfly&per_page=50&order=asc&license=cc-by&lat=43.7955&lng=-79.3496
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an exception should be thrown.
 *
 * NOTE: make sure you properly encode the q value, since URLs can't
 * contain spaces or certain other characters. HINT: use the encodeURIComponent()
 * function to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} q the query to use. Must be properly URI encoded
 * @param {number} perPage the number of results per page, must be 1-200
 * @param {string} order the sort order to use, must be one of asc or desc
 * @param {string} license the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * @param {number} lat the latitude to use, must be a valid latitude (use validateCoord() function)
 * @param {number} lng the longitude to use, must be a valid longitude (use validateCoord() function)
 * @returns {string} the properly formatted iNaturalist URL
 ******************************************************************************/

function buildUrl(q, perPage, order, license, lat, lng) {
    if ((typeof perPage === 'number' && perPage % 1 === 0 && perPage >= 1 && perPage <= 200) && (order === "asc" || order === "desc") && (license == "none" || license == "any" || license == "cc-by" || license == "cc-by-nc" || license == "cc-by-sa" || license == "cc-by-nd" || license == "cc-by-nc-sa" || license == "cc-by-nc-nd") && (validateCoord(lat, lng))) {
        return `https://api.inaturalist.org/v1/observations?q=${encodeURIComponent(q)}&per_page=${perPage}&order=${order}&license=${license}&lat=${lat}&lng=${lng}`;
    } else {
        throw "some values invalid";
    }
}
console.log("problem8: ");
console.log(buildUrl('butterfly', 50, 'asc', 'cc-by', 43.7955, -79.3496));
// returns https://api.inaturalist.org/v1/observations?q=butterfly&per_page=50&order=asc&license=cc-by&lat=43.7955&lng=-79.3496