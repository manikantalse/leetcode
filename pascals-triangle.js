/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr = [];
    for(var i=0; i<numRows;i++){
        arr[i] = [1];
        var j=1;
        while(j<i){
           arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
           j++;
        }
        arr[i][i] = 1;
    }
    return arr;
};