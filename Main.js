function calc() {
    var a = document.querySelector("#itemname").value;
    var b = parseInt(document.querySelector("#itemprice").value);
    var c = parseInt(document.querySelector("#srpm").value);
    var calculate;

    if (b <= 0) {
        calculate = window.alert("The price of the item is not available");
    }
    else if (c <= 0) {
        calculate = window.alert("The monthly savings rate is not available");
    }
    else if (b > 0 && c > 0) {
        calculate = b/c;
    }

    document.querySelector("#result").innerHTML = calculate;
}
