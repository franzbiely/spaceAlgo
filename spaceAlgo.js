const justify = (line, limit) => {
    // As a norm, sentences have a single space between each word. So the idea here is to decide how many spaces we need 
    // to replace per each current spaces.
    // We get this by computing the extra space we have with the given details.
    
    const words = line.split(' ');
    const wordCharCount = words.join('').length;
    const spaceCount = words.length - 1;

    // Extra space is the space we need to add on the sentence. 
    // The next step for this is to spread this space between words.
    const extraSpace = limit - (spaceCount + wordCharCount)
    const newSpaceCount = Math.floor((extraSpace + spaceCount) / spaceCount)

    let ret = "";
    if(wordCharCount < limit) { 

        // We add the space in each word by looping through the words. We use forEach here instead of map since we are not returning anything.
        // we mutate the string 'ret' inside this loop.
        words.forEach((word, index) => {
            ret += word;

            // just add the space if it's still less than the limit.
            if((ret.length + newSpaceCount) < limit) {
                // concatinating N spaces between word.
                for(let x = 0; x < newSpaceCount; x++) {
                    ret += " ";
                }
            }
        })
    }
    else {
        ret = "Sorry, minimum limit for this STRING should be " + (wordCharCount + 1) + ".";
    }
    document.getElementById('result').innerHTML = 
        "Line : " + line + '\n' +
        "Limit : " + limit + '\n' +
        "Result : " + ret;
} 