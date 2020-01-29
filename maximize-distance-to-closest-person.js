/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    var dist = 0, countZ = 0, cut = 0; 
    for(var i=0; i<seats.length; i++){
        if(seats[i] == 0){
            ++countZ;
            if(countZ > dist){
                dist++;
            }
            if(countZ == dist){
                cut = 0;
            }
        } else {
            if(dist > 1 && countZ == dist){
                if(seats[i] == 1 && seats[i-dist-1] == 1 && i-dist >=0){
                    cut = 1;
                }
            }
            countZ = 0;
        }
    }
    if(cut){
        return Math.ceil(dist/2);
    } else {
        return dist;
    }
};