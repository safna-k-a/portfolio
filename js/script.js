/*author:SAFNA K A*/
function validate() {
    let n = document.getElementById("text1").value;
    let e = document.getElementById("text2").value;
    let s = document.getElementById("text3").value;
    let d = document.getElementById("text4").value;
    let nregx = /^[a-z,A-Z]{2,15}$/;
    let eregx =
        /^[a-z,A-Z,0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$/;
    if (n == "") {
        alert("name field is empty");
        return false;
    } else if (!nregx.test(n)) {
        alert("enter valid name");
        return false;
    } else if (!eregx.test(e)) {
        alert("enter a valid email");
        return false;
    } else if (e == "") {
        alert("email field is empty");
        return false;
    } else if (s == "") {
        alert("subject field is empty");
        return false;
    } else if (d == "") {
        alert("Please write a message");
        return false;
    } else {
        return true;
    }
}
