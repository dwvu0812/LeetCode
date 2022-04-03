var nearestValidPoint = function(x, y, points) {
    let index = -1;
    let minDistance = Infinity;
    
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            let distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            if (distance < minDistance) {
                minDistance = distance;
                index = i;
                
            }
           
            }
        }
    return index;
}   
