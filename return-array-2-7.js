const arrInput = [1, 2, 3, 1, 2, 7, 7, 1, 1, 4, 5];


function findElementIsLessFamous(arr) {
    arrOutput = [];
    let countElenmentAppear = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    let arrKeys = Object.keys(countElenmentAppear)
    let arrVal = Object.values(countElenmentAppear)
    let min = arrVal.reduce((pre, number) => pre > number ? pre : number);
    let max = arrVal.reduce((pre, number) => pre < number ? pre : number);
    for (let i = 0; i < arrVal.length; i++) {
        if (arrVal[i] !== min && arrVal[i] !== max) {
            arrOutput.push(parseInt(arrKeys[i]))
        }
    }
    return arrOutput;
}

findElementIsLessFamous(arrInput)