SkyCreateMemory({
    MeteorsCount: ""
});
SkyCreateMemory({
    MeteorsTitle: ""
});
SkyCreateMemory({
    MeteorsBracket: ""
});
SkyCreateMemory({
    Advantages: "Interactive"
});
SkyCreateMemory({
    Surprise: "Click To See a Surprise!"
});

setInterval(() => {
        MovingMeteor();
        SkyRenderPage();
    }, 3) // Render Every 100 Milliseconds

let i = 0;

document.getElementById("Button").addEventListener("click", () => {
    SkyUpdateMemory("MeteorsCount", (Count) => !isNaN(Count) ? +Count + 1 : Count = 1);
    SkyUpdateMemory("MeteorsTitle", (Title) => Title = " Meteors In The Sky)");
    SkyUpdateMemory("MeteorsBracket", (Bracket) => Bracket = "(");
    SkyUpdateMemory("Surprise", (Surprise) => Surprise.includes("Click") ? Surprise = "Surprise!" : Surprise += "!")
    ThrowMeteor(Math.floor(Math.random() * window.innerWidth));
    let AdvantagesArray = ["Interactive", "Fast", "Flexible", "Advanced"];
    SkyUpdateMemory("Advantages", (Advantages) => {
        AdvantagesArray.length === i + 1 ? i = 0 : i++;
        return AdvantagesArray[i];
    });
});

function ThrowMeteor(Left) {
    let Meteor = document.createElement("img");
    Meteor.src = "../Icons/Skyjs-Meteor.svg";
    Meteor.className = "Meteor";
    Meteor.style.left = `${Left}px`;
    Meteor.style.top = `-300px`;
    document.body.appendChild(Meteor);
};

function MovingMeteor() {
    [...document.getElementsByClassName("Meteor")].forEach(Meteor => {
        Meteor.style.top = `${Meteor.offsetTop + 3}px`;
        if (Meteor.offsetTop >= 0 && 0 > (window.innerHeight - Meteor.offsetTop)) {
            document.body.removeChild(Meteor);
            SkyUpdateMemory("MeteorsCount", function(Count) {
                if (Count > 1) return Count - 1;
                SkyUpdateMemory("MeteorsTitle", (Title) => Title = "");
                SkyUpdateMemory("MeteorsBracket", (Bracket) => Bracket = "");
                SkyUpdateMemory("Surprise", (Surprise) => Surprise = "Click To Throw a New Meteor");
                return Count = "";
            });
        };
    });
};