const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((numbers = 0, add) => {
    return numbers + add;
});

console.log(totalBatteries);











// const totalSum = 0;
// const totalBatteries = batteryBatches.reduce(
// (number, sum) => number + sum, totalBatteries,
// );
// console.log(totalBatteries);