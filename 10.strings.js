// let text = "The character \b is called \f backslash."
// let x = new String("john")
// console.log(text)
// console.log(x)

// let x = new String("John");
// let y = new String("John");
// console.log(x==y) //false

// console.log(x===y) //flase

//comparing two JavaScript objects always returns false.



//-----String length

// let text = 'ABCDEFGHIJKL'
// console.log(text.length)


//String slice()
// slice(start, end)
// substring(start, end)
// substr(start, length)

// let text = 'ABCDEFGHIJKL'
// console.log(text.slice(3,6))
// console.log(text.slice(7))
// console.log(text.slice(-2))
// console.log(text.slice(-5,-2))






//substr() 
//substr() is similar to slice().
// let text = 'ABCDEFGHIJKL'
// console.log(text.substring(1,3))



//replace()
// let text = 'ABCDEFGBHIJKLB'
// console.log(text.replace('B','ZX'))





//replaceAll()
// let text = 'ABCDEFGHIJKLB'
// console.log(text.replaceAll('B','YY'))




//toUpperCase()
// let text1 = "Hello World!"
// console.log(text1.toUpperCase())


//toLowerCase()
// let text1 = "HellO WoRld!"
// console.log(text1.toLowerCase())




//concat
// let text1 = "Hello";
// let text2 = "World";

// console.log(text1.concat(" ",text2))



//trim()
// let text1 = "      Hello World!      ";
// console.log(text1.trim())



//trimEnd()
// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2)



//padStart()

// let text = "5";
// let padded = text.padStart(5,"x");
// console.log(padded)
// let text = 123
// console.log(text.toString().padStart(10,'y'))




//padEnd()
// let text = "5";
// let padded = text.padEnd(4,"x");
// console.log(padded)



//charAt()

// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char)




//Property Access
// let text = "HELLO WORLD"
// console.log(text[1])


//String split()
let text = "HELLO WORLD"
console.log(text.split(" "))
console.log(text.split(","))
console.log(text.split("|"))