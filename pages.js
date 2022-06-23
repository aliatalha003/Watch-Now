
if (localStorage.getItem("document.getElementById('g').style") === null) {
    document.getElementById('g').style = "background-color: rgb(12, 9, 34)"
}
else {
    document.getElementById('g').style = localStorage.getItem("document.getElementById('g').style")
}


if (localStorage.getItem("document.querySelector('nav').style") === null) {
    document.querySelector('nav').style = "background-color:#35772c"
}
else {
    document.querySelector('nav').style = localStorage.getItem("document.querySelector('nav').style")
}


if (localStorage.getItem("document.getElementById('l').style") === null) {
    document.getElementById('l').style = "color:white"
}
else {
    document.getElementById('l').style = localStorage.getItem("document.getElementById('l').style")
}

if (localStorage.getItem("document.getElementById('s').style") === null) {
    document.getElementById('s').style = "font-size:34px"
}
else {
    document.getElementById('s').style = localStorage.getItem("document.getElementById('s').style")
}
