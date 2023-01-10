const temperatureDayOne = [21, 34, 54, 32, "error", 23, 121];
const temperatureDayTwo = [712, 520, 90, 333, "error", 321, "error", 713];
const temperatureDayThree = [65, 2, 233, 1, 987, 23, 666, 21, 32, 66, 69];

const calcTempForOneDay = function (tempOneDay) {
  let max = tempOneDay[0];
  let min = tempOneDay[0];
  for (let i = 0; i < tempOneDay.length; i++) {
    if (typeof tempOneDay[i] !== "number") continue;
    max = tempOneDay[i] > max ? tempOneDay[i] : max;
    min = tempOneDay[i] < min ? tempOneDay[i] : min;
  }
  console.log(max, min);
  return (amplitudeOneDay = max - min);
};

const calcTempForTwoDays = function (tempOneDay, tempTwoDay) {
  let tempsOfDays = tempOneDay.concat(tempTwoDay);
  let max = tempsOfDays[0];
  let min = tempsOfDays[0];
  for (let i = 0; i < tempsOfDays.length; i++) {
    if (typeof tempsOfDays[i] !== "number") continue;
    max = tempsOfDays[i] > max ? tempsOfDays[i] : max;
    min = tempsOfDays[i] < min ? tempsOfDays[i] : min;
  }
  console.log(max, min);
  return (amplitudeTwoDays = max - min);
};

console.log(calcTempForOneDay(temperatureDayTwo));
console.log(calcTempForTwoDays(temperatureDayOne, temperatureDayTwo));

//made on 2023/01/10
//thedrew94
