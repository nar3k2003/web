// var text = "abcdefghjklmnopqrstuvwxyz";
// var name1 = "Narek Grigoryan";
// var text1 = "e fe rfe g erg e rg eg";

// console.log(text.length);

// console.log(text[3]);

// console.log(text.slice(5,10));

// console.log(text.slice(12));

// console.log(text.slice(-12));

// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());

// console.log(text.concat(" ", name1));

// console.log(name1.replace("Narek", "David"));

// console.log(text1.split(" "));

// console.log(name1.match("yan"));

// let x = 123.5646841;

// console.log(x.toString());

// console.log(x.toFixed(0));
// console.log(x.toFixed(3));
// console.log(x.toFixed(5));
// console.log(x.toFixed(7));
// console.log(x.toFixed(9));

// console.log(x.valueOf());

// console.log(Number("true"));
// console.log(Number("10"));
// console.log(Number("   6"));
// console.log(Number("10.36"));
// console.log(Number("12,7"));
// console.log(Number(" 544 65  "));
// console.log(Number("falce"));
// console.log(Number("qergr"));


// console.log(parseInt("true"));
// console.log(parseInt("10"));
// console.log(parseInt("   6"));
// console.log(parseInt("10.36"));
// console.log(parseInt("12,7"));
// console.log(parseInt(" 544 65  "));
// console.log(parseInt("falce"));
// console.log(parseInt("qergr"));

// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.55));



document.getElementById("item1").addEventListener("click", function() {
    alert("Hello world")
});

function myFunc1() {
    console.log("my function click is working");
}
function myFunc2() {
    console.log("my function mouseover is working");
}
function myFunc3() {
    console.log("my function mouseout is working");
}

document.getElementById("item2").addEventListener("click", myFunc1);

document.getElementById("item3").addEventListener("mouseover", myFunc2);

document.getElementById("item4").addEventListener("mouseout", myFunc3);

function changeText(el) {
    el.innerHTML = "Oooops!";
}