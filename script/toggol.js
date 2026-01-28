
document.getElementById("Cashout").style.display = "none";


document.getElementById("Add-Money-box").addEventListener("click", function () {
    document.getElementById("Add-Money").style.display = "block";
    document.getElementById("Cashout").style.display = "none";
})

document.getElementById("Cash-out-box").addEventListener("click", function () {
    document.getElementById("Cashout").style.display = "block";
    document.getElementById("Add-Money").style.display = "none";
})