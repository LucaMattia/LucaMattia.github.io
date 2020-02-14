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
    Jesus = document.querySelector("#Jesus"),
    TheHermit = document.querySelector("#TheHermit"),
    Bilbo = document.querySelector("#Bilbo");


// PROJECT VIEW //

var preview = document.querySelector("#preview"),
    PreviewContainer = document.querySelector("#PreviewContainer"),
    close = document.querySelector("#close"),
    buttons = document.querySelector("#buttons"),
    original = document.querySelector("#original"),
    restored = document.querySelector("#restored");

var video = document.querySelector("#video");

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