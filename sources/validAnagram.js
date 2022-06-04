var isAnagram = function(s, t) {
    const arrayS = s.split('').sort();
    const arrayT = t.split('').sort();

    if (arrayS.length !== arrayT.length) return false;
    for (let i = 0; i < arrayS.length; i++) {
        if (!arrayT.includes(arrayS[i])) {
            return false;
        } else {
            arrayT.splice(arrayT.indexOf(arrayS[i]), 1);
        }
    }
    return true;
};

const s = "anagram", t = "nagaram";

console.log(isAnagram(s, t))  

// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// };