const BOOKS_AND_MEDIA = '1708,1920,2513,197,2175,1978,1736,638,283,1279,4162,3369,239,638,1736';
const BOOKS_AND_MEDIA_FORMAT_STRING = "&format=Book&format=Msscr&format=Jrnl&subformat=Book%3A%3Abook_printbook&subformat=Book%3A%3Abook_digital&subformat=Book%3A%3Abook_thsis&subformat=Book%3A%3Abook_mic&subformat=Book%3A%3Abook_largeprint&subformat=Book%3A%3Abook_braille&author=all&year=all&yearFrom=&yearTo=&language=all&format=x0%3Amusic&subformat=Music%3A%3Amusic_cd&subformat=Music%3A%3Amusic_lp&subformat=Music%3A%3Amusic_cassette&subformat=Music%3A%3Amusic_digital&format=Video&subformat=Video%3A%3Avideo_dvd&subformat=Video%3A%3Avideo_vhs&subformat=Video%3A%3Avideo_film&subformat=Video%3A%3Avideo_digital&subformat=Video%3A%3Avideo_bluray&format=Snd&format=Image&subformat=Image%3A%3Aimage&format=Compfile&subformat=Compfile%3A%3Acompfile_digital&format=Msscr&subformat=Msscr%3A%3Amsscr_digital&format=Vis&subformat=Vis%3A%3Avis_digital&format=Audiobook&subformat=Audiobook%3A%3Aaudiobook_cassette&subformat=Audiobook%3A%3Aaudiobook_cd&subformat=Audiobook%3A%3Aaudiobook_digital&subformat=Audiobook%3A%3Aaudiobook_lp&format=Web&subformat=Web%3A%3Aweb_dwn2d&subformat=Web%3A%3Aweb_digital&format=Game&format=Intmm&subformat=Intmm%3A%3Aintmm_digital";
const ARTICLES = '1708,1271,2237,2259,2260,2261,2264,1721,1723,1941,1978,2375,1736,2484,638,2479,1697,3313,638,2479,1275,1488,1279,1734,1736,1834,3006,3863,1953,1488,2477,1279,1537,3879,1725,3866,2007,2006,1728,1492,3384,1734,4162';
const ARTICLES_FORMAT_STRING = "&format=Artchap&subformat=Artchap%3A%3Aartchap_artcl&format=Encyc";
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
