// JAVASCRIPT 1 - MA1


// question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }

};

cat.complain ();

// question 2

const heading = document.querySelector("h3");

console.log(heading);

heading.innerHTML ="Updated heading";

// question 3

heading.style.fontSize ="2em";

// question 4 


// question 5


// question 6

const results =document.querySelector(".results")

results.innerHTML="new paragraph"


// question 7 

let cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function logToCatList (list) {
    for(let i=0; i<list.length; i++)
        console.log(list[i]);
}

logToCatList (cats);


// question 8 

function createCats (cats) {
    console.log(cats);
}

createCats ("pussycat");