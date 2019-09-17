const BOOKS_AND_MEDIA = '1708,1920,2513,197,2175,1978,1736,638,283,1279,4162,3369,239,638,1736';
const BOOKS_AND_MEDIA_FORMAT_STRING = "&format=Book&format=Msscr&format=Jrnl&format=News&format=music&format=Video&format=Snd&format=archv&year=all&yearFrom=&yearTo=&language=all";
const ARTICLES = '1708,1271,2237,2259,2260,2261,2264,1721,1723,1941,1978,2375,1736,2484,638,2479,1697,3313,638,2479,1275,1488,1279,1734,1736,1834,3006,3863,1953,1488,2477,1279,1537,3879,1725,3866,2007,2006,1728,1492,3384,1734,4162';
const ARTICLES_FORMAT_STRING = "&format=Artchap&format=Encyc";
const DISCOVERY_URL = 'https://anderson.on.worldcat.org/search?sortKey=LIBRARY_PLUS_RELEVANCE'

jQuery(document).ready(function($){
    //Check JS is loaded
    console.log("JS Loaded");

    $("#catalog-search").submit(function(e){
        e.preventDefault();
        //Check form submits
        console.log("form submitted");

        let queryString = $(this).children('.input-group').children('#queryString').val();
        let facet = $(this).children('.input-group').children('.input-group-prepend').children('#search-facet').val();

        //Database list and formats
        let databaseList = '';
        let formats= '';
        if (facet == 'booksmedia'){
            databaseList = BOOKS_AND_MEDIA;
            formats = BOOKS_AND_MEDIA_FORMAT_STRING;
        } else if (facet ==  'articles') {
            databaseList = ARTICLES;
            formats = ARTICLES_FORMAT_STRING;
        } else if (facet == 'allfmts') {
            databaseList = BOOKS_AND_MEDIA + ',' + ARTICLES;
            formats = BOOKS_AND_MEDIA_FORMAT_STRING + ARTICLES_FORMAT_STRING;
        }

        //Check URL
        console.log(DISCOVERY_URL);
        //Check search facet is set
        console.log('search facet = ' + facet);
        //Check queryString is set
        console.log("query string = " + queryString);
        //Check databaseList is set
        console.log("database list = " + databaseList);

        window.open(DISCOVERY_URL + '&databaseList=' + databaseList + '&queryString=' + queryString + formats, '_blank');

        console.log('search performed');
    })
})
