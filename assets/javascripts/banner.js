var banner = $("#homepage-banner");

var imageNames = ['bot', 'soccer', 'teamCrop', 'working'];
var imageIndex = Math.floor((Math.random() * imageNames.length));
var imageUrl = "assets/images/homepage-banners/" + imageNames[imageIndex] + ".jpg";


banner.css('background-image', 'url(' + imageUrl + ')');