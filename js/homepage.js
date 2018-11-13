
// js file for the hover effects on homepage

$(document).ready(function() {

// getting the div with the text and the frame
const container = $('.footer-main-text-container');
const text = $('.footer-main-text');

// declaring all const for the different links
const coraya = $('.coraya');
const selfPortrait = $('.self_portrait');
const gymber = $('.gymber');
const bdWall = $('.bd_wall');
const kAndB = $('.kerenyi_and_balzli'); 
const theaterFestival = $('.theater_festival');
const plastic = $('.plastic');
const willHappinessFindMe = $('.will_happiness_find_me');
const seaLaVie = $('.sea_la_vie');
const odExperience = $('.od_experience');
const joeriCourtmans = $('.joeri_courtmans');

// all the hover effects with picture on the links
bdWall.hover( function() {
    
    container.css("background-image","url('../images/bd-wall1.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}
);

gymber.hover( function() {
    
    container.css("background-image","url('../images/picture1.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}
);

kAndB.hover( function() {
    
    container.css("background-image","url('../images/KandB1.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}
);

theaterFestival.hover( function() {
    
    $('#hovervideo').css("display", "block");
    text.css("display","none");
}, function() {
    $('#hovervideo').css("display", "none");
    text.css("display","block");
}
);

plastic.hover( function() {
    
    container.css("background-image","url('../images/plastik1.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}
);

seaLaVie.hover( function() {
    
    container.css("background-image","url('../images/sealavie.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}
);

willHappinessFindMe.hover( function() {
    
    container.css("background-image","url('../images/book1.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}

);

coraya.hover( function() {
    
    container.css("background-image","url('../images/corayadivers-housereef-header.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}

);

odExperience.hover( function() {
    
    container.css("background-image","url('../images/odexperience1.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}

);

selfPortrait.hover( function() {
    
    container.css("background-image","url('../images/selfportrait1.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}

);

joeriCourtmans.hover( function() {
    
    container.css("background-image","url('../images/joericourtmans1.jpg')");
    text.css("display","none");
}, function() {
    container.css("background-image","url('../images/homepageimage.jpg')");
    text.css("display","block");
}

);

});
