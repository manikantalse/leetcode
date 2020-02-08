/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var f1 = cost[0], f2 = cost[1];
    for(var i=2; i<cost.length; i++){
        var curr = cost[i] + Math.min(f1,f2)
        f1 = f2;
        f2 = curr;
    }
    return Math.min(f1,f2);
};

