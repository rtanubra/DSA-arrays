/**
 * Write an algorithm that deletes given characters from a string. 
 * For example, given a string of "Battle of the Vowels: Hawaii vs.
 * Grozny" and the characters to be removed are "aeiou", 
 * the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny".
 *  Do not use Javascript's filter, split, or join methods.
 */
function checkIndex(str,char){
    //checks if a character is in a string.
    for (i=0;i<str.length;i++){
        if (str[i]===char){
            return true
        }
    }
    return false
}

function removeCharacters(myStr,myChars){
    var newStr = ""
    var char 
    for (c in myStr){
        char = checkIndex(myChars,myStr[c])? "" : myStr[c]
        newStr = newStr + char
    }
    return newStr
}

function main(){
    const input1_ = "Battle of the Vowels: Hawaii vs. Grozny"
    const input1__ = "aeiou"
    const output1 = "Bttl f th Vwls: Hw vs. Grzny"
    console.log(`given ${input1_}and ${input1__} should return ${output1}`)
    const result = output1=== removeCharacters(input1_,input1__)? 'Pass':'Fail'
    console.log(result)
}

main()