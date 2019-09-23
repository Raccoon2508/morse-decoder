const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    

let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let morseCodes=['1011','11101010','11101110','111010','10','10101110','111110','10101010','1010','10111111','111011','10111010','1111','1110','111111','10111110','11111011','101110','101010','11','101011','10101011','101111','11101011','11101111','11111010'];

let morseSymbol='';
let word='';
let counter=0;

for(let i=0; i<=expr.length;i++){
  if(expr[i]==='0'||i==expr.length){
    if(counter!==0){
      word=word+alphabet[morseCodes.indexOf(morseSymbol)];
      counter=0;
      morseSymbol='';
      console.log(word);
      }
    
   
    }
  else if(expr[i]==='1'){
    morseSymbol=morseSymbol+expr[i]+expr[i+1];
    i++;
    counter++;
    console.log(morseSymbol);
    }
  else if(expr[i]==='*'){
    if(counter!==0){
      word=word+alphabet[morseCodes.indexOf(morseSymbol)];
      counter=0;
      morseSymbol='';
      console.log(word);
      }
    word+=' ';
    counter=0;
    morseSymbol='';
    i+=10;
    }  
  
  }
return word;
}  
}

module.exports = {
    decode
}
