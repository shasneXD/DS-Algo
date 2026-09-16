//Map Keywords to learn: 
// set(key,value) {used to set key value pair}
// has { used when checking if value exists }
// of { used with iterations }

/*
| Operation               | Code                            |Cost                                    |
| ----------------------- | ------------------------------- | -------------------------------------: |
| Add                     | `map.set(key, value)`           |~`O(1)`                                 |
| Update                  | `map.set(key, newValue)`        |~`O(1)`                                 |
| Get value by key        | `map.get(key)`                  |~`O(1)`                                 |
| Check key               | `map.has(key)`                  |~`O(1)`                                 |
| Delete key              | `map.delete(key)`               |~`O(1)`                                 |
| Number of entries       | `map.size`                      |`O(1)`                                  |
| Clear entire Map        | `map.clear()`                   | implementation-dependent; think `O(n)` |
| Loop all entries        | `for (const [k,v] of map)`      |`O(n)`                                  |
| Loop keys               | `for (const k of map.keys())`   |`O(n)`                                  |
| Loop values             | `for (const v of map.values())` |`O(n)`                                  |
| Convert to array        | `[...map]`                      |`O(n)`                                  |
| Find value exists       | `[...map.values()].includes(x)` |`O(n)`                                  |
| Find key from value     | loop `[key,value]`              |`O(n)`                                  |
| Find all keys for value | loop entire Map                 |`O(n)`                                  |

*/


function mapPractice() {
    const MyMap = new Map()

    //SET in Maps
    for(let i = 0; i < 10; i++){
        MyMap.set(i,i+1)
    }
    
    // OF in Maps
    for(const value of MyMap.values()){
        
    }

    console.log('Keys')
    // printing in one line
    console.log(...MyMap.keys())
   // GET in Maps
   console.log('Value of key 5 is ' + MyMap.get(5))

   //SET in Maps
   MyMap.set(5,100)
   console.log('New value of key 5 is '+MyMap.get(5))

   //HAS in Maps {used for checking keys not values}
   console.log('My Map has key 5 is ' + MyMap.has(5) +' and value of MyMap key 5 is '+MyMap.get(5))

   //How to search for VALUE in MAPS
   console.log('Check if value 5 exists in MyMaps and at what location')
   console.log([...MyMap.values()].includes(5)+' and at '+ MyMap.get(5)) //time taken O(n)

   MyMap.set(5,1)

  //COMPLEMENT LOOKUP 
  
  nums=[0,7,8,4,5];
  target = 8
  console.log(`Find if ${target} can be created from the nums array ${(nums)}`)
  const seen = new Map()
  for(let i = 0;i<nums.length;i++){
    const needed = target - nums[i];
    if(seen.has(needed)){ console.log( [seen.get(needed),i]) }
    seen.set(nums[i],i)
  }

  // LAST SEEN CHARACTER { used for calculating longest string without repeating charatcters}

  const str = 'This is a string, calculate the non repeating section';

  let left = 0;
  let length =0;
  const lastSeen = new Map();
  for(let right = 0;right <str.length;right++){
    const ch = str[right];

    if(lastSeen.has(ch)){
        left = Math.max(left, lastSeen.get(ch)+1)
    }

    lastSeen.set(ch,right);
    length = Math.max(length, right -left +1)
  }

  console.log(`length of non repeating section is ${length}`)


}

// `` is called template literal
// ... is called spread syntax and is used to pack/unpack or spread/collect elements 

mapPractice();