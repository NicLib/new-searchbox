jQuery(document).ready(function($){
    //Check JS is loaded
    console.log("JS Loaded");

    $("#catalog-search").submit(function(e){
        e.preventDefault();
        //Check form submits
        console.log("form submitted");

        let queryString = $(this).children('.input-group').children('#queryString').val();

        //Check queryString is set
        console.log(queryString);
    })
})
