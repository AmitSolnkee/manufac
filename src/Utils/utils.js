//function for calculating mean
export const findMean = (flav) => {
  let sum = 0;
  for (let i = 0; i < flav.length; i++) {
    sum = sum + flav[i];
  }
  let result = sum / flav.length;
  return result.toFixed(3);
};

//function for calculating median
export const findMedian = (flav) => {
  //5,3,6,8,9,5,8,
  const sortedFlavValue = flav.sort((a, b) => a - b);

  let midElm = Math.floor(sortedFlavValue.length / 2);

  if (sortedFlavValue.length % 2 === 0) {
    let result = (sortedFlavValue[midElm] + sortedFlavValue[midElm - 1]) / 2;
    return result.toFixed(3);
  } else {
    return sortedFlavValue[midElm].toFixed(3);
  }
};

//function for calculating mode
export const findMode = (flav) => {
  const flavonoidObj = {};
  flav.forEach((num) => {
    flavonoidObj[num] = (flavonoidObj[num] || 0) + 1;
  });

  let mode = [];
  let maxFrequency = 0;
  for (const num in flavonoidObj) {
    if (flavonoidObj[num] > maxFrequency) {
      mode = [Number(num)];
      maxFrequency = flavonoidObj[num];
    } else if (flavonoidObj[num] === maxFrequency) {
      mode.push( "   |   ",Number(num));
    }
  }

  return mode;
};
