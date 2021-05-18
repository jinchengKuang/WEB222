function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if (x == "") throw "is Empty";
        if (isNaN(x)) throw "is not a number";
        if (x > 100) throw "is too high";
        if (x < 50) throw "is too low";
    } catch (err) {
        message.innerHTML = "Input " + err;
    }
}
myFunction();