// PROJECTS //

var Eagleson = document.querySelector("#Eagleson"),
    QuestVitamins = document.querySelector("#QuestVitamins"),
    TheDrive = document.querySelector("#TheDrive"),
    Jesus = document.querySelector("#Jesus"),
    TheHermit = document.querySelector("#TheHermit"),
    Bilbo = document.querySelector("#Bilbo");


// PROJECT VIEW //

var preview = document.querySelector("#preview"),
    PreviewContainer = document.querySelector("#PreviewContainer"),
    close = document.querySelector("#close"),
    left = document.querySelector("#left"),
    right = document.querySelector("#right"),
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


// EAGLESON //

Eagleson.addEventListener("mouseover", function(){
    Eagleson.style.opacity = 0.5;
});
Eagleson.addEventListener("mouseout", function(){
    Eagleson.style.opacity = 1;
});

Eagleson.addEventListener("click", function(){
    preview.style.height = "66vw";
    preview.style.width = "94vw";
    preview.style.backgroundImage = "";
    video.style.height = "36.6vw";
    video.style.width = "65vw";
    video.src = "https://www.youtube.com/embed/Sl9DKIpOb7U";
    description.style.display = "block";
    description.style.paddingTop = "30vw";
    ProjectTitle.innerHTML = "Eagleson Properties";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "Eagleson Properties is a local property management company that I had the pleasure of working as an intern with.  My job was to film exterior drone footage of properties and interior footage with a DSLR camera. I would then edit all of the shots in Adobe Premiere adding transitions, music and text. I really enjoyed capturing footage of the properties and displaying all of the small details that make each home unique and welcoming. My supervisors at Eagleson were delighted with the end result and had many positive things to say about my enthusiasm, self reliance and the quality of my work.";
    ProjectDescription.style.fontSize = "1.5vw";
    close.style.display = "flex";
    left.style.display = "flex";
    right.style.display = "flex";
    dots.style.display = "flex";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});

Eagleson.addEventListener("click", function(){
    if (video.src == "https://www.youtube.com/embed/Sl9DKIpOb7U"){
        dot1.style.transform = "scale(1)";
    }
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
    video.style.height = "36.6vw";
    video.style.width = "65vw";
    video.src = "https://www.youtube.com/embed/4hwJzHH5OdY";
    description.style.display = "block";
    description.style.paddingTop = "30vw";
    ProjectTitle.innerHTML = "Quest Vitamins";
    ProjectTitle.style.fontSize = "5vw";
    ProjectDescription.innerHTML = "Quest Vitamins is local natual health products brand that was seeking a promotional video for use in expanding their overseas market.  For this project, I attended the Canadian Health Food Association Trade Show and interviewed and filmed Quest's key personnel, clients, and business partners.  I then created a storyline and used archival photographs as well as the footage that I captured from the convention to show the past, present, and future of the brand. I incorperated text animations and captions using Adobe After Effects and edited the final product in Adobe Premiere. Additionally, I wrote and recorded original music to accompany the video.";
    ProjectDescription.style.fontSize = "1.5vw";
    close.style.display = "flex";
    left.style.display = "none";
    right.style.display = "none";
    dots.style.display = "none";
    window.scrollTo({ top: 311, behavior: 'smooth' });
});


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
    close.style.display = "flex";
    left.style.display = "none";
    right.style.display = "none";
    dots.style.display = "none";
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
    close.style.display = "flex";
    left.style.display = "none";
    right.style.display = "none";
    dots.style.display = "none";
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
    close.style.display = "flex";
    left.style.display = "none";
    right.style.display = "none";
    dots.style.display = "none";
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
    close.style.display = "flex";
    left.style.display = "none";
    right.style.display = "none";
    dots.style.display = "none";
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
    dot7.style.transform = "scale(0.5)";
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
    if (video.src == "https://www.youtube.com/embed/Sl9DKIpOb7U"){
        video.src = "https://www.youtube.com/embed/zrtzlHnVEcI"
    } else if (
        video.src == "https://www.youtube.com/embed/zrtzlHnVEcI"){
        video.src = "https://www.youtube.com/embed/h-8Eghxk2lQ"
    } else if (
        video.src == "https://www.youtube.com/embed/h-8Eghxk2lQ"){
        video.src = "https://www.youtube.com/embed/AsM67Lt6ADw"
    } else if (
        video.src == "https://www.youtube.com/embed/AsM67Lt6ADw"){
        video.src = "https://www.youtube.com/embed/WxFNqFpXTSg" 
    } else if (
        video.src == "https://www.youtube.com/embed/WxFNqFpXTSg"){
        video.src = "https://www.youtube.com/embed/bch5mKn0Djo"
    } else if (
        video.src == "https://www.youtube.com/embed/bch5mKn0Djo"){
        video.src = "https://www.youtube.com/embed/lvpOJ8oQoCo"
    } else {
        video.src = "https://www.youtube.com/embed/Sl9DKIpOb7U"
    }
});

left.addEventListener("mouseover", function(){
    left.style.opacity = 0.5;
});
left.addEventListener("mouseout", function(){
    left.style.opacity = 1;
});

left.addEventListener("click", function(){
    if (video.src == "https://www.youtube.com/embed/Sl9DKIpOb7U"){
        video.src = "https://www.youtube.com/embed/lvpOJ8oQoCo"
    } else if (
        video.src == "https://www.youtube.com/embed/lvpOJ8oQoCo"){
        video.src = "https://www.youtube.com/embed/bch5mKn0Djo"
    } else if (
        video.src == "https://www.youtube.com/embed/bch5mKn0Djo"){
        video.src = "https://www.youtube.com/embed/WxFNqFpXTSg"
    } else if (
        video.src == "https://www.youtube.com/embed/WxFNqFpXTSg"){
        video.src = "https://www.youtube.com/embed/AsM67Lt6ADw"
    } else if (
        video.src == "https://www.youtube.com/embed/AsM67Lt6ADw"){
        video.src = "https://www.youtube.com/embed/h-8Eghxk2lQ"
    } else if (
        video.src == "https://www.youtube.com/embed/h-8Eghxk2lQ"){
        video.src = "https://www.youtube.com/embed/zrtzlHnVEcI"
    } else {
        video.src = "https://www.youtube.com/embed/Sl9DKIpOb7U"
    }
});

right.addEventListener("click", function(){
    if (video.src == "https://www.youtube.com/embed/zrtzlHnVEcI"){
        dot1.style.transform = "scale(0.5)";
        dot2.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/h-8Eghxk2lQ"){
        dot2.style.transform = "scale(0.5)";
        dot3.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/AsM67Lt6ADw"){
        dot3.style.transform = "scale(0.5)";
        dot4.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/WxFNqFpXTSg"){
        dot4.style.transform = "scale(0.5)";
        dot5.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/bch5mKn0Djo"){
        dot5.style.transform = "scale(0.5)";
        dot6.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/lvpOJ8oQoCo"){
        dot6.style.transform = "scale(0.5)";
        dot7.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/Sl9DKIpOb7U"){
        dot7.style.transform = "scale(0.5)";
        dot1.style.transform = "scale(1)";
    }
});

left.addEventListener("click", function(){
    if (video.src == "https://www.youtube.com/embed/lvpOJ8oQoCo"){
        dot1.style.transform = "scale(0.5)";
        dot7.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/bch5mKn0Djo"){
        dot7.style.transform = "scale(0.5)";
        dot6.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/WxFNqFpXTSg"){
        dot6.style.transform = "scale(0.5)";
        dot5.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/AsM67Lt6ADw"){
        dot5.style.transform = "scale(0.5)";
        dot4.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/h-8Eghxk2lQ"){
        dot4.style.transform = "scale(0.5)";
        dot3.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/zrtzlHnVEcI"){
        dot3.style.transform = "scale(0.5)";
        dot2.style.transform = "scale(1)";
    } else if (
        video.src == "https://www.youtube.com/embed/Sl9DKIpOb7U"){
        dot2.style.transform = "scale(0.5)";
        dot1.style.transform = "scale(1)";
    }
});
    
