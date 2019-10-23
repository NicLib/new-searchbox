const BOOKS_AND_MEDIA = '197,239,283,638,1279,1708,1736,1920,1978,2175,2513,3369,4162,';
const BOOKS_AND_MEDIA_FORMAT_STRING = "&format=Book&format=Msscr&format=Jrnl&format=News&format=music&format=Video&format=archv&year=all&yearFrom=&yearTo=&language=all";
const ARTICLES = '638,1271,1275,1279,1697,1708,1721,1723,1725,1728,1734,1736,1834,1941,1953,1978,2006,2007,2237,2259,2260,2261,2264,2375,2477,2479,2484,3006,3313,3863,3866,3879,3384,4162'
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
