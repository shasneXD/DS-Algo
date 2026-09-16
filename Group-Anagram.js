/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let MapArr = new Map();
    let key = 0;
    for(str of strs){
        let key = str.split('').sort().join('');
        if(!MapArr.has(key)){
            MapArr.set(key, [])
        }
        MapArr.get(key).push(str)
        }
    console.log([...MapArr.values()])
    }

let strs= ["eat","tea","tan","ate","nat","bat"];
groupAnagrams(strs)