let a = 2
let b = 5

function summe(x, y) {
    return x + y
}

function zaehlen(x, y) {
    for (let index = x; index <= y; index++) {
       console.log(index)
    }
}

let c = plusZwei(8) // 10
let d = plusZwei(6) // 8

function updateUser(params) {
    console.log(params)
}


updateUser({'username': 'Svenja'})




   




function firstWord(s) {
    let firstBlank = s.indexOf(' ');
    return s.substr(0, firstBlank);
}

firstWord('aber Wo ist hier')
firstWord('asd asdih a sdasjdh ')



function kaugummiautomatDrehenCheck(slot) {
    if (slot == '1 Euro') {
        return releaseGum()
    } else {
        return false
    }
    

    

}