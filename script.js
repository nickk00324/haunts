var people = document.querySelectorAll("li");
var photo = document.getElementById("photo");

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