var teamMemberObj = {
    name: ["Don", "Aaron", "Aiyden", "K.T.", "Sam"],
    position: ["Team Lead", "Writer", "Art", "Marketing", "Programming"]
};

var personColor = ["#f38181", "#aa96da", "#30e3ca", "#ffcef3", "#393e46"];


for(var i = 0; i < teamMemberObj.name.length; i++){
    // console.log("var " + i);

    var numberX = i + 1;
    var stringNumberX = numberX.toString();

    document.getElementById('person' + stringNumberX).innerHTML = teamMemberObj.name[i];
    document.getElementById('pos' + stringNumberX).innerHTML = teamMemberObj.position[i];

    document.getElementById("personPic" + stringNumberX).style.color = personColor[i];
}


