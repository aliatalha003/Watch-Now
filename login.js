console.log("error1")
const accounts = JSON.parse(localStorage.getItem("accounts")) || []
console.log("error2")
function logIn() {
             var x = false,
                 y = false,
                 z=false
    if (document.getElementById("u").value == "Rania" && document.getElementById("p").value == "admin15@") {
        location.href = "admin.html"
        z=true
    }
            if (document.getElementById("u").value== "") {
                document.getElementById("d1").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
            }
            else {
                for (var i = 0; i < accounts.length; i++) {
                    if (document.getElementById("u").value == accounts[i].username) {
                        x = true;
                        break;
                    }
                }
            }
            if (document.getElementById("p").value == "") {
                document.getElementById("d2").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
            }
            else {
                for (var i = 0; i < accounts.length; i++) {
                    if (document.getElementById("p").value == accounts[i].password) {
                        y = true;
                        break;
                    }
                }
            }

            if (x == true || document.getElementById("u").value != "") {
                document.getElementById("d1").innerHTML = ""
            }
            if (y == true || document.getElementById("p").value != "") {
                document.getElementById("d2").innerHTML = ""
            }

            if (x == true && y == true) {
                location.href = "home.html" 
            }
            else if (document.getElementById("u").value != "" && document.getElementById("p").value != "" && z==false) {
                document.getElementById("d3").innerHTML = "<span style='color:white;font-size:26px '> " + "\u26A0" + "</span>" + "<span style='color:white;font-size:13px '> "+"    Unrecognized username or password." + "</span>"
                document.getElementById("d1").innerHTML = ""
                document.getElementById("d2").innerHTML = ""
    }
        }


