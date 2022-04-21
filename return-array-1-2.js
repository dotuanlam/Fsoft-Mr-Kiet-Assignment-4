const arrInputB = [1, 2, 3, 1, 2, 1, 1, 2, 2];
const arrOutput = [];

function findElementIsFamous(arr) {
    let countElenmentAppear = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
    let arrKeys = (Object.keys(countElenmentAppear));
    let arrVal = (Object.values(countElenmentAppear));
    let values = Object.values(countElenmentAppear).reduce((prev, number) => prev > number ? prev : number)

    for (let i = 0; i < arrVal.length; i++) {
        if (values === arrVal[i]) {
            arrOutput.push(parseInt(arrKeys[i]))
        }
    }
    console.log(arrOutput);
}


findElementIsFamous(arrInputB)