function email() {
    if (document.getElementById("e").value.indexOf("@") == -1 || document.getElementById("e").value.indexOf(".com") == -1) {
        document.getElementById("d5").innerHTML = "<span style='color: red; font-size:14px '> " + "Email does not contain a valid email." + "</span>"
    }
    else {
        document.getElementById("d5").innerHTML = ""
    }
}

function phone() {
    var x = document.getElementById("t").value

    if (x.length != 11 || x[0] != 0 || x[1] != 1 || (x[2] != 1 && x[2] != 2 && x[2] != 0))
        document.getElementById("T").innerHTML = "<span style='color: red; font-size:14px '> " + "This number is not valid according to your country." + "</span>"
    else
        document.getElementById("T").innerHTML = ""
}

function rules() {
    document.getElementById("d7").innerHTML = "<span style = 'color:darkslategray ; font-size:12px ' >" + "Your password must have at-least 7 characters.<br>Your password must contain at - least 1 numeric character.<br>Spaces are not allowed in your password.<br>" + "</span>"
    var x = document.getElementById("P").value
    if (x.length < 7 || x.indexOf(" ") != -1 || (x.indexOf(0) == -1 && x.indexOf(1) == -1 && x.indexOf(2) == -1 && x.indexOf(3) == -1 && x.indexOf(4) == -1 && x.indexOf(5) == -1 && x.indexOf(6) == -1 && x.indexOf(7) == -1 && x.indexOf(8) == -1 && x.indexOf(9) == -1)) {
        document.getElementById("d6").innerHTML = "<span style='color: red; font-size:14px '> " + "The password does not satisfy the password policies." + "</span>"
    }

    else {
        document.getElementById("d6").innerHTML = ""
    }
}
function add() {
    var x = document.getElementById("t").value
    var y = document.getElementById("P").value
    var accounts = JSON.parse(localStorage.getItem("accounts")) || []

    accounts.push({
        username: document.getElementById("U").value,
        email: document.getElementById("e").value,
        password: document.getElementById("P").value,
        phone: document.getElementById("t").value,
        type: "user"
    })
    console.log("error")
    localStorage.setItem("accounts", JSON.stringify(accounts))


    if (document.getElementById("U").value == "") {
        document.getElementById("d4").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
    }
    if (document.getElementById("e").value == "") {
        document.getElementById("d5").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
    }
    if (document.getElementById("P").value == "") {
        document.getElementById("d6").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
    }
    if (document.getElementById("t").value == "") {
        document.getElementById("T").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
    }
    if (document.getElementById("U").value != "" && document.getElementById("t").value != "" && document.getElementById("e").value != "" && document.getElementById("e").value.indexOf("@") != -1 && document.getElementById("e").value.indexOf(".com") != -1 && document.getElementById("P").value.trim() != "" && (x.length == 11 && x[0] == 0 && x[1] == 1 && (x[2] == 1 || x[2] == 2 || x[2] == 0)) && y.length >= 7 && y.indexOf(" ") == -1 && (y.indexOf(0) != -1 || y.indexOf(1) != -1 || y.indexOf(2) != -1 || y.indexOf(3) != -1 || y.indexOf(4) != -1 || y.indexOf(5) != -1 || y.indexOf(6) != -1 || y.indexOf(7) != -1 || y.indexOf(8) != -1 || y.indexOf(9) != -1)) {
        location.href = "home.html"
    }
}