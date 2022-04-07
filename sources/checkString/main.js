var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) return true;
    let res="";
    
    for(let i=0;i<s1.length;i++)
        if(s1[i] !== s2[i]) res += s1[i]+s2[i];        
    
    return res.length === 4 && res[0]===res[3] && res[1] === res[2];
};


let a = [1, 2, 3, 4]

let b = [];

b.push(a.val)

console.log(b)