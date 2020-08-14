// PROJECTS //

var MyWorld = document.querySelector("#MyWorld"),
    GibsonES355 = document.querySelector("#GibsonES355"),
    SmilinBuddha = document.querySelector("#SmilinBuddha"),
    SwissStyle = document.querySelector("#SwissStyle"),
    Fishies = document.querySelector("#Fishies"),
    JamRoom = document.querySelector("#JamRoom"),
    Miles = document.querySelector("#Miles"),
    OldPhoto = document.querySelector("#OldPhoto"),
    Zombies = document.querySelector("#Zombies"),
    WestPoint = document.querySelector("#WestPoint"),
    DigiMenu = document.querySelector("#DigiMenu");


// PROJECT VIEW //

var preview = document.querySelector("#preview"),
    PreviewContainer = document.querySelector("#PreviewContainer"),
    close = document.querySelector("#close"),
    left = document.querySelector("#left"),
    right = document.querySelector("#right"),
    buttons = document.querySelector("#buttons"),
    original = document.querySelector("#original"),
    restored = document.querySelector("#restored");

var video = document.querySelector("#video");

var dots = document.querySelector("#dots"),
    dot1 = document.querySelector("#dot1"),
    dot2 = document.querySelector("#dot2"),
    dot3 = document.querySelector("#dot3"),
    dot4 = document.querySelector("#dot4"),
    dot5 = document.querySelector("#dot5"),
    dot6 = document.querySelector("#dot6"),
    dot7 = document.querySelector("#dot7");

// DESCRIPTION //

var description = document.querySelector("#description"),
    ProjectTitle = document.querySelector("#ProjectTitle"),
    ProjectDescription = document.querySelector("#ProjectDescription");


// MY WORLD //

MyWorld.addEventListener("mouseover", function(){
    MyWorld.style.opacity = 0.5;
});
MyWorld.addEventListener("mouseout", function(){
    MyWorld.style.opacity = 1;
});

MyWorld.addEventListener("click", function(){
    preview.style.height = "80vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/VectorGraphics/MyWorld02.png)";
    preview.style.backgroundSize = "70%";
    video.src = "";
    close.style.display = "flex";
    description.style.display = "block";
    description.style.paddingTop = "45vw";
    ProjectTitle.innerHTML = "My World";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "For this assignment, we were given very simple and open instructions; to create an illustration of our own world.  I love this type of project because it allows so much room for creativity, vision and self expression.  I thought about all of the environments and scenarios that I find myself daydreaming about.  In this world you will find a few of my favourite things; nature, music, plants, animals, architecture, water and blue skies.  I created this using Adobe Illustrator.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// GIBSON ES-355 //

GibsonES355.addEventListener("mouseover", function(){
    GibsonES355.style.opacity = 0.5;
});
GibsonES355.addEventListener("mouseout", function(){
    GibsonES355.style.opacity = 1;
});

GibsonES355.addEventListener("click", function(){
    preview.style.height = "92vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/VectorGraphics/Gibson35502.png)"
    preview.style.backgroundSize = "45%";
    video.src = "";
    close.style.display = "flex";
    description.style.display = "block";
    description.style.paddingTop = "55vw";
    ProjectTitle.innerHTML = "Gibson ES-355";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "This project really took my digital art skills to the next level.  For this assignment, we were suppose to illustrate a three dimensional object of our choosing that had curves, angles and shadows.  I decided to illustrate one of my most prized possesions, my Gibson ES-355 guitar.  One of my objectives in creating this image was to accurately recreate all of the intricate details of the guitar such as the gold hardware, the silver inlays, the strings, and the sound holes.  I was quite pleased that the final result succeeded in capturing the essence and beauty of the guitar.  This was created using Adobe Illustrator.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// SMILIN BUDDHA //

SmilinBuddha.addEventListener("mouseover", function(){
    SmilinBuddha.style.opacity = 0.5;
});
SmilinBuddha.addEventListener("mouseout", function(){
    SmilinBuddha.style.opacity = 1;
});

SmilinBuddha.addEventListener("click", function(){
    preview.style.height = "80vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/VectorGraphics/SmilinBuddha02.png)"
    preview.style.backgroundSize = "70%";
    video.src = "";
    close.style.display = "flex";
    description.style.display = "block";
    description.style.paddingTop = "45vw";
    ProjectTitle.innerHTML = "Smilin' Buddha";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "This was the very first project that I created using Adobe Illustrator.  For this assignment, we were given several grayscale images and were required to trace over them to create a digital graphic. I found the process very calming and therapeutic as I listened to music while working on it.  The final result is an accurate representation of how I felt during the process of creating this piece; very tranquil.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// SWISS STYLE //

SwissStyle.addEventListener("mouseover", function(){
    SwissStyle.style.opacity = 0.5;
});
SwissStyle.addEventListener("mouseout", function(){
    SwissStyle.style.opacity = 1;
});

SwissStyle.addEventListener("click", function(){
    preview.style.height = "85vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/VectorGraphics/SwissStyle02.png)"
    preview.style.backgroundSize = "45%";
    video.src = "";
    close.style.display = "flex";
    description.style.display = "block";
    description.style.paddingTop = "50vw";
    ProjectTitle.innerHTML = "Swiss Style Poster";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "This swiss style poster was the project that introduced me to the use of text in a design. I used the 'paragraph styles' tool to make the workflow more consistent and efficient.  During the process of creating this poster, I learned the importance of text hierarchy in giving structure and displaying the order of importance of information to the reader.  This project was created in Adobe Illustrator.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// FISHIES //

Fishies.addEventListener("mouseover", function(){
    Fishies.style.opacity = 0.5;
});
Fishies.addEventListener("mouseout", function(){
    Fishies.style.opacity = 1;
});

Fishies.addEventListener("click", function(){
    preview.style.height = "78vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/VectorGraphics/Fishies02.png)"
    preview.style.backgroundSize = "70%";
    video.src = "";
    close.style.display = "flex";
    description.style.display = "block";
    description.style.paddingTop = "45vw";
    ProjectTitle.innerHTML = "Fishies";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "This was a colouring exercise that allowed me to implement the use of gradients and swatches in a design.  Using swatches is a very efficient way of working with different colour palettes because you can save them and access them instantly.  This project was created in Adobe Illustrator.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// JAM ROOM //

JamRoom.addEventListener("mouseover", function(){
    JamRoom.style.opacity = 0.5;
});
JamRoom.addEventListener("mouseout", function(){
    JamRoom.style.opacity = 1;
});

JamRoom.addEventListener("click", function(){
    preview.style.height = "80vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/VectorGraphics/JamRoom02.png)"
    preview.style.backgroundSize = "70%";
    video.src = "";
    description.style.display = "block";
    description.style.paddingTop = "45vw";
    ProjectTitle.innerHTML = "Jam Room";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "For this project involving interactive web development, I illustrated some instruments and replicated my music studio space.  In the actual web page, when you click on each instrument, music will play and an information box will appear with a short description of the item.  I created this project using Adobe Illustrator and coded the web page using HTML, CSS, and Javascript.";
    ProjectDescription.style.fontSize = "1.5vw";
    close.style.display = "flex";
    buttons.style.display = "none";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// MILES DAVIS //

Miles.addEventListener("mouseover", function(){
    Miles.style.opacity = 0.5;
});
Miles.addEventListener("mouseout", function(){
    Miles.style.opacity = 1;
});

Miles.addEventListener("click", function(){
    preview.style.height = "100vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/PhotoEditing/MilesDavis02.png)"
    preview.style.backgroundSize = "45%";
    video.src = "";
    close.style.display = "flex";
    description.style.display = "block";
    description.style.paddingTop = "65vw";
    ProjectTitle.innerHTML = "Miles Davis";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "I created this Miles Davis portrait using the paint tool in Adobe Photoshop.  This is one of my favourite graphic design projects that I have completed thus far, not only because I successfully executed my vision, but because it was a joy to create.  I really wanted to capture the attitude and personality that Miles shows in the original photo.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// OLD PHOTO //

OldPhoto.addEventListener("mouseover", function(){
    OldPhoto.style.opacity = 0.5;
});
OldPhoto.addEventListener("mouseout", function(){
    OldPhoto.style.opacity = 1;
});

OldPhoto.addEventListener("click", function(){
    preview.style.height = "71vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/PhotoEditing/PhotoRestoration02.png)"
    preview.style.backgroundSize = "70%";
    video.src = "";
    buttons.style.display = "flex";
    close.style.display = "flex";
    description.style.display = "block";
    description.style.paddingTop = "0vh";
    ProjectTitle.innerHTML = "Photo Editing";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "This project was created using Adobe Photoshop.  More specifically, the tool that I used was the clone stamp tool.  I really enjoyed working on this project because it felt very rewarding to bring an old photo back to life. Be sure to check out the original image prior to the restoration by cicking on the button.";
    ProjectDescription.style.fontSize = "1.5vw";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});

original.addEventListener("click", function(){
    preview.style.backgroundImage = "url(../images/PhotoEditing/PhotoRestorationOriginal.png)"
    original.style.backgroundColor = "#92bde7";
    restored.style.backgroundColor = "white";
});

restored.addEventListener("click", function(){
    preview.style.backgroundImage = "url(../images/PhotoEditing/PhotoRestoration02.png)"
    restored.style.backgroundColor = "#92bde7";
    original.style.backgroundColor = "white";
});


// ZOMBIES //

Zombies.addEventListener("mouseover", function(){
    Zombies.style.opacity = 0.5;
});
Zombies.addEventListener("mouseout", function(){
    Zombies.style.opacity = 1;
});

Zombies.addEventListener("click", function(){
    preview.style.height = "83vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/PhotoEditing/LandoftheDead02.png)"
    preview.style.backgroundSize = "45%";
    video.src = "";
    description.style.display = "block";
    description.style.paddingTop = "50vw";
    ProjectTitle.innerHTML = "Land of the Dead";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "Land of the Dead is a TV series poster that I created using Adobe Photoshop.  It is inspired by the Walking Dead and several other classic zombie movies.  In this project I used several different photos, vector smart objects, layer styles, and blending modes.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    close.style.display = "flex";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// WEST POINT HOTEL //

WestPoint.addEventListener("mouseover", function(){
    WestPoint.style.opacity = 0.5;
});
WestPoint.addEventListener("mouseout", function(){
    WestPoint.style.opacity = 1;
});

WestPoint.addEventListener("click", function(){
    preview.style.height = "83vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/UX:UI/WestPoint02.png)";
    preview.style.backgroundSize = "70%";
    video.src = "";
    description.style.display = "block";
    description.style.paddingTop = "30vw";
    ProjectTitle.innerHTML = "West Point Hotel";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "For this group project, which was to create a WordPress website for a hotel, my job was to design the hotel restaurant's menu.  I have worked in the restaurant business for a number of years and know what a well designed menu looks like.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    close.style.display = "flex";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});

WestPoint.addEventListener("click", function(){
    if (preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint02.png")'){
        dot1.style.transform = "scale(1)";
    }
});

// DIGIMENU //

DigiMenu.addEventListener("mouseover", function(){
    DigiMenu.style.opacity = 0.5;
});
DigiMenu.addEventListener("mouseout", function(){
    DigiMenu.style.opacity = 1;
});

DigiMenu.addEventListener("click", function(){
    preview.style.height = "83vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "url(../images/UX:UI/DigiMenuPreview.png)";
    preview.style.backgroundSize = "70%";
    video.src = "";
    description.style.display = "block";
    description.style.paddingTop = "30vw";
    ProjectTitle.innerHTML = "DigiMenu";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    close.style.display = "flex";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// CLOSE PREVIEW //

close.addEventListener("click", function(){
    preview.style.height = "0vh";
    preview.style.width = "0vw";
    preview.style.backgroundImage = "";
    video.style.height = "0vw";
    video.style.width = "0vw";
    video.src = "";
    buttons.style.display = "none";
    close.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    dots.style.display = "none";
    dot1.style.transform = "scale(0.5)";
    dot2.style.transform = "scale(0.5)";
    dot3.style.transform = "scale(0.5)";
    dot4.style.transform = "scale(0.5)";
    dot5.style.transform = "scale(0.5)";
    dot6.style.transform = "scale(0.5)";
    ProjectTitle.style.fontSize = "0vw";
    ProjectDescription.style.fontSize = "0vw";
    description.style.display = "none";
});

close.addEventListener("mouseover", function(){
    close.style.opacity = 0.5;
});
close.addEventListener("mouseout", function(){
    close.style.opacity = 1;
});

// LEFT & RIGHT ICON PREVIEW //

right.addEventListener("mouseover", function(){
    right.style.opacity = 0.5;
});
right.addEventListener("mouseout", function(){
    right.style.opacity = 1;
});

right.addEventListener("click", function(){
    if (preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint02.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint03.png")'
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint03.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint04.png")'
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint04.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint05.png")'
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint05.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint06.png")' 
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint06.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint07.png")'
    } else {
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint02.png")'
    }
});

left.addEventListener("mouseover", function(){
    left.style.opacity = 0.5;
});
left.addEventListener("mouseout", function(){
    left.style.opacity = 1;
});

left.addEventListener("click", function(){
    if (preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint02.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint07.png")'
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint07.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint06.png")'
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint06.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint05.png")'
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint05.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint04.png")' 
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint04.png")'){
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint03.png")'
    } else {
        preview.style.backgroundImage = 'url("../images/UX:UI/WestPoint02.png")'
    }
});

// CHANGING DOTS //

right.addEventListener("click", function(){
    if (preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint03.png")'){
        dot1.style.transform = "scale(0.5)";
        dot2.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint04.png")'){
        dot2.style.transform = "scale(0.5)";
        dot3.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint05.png")'){
        dot3.style.transform = "scale(0.5)";
        dot4.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint06.png")'){
        dot4.style.transform = "scale(0.5)";
        dot5.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint07.png")'){
        dot5.style.transform = "scale(0.5)";
        dot6.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint02.png")'){
        dot6.style.transform = "scale(0.5)";
        dot1.style.transform = "scale(1)";
    }
});

left.addEventListener("click", function(){
    if (preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint07.png")'){
        dot1.style.transform = "scale(0.5)";
        dot6.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint06.png")'){
        dot6.style.transform = "scale(0.5)";
        dot5.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint05.png")'){
        dot5.style.transform = "scale(0.5)";
        dot4.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint04.png")'){
        dot4.style.transform = "scale(0.5)";
        dot3.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint03.png")'){
        dot3.style.transform = "scale(0.5)";
        dot2.style.transform = "scale(1)";
    } else if (
        preview.style.backgroundImage == 'url("../images/UX:UI/WestPoint02.png")'){
        dot2.style.transform = "scale(0.5)";
        dot1.style.transform = "scale(1)";
    }
});