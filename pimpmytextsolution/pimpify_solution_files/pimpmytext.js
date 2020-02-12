// CSE 190M Lab 5 (Pimpify)
// JavaScript code for Pimp My Text lab

function fontSize() {
    $("sampletext").style.fontSize = "24pt";
}

function textStyle() {
    if ($("pimp").checked) {
        $("sampletext").style.fontWeight = "bold";
        $("sampletext").style.textDecoration = "underline blink";
        $("sampletext").style.color = "green";
    } else {
        $("sampletext").style.fontWeight = "normal";
        $("sampletext").style.textDecoration = "none";
        $("sampletext").style.color = "black";
    }
}

function snoopify() {
    $("sampletext").value = $("sampletext").value.toUpperCase();
    $("sampletext").value = $("sampletext").value.split(".").join("-izzle.");
}
