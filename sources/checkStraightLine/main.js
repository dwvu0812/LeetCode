var checkStraightLine = function(c) {
    if (c.length <= 2) {
        return true;
    }
    
    else {

        let checkZero = c.every(d => {
            return d[0] === 0;
        });

        let checkX = c.every(d => {
            let temp = c[0][0];
            return d[0] === temp;
        });

        if (checkX || checkZero) { 
            return true
        }
        else {
            let a = (c[0][1] - c[1][1])/(c[0][0] - c[1][0]);
            let b = (c[0][0]*c[1][1] - c[1][0]*c[0][1])/(c[0][0] - c[1][0]);
            let result = c.every(d => {
                return (d[0]*a + b) === d[1];
            });

            return result;
        }
    }
}

let c = [[2,4],[2,5],[2,8]];

console.log(checkStraightLine(c));