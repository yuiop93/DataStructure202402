var row = 9, col = 7;  // 設定二維陣列的大小：9 行 7 列
var dynaAry2d = [];    // 建立一個空的二維陣列

for (var _row = 0; _row < row; _row++) {  // 迴圈遍歷每一行
    dynaAry2d.push([]);                   // 對於每一行，新增一個空陣列
    for (var _col = 0; _col < col; _col++) { // 迴圈遍歷每一列
        dynaAry2d[_row].push(`(${_row},${_col})`);  // 將座標值推入當前行
    }
}

console.log(dynaAry2d);  // 輸出結果