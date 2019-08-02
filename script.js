var people = document.querySelectorAll("li");
var photo = document.getElementById("photo");

var play_button = document.getElementById("play-button");

play_button.addEventListener("click", play);
var scroll_forever = false;



people.forEach(function(person){
    person.addEventListener("mouseover", mouseOver);
    person.addEventListener("mouseleave", mouseOut);
});


function mouseOver(){
    var nameArr = this.innerHTML.split(" ");
    var name = "";
    if (nameArr[nameArr.length - 1] == "Kang" || nameArr[nameArr.length - 1] == "Kim"){
        name = nameArr[0];
    } else {
        name = nameArr[nameArr.length - 1];
    }
    photo.innerHTML = "<img src='/imgs/art/" + name + ".jpeg'>";
}

function mouseOut(){
    photo.innerHTML = "";
}

function play(){
    var scroll = document.querySelector(".scroll");
    if(scroll_forever == false){
        scroll.style = "animation: scroll_anim 30s linear infinite;";
        play_button.style = "color: #ffb6b9;"
        scroll_forever = true;
    }else {
        scroll.style = "animation: scroll_anim 30s linear 1;";
        play_button.style = "color: #000";
        scroll_forever = false;
        console.log("clicked")
    }

}