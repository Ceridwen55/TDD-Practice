

export function capitalize (words)
{
    if (words.charAt(0) != words.charAt(0).toUpperCase())
    {
        console.log(words.charAt(0).toUpperCase());
    }
}

export function reverseString (words)
{
    words.split("").reverse().join("");
}

export function calculator (a,b)
{
    const add = a + b;
    const subtract = a-b;
    const divide = a/b;
    const multiply = a*b;

    return {add,subtract,divide,multiply};
}

export function caesarCipher (words,cipher)
{   
    const specialChar = ["?","!",",","."];
    // words enter and splitted
     const prepare = words.split("");
     
     const result = prepare.map(word =>
     {
        if(word === word.toUpperCase() && /[A-Z]/.test(word))
        {
            return String.fromCharCode(((word.charCodeAt(0)- 65 + cipher) % 26)+65)
        }

        if (word === word.toLowerCase() && /[a-z]/.test(word)) 
        {
            return String.fromCharCode(((word.charCodeAt(0) - 97 + cipher) % 26) + 97);
        }

        for(let i = 0; i < specialChar.length; i++)
        {
            if (word === specialChar[i])
            {
                return word;
            }
        }

        return word;   
       
     }
     )
     return result.join("");
    
}

export function analyzeArray (array)
{
    // Array in
    // create an object for ave, min, max, length
    let sum = 0;

    for(let i = 0; i < array.length; i++)
    {
      sum = sum + array[i];
    }

    const average = sum / array.length;

    const max = Math.max(...array);

    const min = Math.min(...array);

    const length = array.length;

    return {average, min, max, length};

}