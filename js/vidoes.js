// PROJECTS //

var TheDrive = document.querySelector("#TheDrive"),
    QuestVitamins = document.querySelector("#QuestVitamins"),
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

// THE DRIVE //

TheDrive.addEventListener("mouseover", function(){
    TheDrive.style.opacity = 0.5;
    
});
TheDrive.addEventListener("mouseout", function(){
    TheDrive.style.opacity = 1;
});

TheDrive.addEventListener("click", function(){
    preview.style.height = "62vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "";
    video.style.height = "36.5vw";
    video.style.width = "65vw";
    video.src = "https://www.youtube.com/embed/zHB9rQrnA8g";
    description.style.display = "block";
    description.style.paddingTop = "30vw";
    ProjectTitle.innerHTML = "The Drive Coffee Bar";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "The Drive Coffee Bar on Commercial Drive and 1st Avenue is a great local coffee bar owned by Kenny Vannucci. The bar has a really interesting story and it was a pleasure creating this mini documentary for Kenny explaining the origins of this wonderfully unique and successful neighborhood bar.  For this project, I filmed and interviewed Kenny at the bar and edited the final product in Adobe Premiere.  I used original photos along with photos that can be found on their website.  Be sure to stop by for a cup of coffee!";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    close.style.display = "flex";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


// QUEST VITAMINS //
QuestVitamins.addEventListener("mouseover", function(){
    QuestVitamins.style.opacity = 0.5;
    
});
QuestVitamins.addEventListener("mouseout", function(){
    QuestVitamins.style.opacity = 1;
});

QuestVitamins.addEventListener("click", function(){
    preview.style.height = "65vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "";
    video.style.height = "36.5vw";
    video.style.width = "65vw";
    video.src = "https://www.youtube.com/embed/4hwJzHH5OdY";
    description.style.display = "block";
    description.style.paddingTop = "30vw";
    ProjectTitle.innerHTML = "Quest Vitamins";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "Quest Vitamins is local natual health products brand that was seeking a promotional video for use in expanding their overseas market.  For this project, I attended the Canadian Health Food Association Trade Show and interviewed and filmed Quest's key personnel, clients, and business partners.  I then created a storyline and used archival photographs as well as the footage that I captured from the convention to show the past, present, and future of the brand. I incorperated text animations and captions using Adobe After Effects and edited the final product in Adobe Premiere. Additionally, I wrote and recorded original music to accompany the video.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    close.style.display = "flex";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});

// JESUS //

Jesus.addEventListener("mouseover", function(){
    Jesus.style.opacity = 0.5;
    
});
Jesus.addEventListener("mouseout", function(){
    Jesus.style.opacity = 1;
});

Jesus.addEventListener("click", function(){
    preview.style.height = "62vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "";
    video.style.height = "36.5vw";
    video.style.width = "65vw";
    video.src = "https://www.youtube.com/embed/CZQdpcJ0R1I";
    description.style.display = "block";
    description.style.paddingTop = "30vw";
    ProjectTitle.innerHTML = "Walking on Water";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "This was the first instance in which I incorperated motion graphics into my illustrations.  For this project, we were tasked with creating characters and giving them movement.  This is an alternative take on the famous biblical story of Jesus walking on water.  In this story, he uses the power of music to calm the storm.  I created the graphics for this project in Adobe Illustrator and added animations using Adobe After Effects.";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    close.style.display = "flex";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});

// THE HERMIT //

TheHermit.addEventListener("mouseover", function(){
    TheHermit.style.opacity = 0.5;
});
TheHermit.addEventListener("mouseout", function(){
    TheHermit.style.opacity = 1;
});

TheHermit.addEventListener("click", function(){
    preview.style.height = "73vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "";
    video.style.height = "48.75vw";
    video.style.width = "65vw";
    video.src = "https://www.youtube.com/embed/LjyhqcxSm9Q";
    description.style.display = "block";
    description.style.paddingTop = "43vw";
    ProjectTitle.innerHTML = "The Hermit";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "This is the story of a Hermit who lives in the wilderness.  He enjoys the simple things in life like watering his plants, playing music and writing stories.  I decided to animate one of my Adobe Illustrator projects 'My World' because there were so many elements such as the trees and the river that had the potential to be very interesting in an animated environment.  ";
    ProjectDescription.style.fontSize = "1.5vw";
    buttons.style.display = "none";
    close.style.display = "flex";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});

// ADVENTURES OF BILBO //

Bilbo.addEventListener("mouseover", function(){
    Bilbo.style.opacity = 0.5;
});
Bilbo.addEventListener("mouseout", function(){
    Bilbo.style.opacity = 1;
});

Bilbo.addEventListener("click", function(){
    preview.style.height = "75vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "";
    video.style.height = "48.75vw";
    video.style.width = "65vw";
    video.src = "https://www.youtube.com/embed/wAp7gTlVVF8";
    description.style.display = "block";
    description.style.paddingTop = "43vw";
    ProjectTitle.innerHTML = "The Journey of Bilbo Baggins";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "This project was inspired by my love for the Lord of the Rings.  We were tasked with creating an animation that incorperated the use of a map with a shape or figure moving from one point to another.  I decided to take this one step further and tell the story of Bilbo Baggin's journey across Middle Earth.  For this project I used Adobe Illustrator to create the vector graphics and Adobe After Effects for the animations.";
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