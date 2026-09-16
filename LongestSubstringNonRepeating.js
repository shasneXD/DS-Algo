/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    let left=0;
    let maxLength=0
    let lastSeen = new Map();

    for(let right=0;right<str.length;right++){
        let ch = str[right];
        if(lastSeen.has(ch)){
            left = Math.max(left, lastSeen.get(ch)+1)
        }
        lastSeen.set(ch, right)
        maxLength = Math.max(maxLength, right-left+1)
        
    }
    return maxLength

}

console.log(lengthOfLongestSubstring('SnehaSnehaSneha'))