let newArr = arr.map(timesTen);

const objArr = [
    // orange, postit, pumpkins are all orange
    {
        color: "orange",
        items: ["orange", "postit", "pumpkins"]
    },
    // sunscreen, marshmallows, snow are all white
    {
        color: "white",
        items: ["sunscreen", "masrshmallows", "snow"]
    },
    {
        color: "red",
        items: ["gotorade", "roses", "apple", "peppers"]
    },
    {
        color: "brown",
        items: ["wood", "boots"]
    }
];

// ["orange, postit, pumpkins, are all orange", ...]

let sentenceArr = objArr.map(obj => {
    return colorSentence(obj);
})

console.log(sentenceArr)

let idk = objArr.map(obj => {
    return obj.length = obj.items.length();
})


// given one object return '[items] are all [color]
// orange, postit, pumpkins are all orange
/*
    {
        color: "orange",
        items: ["orange, "postit", "pumpkins"]
    }
*/

function colorSentence(obj) {
    let sentence = "";
    obj.items.forEach(el => {
        sentence = sentence = el;
    })
    console.log(sentence);
    sentence = sentence + `are all ${el.color}`;
}

colorSentence(objArr[0])

function getColor(el) {
    return el.color;
}

const getColorTwo = (el) => {
    return el.color;
}

let lengthArr = objArr.map(obj => {
    // Get the length of the itme array
    let itemsLength = obj.items.length;
    // update the object itself
    obj.length = itemsLength;
    // return the object
    return obj;
})

