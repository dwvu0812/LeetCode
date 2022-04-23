var lengthOfLastWord = function(s) {
    let newS = s.trim().split(' ');
    console.log(newS[newS.length - 1]);
    return newS[newS.length - 1].length;
};

let s = "luffy is still joyboy";

console.log(lengthOfLastWord(s));