window.addEventListener("load", function (event) {

    alert('Well hello friend');
   
    var color = prompt('What is your favorite color ?!');
    document.getElementById('title').style.color = color;
    
    var name = prompt('What is your name comrade ?!');
    document.getElementById('name').innerHTML = name;
});
