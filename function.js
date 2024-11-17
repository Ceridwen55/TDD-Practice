

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
    // per 'char' move forward based on 'cipher'
}