export default function caesar(string, key) {
    if (key === 0) return string;
    else if (key === 26) return string;
    let c = "";
    let capitalAlphabets = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    let smallAlphabets = ['a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
    ];
    string.split("").forEach((letter) => {
        if (letter == " ") return (c += " ");
        if (!/^[A-Za-z]+$/.test(letter)) return (c += letter);
        if(letter === letter.toLowerCase()){
            let index = smallAlphabets.findIndex((alphabet)=>{
                return alphabet === letter;
            });
            if(index === smallAlphabets.length - 1){
                index = -1;
            }
            if(index + key > smallAlphabets.length - 1){
                index = index - 26;
            }
            c +=  smallAlphabets[index+key]
        } else if(letter === letter.toUpperCase()){
            let index = capitalAlphabets.findIndex((alphabet)=>{
                return alphabet === letter;
            });
            if(index === capitalAlphabets.length - 1){
                index = -1;
            }
            if(index + key > capitalAlphabets.length - 1){
                index = index - 26;
            }
            c +=  capitalAlphabets[index+key]
        }
    });
    return c;
}

// module.exports = caesar;