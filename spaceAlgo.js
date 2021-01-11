const justify = (line, limit) => {
    const words = line.split(' ');
    const wordCharCount = words.join('').length;
    const spaceCount = words.length - 1;
    const extraSpace = limit - (spaceCount + wordCharCount)
    const newSpaceCount = Math.floor((extraSpace + spaceCount) / spaceCount)

    let ret = "";
    let currentCharCounter = 0;
    if(wordCharCount < limit) { 

        
        
        words.forEach((word, index) => {
            ret += word;
            if((ret.length + newSpaceCount) < limit) {
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

