function calc() {
    var a = document.querySelector("#itemname").value;
    var b = parseInt(document.querySelector("#itemprice").value);
    var c = parseInt(document.querySelector("#srpm").value);
    var calculate;

    if (b <= 0 || undefined) {
        calculate = "No item price available";
    }
    else if (c <= 0 || undefined) {
        calculate = "No savings rate per month available";
    }
    else if (b > 0 && c > 0) {
        calculate = b/c;
    }

    document.querySelector("#result").innerHTML = String(calculate) + " months!";
}
