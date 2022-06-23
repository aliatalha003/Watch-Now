document.getElementById("b1").addEventListener('click', function () {
    if (document.getElementById("w1").value == "") {
        localStorage.setItem("document.querySelectorAll('img')[0].width", 750)
    }
    if (document.getElementById("h1").value == "") {
        localStorage.setItem("document.querySelectorAll('img')[0].height", 420);
    }
    if (document.getElementById("w1").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[0].width", document.getElementById("w1").value);
    }
    if (document.getElementById("h1").value != "") {
            localStorage.setItem("document.querySelectorAll('img')[0].height", document.getElementById("h1").value);
    }
});


document.getElementById("b2").addEventListener('click', () => {
    if (document.getElementById("w2").value == "") {
        localStorage.setItem("document.querySelectorAll('img')[1].width", 150)
    }
    if (document.getElementById("h2").value == "") {
        localStorage.setItem("document.querySelectorAll('img')[1].height", 150);
    }
    if (document.getElementById("w2").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[1].width", document.getElementById("w2").value);
    }
    if (document.getElementById("h2").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[1].height", document.getElementById("h2").value);
    }
});


document.getElementById("b3").addEventListener('click', () => {
    if (document.getElementById("w3").value=="") {

        localStorage.setItem("document.querySelectorAll('img')[2].width",150)
    }
     if (document.getElementById("h3").value == "") {
        localStorage.setItem("document.querySelectorAll('img')[2].height",150);

    }
    if (document.getElementById("w3").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[2].width", document.getElementById("w3").value);
    }
    if (document.getElementById("h3").value != ""){
        localStorage.setItem("document.querySelectorAll('img')[2].height", document.getElementById("h3").value);
    }
});


document.getElementById("b44").addEventListener('click', () => {
    if (document.getElementById("w4").value == "") {

        localStorage.setItem("document.querySelectorAll('img')[3].width", 150)
    }
    if (document.getElementById("h4").value == "") {
        localStorage.setItem("document.querySelectorAll('img')[3].height", 150);

    }
    if (document.getElementById("w4").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[3].width", document.getElementById("w4").value);
    }
    if (document.getElementById("h4").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[3].height", document.getElementById("h4").value);
    }
});

document.getElementById("b55").addEventListener('click', () => {
    if (document.getElementById("w5").value == "") {

        localStorage.setItem("document.querySelectorAll('img')[4].width", 150)
    }
    if (document.getElementById("h5").value == "") {
        localStorage.setItem("document.querySelectorAll('img')[4].height", 150);

    }
    if (document.getElementById("w5").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[4].width", document.getElementById("w5").value);
    }
    if (document.getElementById("h5").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[4].height", document.getElementById("h5").value);
    }
});


document.getElementById("b66").addEventListener('click', () => {
    if (document.getElementById("w6").value == "") {

        localStorage.setItem("document.querySelectorAll('img')[5].width", 150)
    }
    if (document.getElementById("h6").value == "") {
        localStorage.setItem("document.querySelectorAll('img')[5].height", 150);

    }
    if (document.getElementById("w6").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[5].width", document.getElementById("w6").value);
    }
    if (document.getElementById("h6").value != "") {
        localStorage.setItem("document.querySelectorAll('img')[5].height", document.getElementById("h6").value);
    }
});


document.getElementById("b4").addEventListener('click', () => {
        localStorage.setItem("document.querySelector('nav').style","background-color:darkblue")
    });
document.getElementById("b5").addEventListener('click', () => {
        localStorage.setItem("document.querySelector('nav').style","background-color:red")
    
});
document.getElementById("b6").addEventListener('click', () => {
        localStorage.setItem("document.querySelector('nav').style","background-color:yellow")
    
});
document.getElementById("b7").addEventListener('click', () => {
        localStorage.setItem("document.querySelector('nav').style","background-color:lightpink")
    
});
document.getElementById("b8").addEventListener('click', () => {
    localStorage.setItem("document.querySelector('nav').style","background-color:darkslategrey")
    
});
document.getElementById("b9").addEventListener('click', () => {
    localStorage.setItem("document.querySelector('nav').style","background-color:#35772c")
    
});


document.getElementById("l1").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('l').style", "color:darkblue")
});
document.getElementById("l2").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('l').style", "color:red")

});
document.getElementById("l3").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('l').style", "color:yellow")

});
document.getElementById("l4").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('l').style", "color:lightpink")

});
document.getElementById("l5").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('l').style", "color:darkslategrey")

});
document.getElementById("l6").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('l').style", "color:white")

});


document.getElementById("g1").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('g').style", "background-color:darkblue")
});
document.getElementById("g2").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('g').style", "background-color:red")

});
document.getElementById("g3").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('g').style", "background-color:yellow")

});
document.getElementById("g4").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('g').style", "background-color:lightpink")

});
document.getElementById("g5").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('g').style", "background-color:darkslategrey")

});
document.getElementById("g6").addEventListener('click', () => {
    localStorage.setItem("document.getElementById('g').style", "background-color:rgb(12, 9, 34)")

});


document.getElementById("B").addEventListener('click', () => {

    var x = document.getElementById("S").options[document.getElementById("S").selectedIndex].value

    if (x == "one") {
        localStorage.setItem("document.getElementById('s').style", "font-size:12px")
    }
    else if (x == "two") {
        localStorage.setItem("document.getElementById('s').style", "font-size:14px")
    }
    else if (x == "three") {
        localStorage.setItem("document.getElementById('s').style", "font-size:16px")
    }
    else if (x == "four") {
        localStorage.setItem("document.getElementById('s').style", "font-size:18px")
    }
    else if (x == "five") {
        localStorage.setItem("document.getElementById('s').style", "font-size:20px")
    }
    else if (x == "six") {
        localStorage.setItem("document.getElementById('s').style", "font-size:34px")
    }

});

