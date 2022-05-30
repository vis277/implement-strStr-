/**
 * if needle is empty return 0;
 * if haystack includes needle return index of needle
 * else return -1
 */

// let haystack = "hello";
// let needle = "ll";
let haystack = "aaaaa"; 
let needle = "bba";

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    let temp=0;
    if(needle==''){
        return 0
    }
    else if(haystack.includes(needle)){
    return haystack.indexOf(needle);
} else{
return -1;
}
   
    
};
console.log(strStr(haystack,needle));