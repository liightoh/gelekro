/**
 * Created by HMD on 19/05/2016.
 */
// place your images in this array

var random_images_array = ['chicken.jpg', 'chipotle.jpg', 'dominos.jpg', 'flunch.jpg', 'kfc.jpg', 'mcdo.jpg', 'mongoo.jpg', 'planet_sushi.jpg', 'subway.jpg'];


function getRandomImage(imgAr, path) {
    path = path || '../img/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var url = "";
    switch(num) {
        case 0 :
            url = "http://www.chickenspot.com/index.php/fr/restaurant-locator/";
            break;
        case 1 :
            url = "https://www.chipotle.fr/locations";
            break;
        case 2 :
            url = "http://www.dominos.fr/commande-en-ligne/";
            break;
        case 3 :
            url = "http://restaurant.flunch.fr/";
            break;
        case 4 :
            url = "http://www.kfc.fr/#/restaurants_storelocator";
            break;
        case 5 :
            url = "https://www.restaurants.mcdonalds.fr/";
            break;
        case 6 :
            url = "http://www.saladessurmesure.com/#!contact/c24vq";
            break;
        case 7 :
            url = "http://www.planetsushi.fr/nos-restaurants/";
            break;
        case 8 :
            url = "http://www.subwayfrance.fr/trouver-un-restaurant";
            break;
    }
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" onclick="window.open('+ url +');" >';
    document.write(imgStr); document.close();

    }