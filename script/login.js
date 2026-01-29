document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("Account-Number").value;
    const pin = document.getElementById("login-Pin").value;
    const convertedPin = parseInt(pin)

    if (accountNumber.length === 11) {
        if (convertedPin === 1234) {
            window.location.href = "main.html"
        }
        else {
            console.log("pin tikh nay")
        }
    }
    else {
        console.log("need valid account number")
    }

})