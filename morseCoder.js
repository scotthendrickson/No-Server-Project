var string = "hello world 123"
var string2 = ".... . .-.. .-.. --- .-- --- .-. .-.. -.. .---- ..--- ...--"

function morseCoder (str) {
	var newArray = []
	var morseCode = {
 		a : ".-",
		b : "-...",
		c : "-.-.",
		d : "-..",
		e : ".",
		f : "..-.",
		g : "--.",
		h : "....",
		i : "..",
		j : ".---",
		k : "-.-",
		l : ".-..",
		m : "--",
		n : "-.",
		o : "---",
		p : ".--.",
		q : "--.-",
		r : ".-.",
		s : "...",
		t : "-",
		u : "..-",
		v : "...-",
		w : ".--",
		x : "-..-",
		y : "-.--",
		z : "--..",
		0 : "-----",
		1 : ".----",
		2 : "..---",
		3 : "...--",
		4 : "....-",
		5 : ".....",
		6 : "-....",
		7 : "--...",
		8 : "---..",
		9 : "----.",
		".-" : "a",
		"-..." : "b",
		"-.-." : "c",
		"-.." : "d",
		"." : "e",
		"..-." : "f",
		"--." : "g",
		"...." : "h",
		".." : "i",
		".---" : "j",
		"-.-" : "k",
		".-.." : "l",
		"--" : "m",
		"-." : "n",
		"---" : "o",
		".--." : "p",
		"--.-" : "q",
		".-." : "r",
		"..." : "s",
		"-" : "t",
		"..-" : "u",
		"...-" : "v",
		".--" : "w",
		"-..-" : "x",
		"-.--" : "y",
		"--.." : "z",
		"-----" : 0,
		".----" : 1,
		"..---" : 2,
		"...--" : 3,
		"....-" : 4,
		"....." : 5,
		"-...." : 6,
		"--..." : 7,
		"---.." : 8,
		"----." : 9
	};
	var array = str.split('');
	console.log(array);
	for (var i = 0; i < array.length; i++) {
		for (var prop in morseCode) {
			if(array[i] === prop) {
				newArray.push(morseCode[prop]);
			}
		}
	}
	var newStr = newArray.join(' ');
	return newStr;
}

function morseDecoder (str) {
	var newArray = []
	var morseCode = {
		".-" : "a",
		"-..." : "b",
		"-.-." : "c",
		"-.." : "d",
		"." : "e",
		"..-." : "f",
		"--." : "g",
		"...." : "h",
		".." : "i",
		".---" : "j",
		"-.-" : "k",
		".-.." : "l",
		"--" : "m",
		"-." : "n",
		"---" : "o",
		".--." : "p",
		"--.-" : "q",
		".-." : "r",
		"..." : "s",
		"-" : "t",
		"..-" : "u",
		"...-" : "v",
		".--" : "w",
		"-..-" : "x",
		"-.--" : "y",
		"--.." : "z",
		"-----" : 0,
		".----" : 1,
		"..---" : 2,
		"...--" : 3,
		"....-" : 4,
		"....." : 5,
		"-...." : 6,
		"--..." : 7,
		"---.." : 8,
		"----." : 9
	};
	var array = str.split(' ');
	console.log(array);
	for (var i = 0; i < array.length; i++) {
		for (var prop in morseCode) {
			if(array[i] === prop) {
				newArray.push(morseCode[prop]);
			}
		}
	}
	var newStr = newArray.join(' ');
	return newStr;
}
console.log(morseCoder(string));
console.log(morseDecoder(string2));



//Kata submission 6-2
decodeMorse = function(morse){
	var morseCode = morse.replace(/\s\s+/g, ' .-.-.- ').split(' ');
	var morseCodes = {
		".-" : "a",
		"-..." : "b",
		"-.-." : "c",
		"-.." : "d",
		"." : "e",
		"..-." : "f",
		"--." : "g",
		"...." : "h",
		".." : "i",
		".---" : "j",
		"-.-" : "k",
		".-.." : "l",
		"--" : "m",
		"-." : "n",
		"---" : "o",
		".--." : "p",
		"--.-" : "q",
		".-." : "r",
		"..." : "s",
		"-" : "t",
		"..-" : "u",
		"...-" : "v",
		".--" : "w",
		"-..-" : "x",
		"-.--" : "y",
		"--.." : "z",
		"-----" : 0,
		".----" : 1,
		"..---" : 2,
		"...--" : 3,
		"....-" : 4,
		"....." : 5,
		"-...." : 6,
		"--..." : 7,
		"---.." : 8,
		"----." : 9,
		".-.-.-" : '.'
	};
	for (var i = 0; i < morseCode.length; i++) {
		for (var prop in morseCodes) {
			if(morseCode[i] === prop) {
				morseCode[i] = morseCodes[prop];
			}
		}
	}
	return morseCode.join('').replace(/\./g,' ');
}

//Works to encode/decode but won't do numbers anymore? Also punctuation is weird.
var string = "hello world 123 321 dlrow olleh."
var string2 = ".... . .-.. .-.. ---  .-- --- .-. .-.. -..  .---- ..--- ...--"

decodeMorse = function(morse){
	var morseCodes = {
		".-.-.-" : '.',
		".-" : "a",
		"-..." : "b",
		"-.-." : "c",
		"-.." : "d",
		"." : "e",
		"..-." : "f",
		"--." : "g",
		"...." : "h",
		".." : "i",
		".---" : "j",
		"-.-" : "k",
		".-.." : "l",
		"--" : "m",
		"-." : "n",
		"---" : "o",
		".--." : "p",
		"--.-" : "q",
		".-." : "r",
		"..." : "s",
		"-" : "t",
		"..-" : "u",
		"...-" : "v",
		".--" : "w",
		"-..-" : "x",
		"-.--" : "y",
		"--.." : "z",
		"-----" : 0,
		".----" : 1,
		"..---" : 2,
		"...--" : 3,
		"....-" : 4,
		"....." : 5,
		"-...." : 6,
		"--..." : 7,
		"---.." : 8,
		"----." : 9,

	};
	if (morse[0] === '.' | morse[0] === '-'){
		var morseCode = morse.replace(/\s\s+/g, ' & ').split(' ');
		for (var i = 0; i < morseCode.length; i++) {
			for (var prop in morseCodes) {
				if(morseCode[i] === prop) {
					morseCode[i] = morseCodes[prop];
				}
			}
		}
		return morseCode.join('').replace(/&/g,' ');
	}else {
		var morseCoders = morse.split('');
		for (var x = 0; x < morse.length; x++) {
			for (var stuff in morseCodes) {
				if(morseCoders[x] === morseCodes[stuff]) {
					morseCoders[x] = stuff;
				}
			}
		}
		return morseCoders.join(' ');
	}

}

console.log(decodeMorse(string2));
console.log(decodeMorse(string));
console.log(decodeMorse('.... . .-.. .-.. ---   .-- --- .-. .-.. -..   1 2 3   3 2 1   -.. .-.. .-. --- .--   --- .-.. .-.. . ....'));

//Alternative option:use replace! Except it doesn't work for the morse code part...
function test(string){
	var newString = string.toLowerCase();
	return newString.replace(/0/g, '----- ').replace(/1/g, '.---- ').replace(/2/g, '..--- ').replace(/3/g, '...-- ').replace(/4/g, '....- ').replace(/5/g, '..... ').replace(/6/g, '-.... ').replace(/7/g, '--... ').replace(/8/g, '---.. ').replace(/9/g, '----. ').replace(/a/g, '.- ').replace(/b/g, '-... ').replace(/c/g, '-.-. ').replace(/d/g, '-.. ').replace(/e/g, '. ').replace(/f/g, '..-. ').replace(/g/g, '--. ').replace(/h/g, '.... ').replace(/i/g, '.. ').replace(/j/g, '.--- ').replace(/k/g, '-.- ').replace(/l/g, '.-.. ').replace(/m/g, '-- ').replace(/n/g, '-. ').replace(/o/g, '--- ').replace(/p/g, '.--. ').replace(/q/g, '--.- ').replace(/r/g, '.-. ').replace(/s/g, '... ').replace(/t/g, '- ').replace(/u/g, '..- ').replace(/v/g, '...- ').replace(/w/g, '.-- ').replace(/x/g, '-..- ').replace(/y/g, '-.-- ').replace(/z/g, '--.. ');

}
function test2(string){
	return string.replace(/\.-\s/g, 'a').replace(/-\.\.\.\s/g, 'b').replace(/-\.-\.\s/g, 'c').replace(/-\.\.\s/g, 'd').replace(/\.\s/g, 'e').replace(/\.\.-\.\s/g, 'f').replace(/--\.\s/g, 'g').replace(/\.\.\.\.\s/g, 'h').replace(/\.\.\s/g, 'i').replace(/\.---\s/g, 'j').replace(/-\.-\s/g, 'k').replace(/\.-\.\.\s/g, 'l').replace(/--\s/g, 'm').replace(/-\.\s/g, 'n').replace(/---\s/g, 'o').replace(/\.--\.\s/g, 'p').replace(/--\.-\s/g, 'q').replace(/\.-\.\s/g, 'r').replace(/\.\.\.\s/g, 's').replace(/-\s/g, 't').replace(/\.\.-\s/g, 'u').replace(/\.\.\.-\s/g, 'v').replace(/\.--\s/g, 'w').replace(/-\.\.-\s/g, 'x').replace(/-\.--\s/g, 'y').replace(/--\.\.\s/g, 'z').replace(/-----\s/g, '0').replace(/\.----\s/g, '1').replace(/\.\.---\s/g, '2').replace(/\.\.\.--\s/g, '3').replace(/\.\.\.\.-\s/g, '4').replace(/\.\.\.\.\.\s/g, '5').replace(/-\.\.\.\.\s/g, '6').replace(/--\.\.\.\s/g, '7').replace(/---\.\.\s/g, '8').replace(/----\.\s/g, '9);
}


//This does NOT work but the idea was to create a function that determined what the next variable in the sequence was and dynamically translate the information.
var string = "hello world 123 321 dlrow olleh"
var string2 = ".... . .-.. .-.. ---  .-- --- .-. .-.. -..  .---- ..--- ...--"
var string3 = '1 2 3 4 5';

decodeMorse = function(morse){
	var morseCodes = {
		a : ".-",
		b : "-...",
		c : "-.-.",
		d : "-..",
		e : ".",
		f : "..-.",
		g : "--.",
		h : "....",
		i : "..",
		j : ".---",
		k : "-.-",
		l : ".-..",
		m : "--",
		n : "-.",
		o : "---",
		p : ".--.",
		q : "--.-",
		r : ".-.",
		s : "...",
		t : "-",
		u : "..-",
		v : "...-",
		w : ".--",
		x : "-..-",
		y : "-.--",
		z : "--..",
		".-" : "a",
		"-..." : "b",
		"-.-." : "c",
		"-.." : "d",
		"." : "e",
		"..-." : "f",
		"--." : "g",
		"...." : "h",
		".." : "i",
		".---" : "j",
		"-.-" : "k",
		".-.." : "l",
		"--" : "m",
		"-." : "n",
		"---" : "o",
		".--." : "p",
		"--.-" : "q",
		".-." : "r",
		"..." : "s",
		"-" : "t",
		"..-" : "u",
		"...-" : "v",
		".--" : "w",
		"-..-" : "x",
		"-.--" : "y",
		"--.." : "z",
		"-----" : 0,
		".----" : 1,
		"..---" : 2,
		"...--" : 3,
		"....-" : 4,
		"....." : 5,
		"-...." : 6,
		"--..." : 7,
		"---.." : 8,
		"----." : 9

	};
	var morseNumbers = {
		0 : "-----",
		1 : ".----",
		2 : "..---",
		3 : "...--",
		4 : "....-",
		5 : ".....",
		6 : "-....",
		7 : "--...",
		8 : "---..",
		9 : "----.",
	};
	var morseCode = morse.replace(/\s\s+/g, ' & ').split(' ');
	console.log(morseCode);
	for (var i = 0; i < morseCode.length; i ++){
		console.log(morseCode[i]);
		if(morseCode[i] === '.' | morseCode[i] === '-'){
			console.log('Not broken 1');
			for (var prop1 in morseCodes) {
				if(morseCode[i] === prop1) {
					morseCode[i] = morseCodes[prop1];
				}
			}
		}else if (Number.isInteger(morseCode[i])){
			console.log('Not broken 2');
			for (var prop2 in morseNumbers) {
				if(morseCode[i] === prop2){
					morseCode[i] = morseNumbers[prop2];
				}
			}
		}else if ( morseCode[i].charAt(0) == /[a-zA-z]/){
			console.log('Not broken 3');
			var morseCoders = morse.split('');
			for (var x = 0; x < morse.length; x++) {
				for (var stuff in morseCodes) {
					if(morseCoders[x] === morseCodes[stuff]) {
						morseCoders[x] = stuff;
					}
				}
			}
		}else {
			console.log("Epic Fail");
		}
	}

	/*if (morse[0] === '.' | morse[0] === '-'){
		var morseCode = morse.replace(/\s\s+/g, ' & ').split(' ');
		console.log("Decoding: " + morseCode);
		for (var i = 0; i < morseCode.length; i++) {
			for (var prop in morseCodes) {
				if(morseCode[i] === prop) {
					morseCode[i] = morseCodes[prop];
				}
			}
		}
		return morseCode.join('').replace(/&/g,' ');
	}else {
		var morseCoders = morse.split('');
		console.log("Encoding: " + morseCoders);
		for (var x = 0; x < morse.length; x++) {
			for (var stuff in morseCodes) {
				if(morseCoders[x] === morseCodes[stuff]) {
					morseCoders[x] = stuff;
				}
			}
		}
		return morseCoders.join(' ');
	}*/
};

console.log(decodeMorse(string));
console.log(decodeMorse(string2));
console.log(decodeMorse(string3));
