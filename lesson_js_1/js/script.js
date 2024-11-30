// ---------------------------------------
function big_number(p1, p2, p3) {
    let big;
    if ((p1 > p2) && (p1 > p3))  
    {
        big = p1;
    }
    else if ((p2 > p1) && (p2 > p3))
    {
        big = p2;
    }
    else 
    {
        big = p3
    }    
    return big;
}

console.log(big_number(35, 27, 20));

// ---------------------------------------

function array_numbers(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);   
        // if (i == array.length-1) {
        //     alert("finish")
        // }  
    }
    console.log(array.length);
}

arr = [15, 15, 58, 788, 25, 87, 654];

array_numbers(arr);

// ---------------------------------------


const student = [
    {
        Name:  "Narek",
        lastName: "Grigoryan",
        age: 21,
        kurs: "4", 
        bajin: "IKM"
    },  {
        Name:  "Seyran",
        lastName: "Aghamyan",
        age: 20,
        kurs: "1", 
        bajin: "IKM"
    },  {
        Name:  "Abel",
        lastName: "Ghaltakhchyan",
        age: 21,
        kurs: "4", 
        bajin: "Finanas"
    }
]

console.log(student);


// ---------------------------------------

function try_catch() {
    let param = true;
    let param1 = 15;
    let param2 = "kvne";
    let param3 = [51,18,32]
    try {
        console.log(typeof(param));
        console.log(typeof(param1));
        console.log(typeof(param2));
        console.log(typeof(param3));
        console.log(typeof(param4));
    } catch (error) {
        console.log(typeof(param5));
    }
}

try_catch()