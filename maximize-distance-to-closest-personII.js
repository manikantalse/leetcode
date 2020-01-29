/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    var dist = 0, countZ = 0, index = 0; 
    for(var i=0; i<seats.length; i++){
        if(seats[i] == 0){
            ++countZ;
            if(dist == 0){
                index = i;
            }
            if(countZ > dist){
                dist++;
                index = i;
            }
        } else {
            if(countZ == dist){
                index = Math.floor((i+countZ-2)/2);
            }
            countZ = 0;
        }
    }
    return index;
};