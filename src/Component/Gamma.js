import React from "react";

import { findMean, findMode, findMedian } from "../Utils/utils";

const Gamma = (data) => {
  const { wineData } = data; //Destructured winedata from prop data

  const calculateData = (data) => {
    return {
      mean: findMean(data),
      median: findMedian(data),
      mode: findMode(data),
    };
  };

  //Filtered data where class of alcohol is 1 and calculated gamma in map and returned gamma values for all
  const class1 = wineData
    .filter((el) => el.Alcohol === 1)
    .map((el) => {
      let gamma = (el.Ash * el.Hue) / el.Magnesium;

      return Math.round(gamma * 100) / 1000;
    });

  //Filtered data where class of alcohol is 2 and calculated gamma in map and returned gamma values for all
  const class2 = wineData
    .filter((el) => el.Alcohol === 2)
    .map((el) => {
      let gamma = (el.Ash * el.Hue) / el.Magnesium;
      return Math.round(gamma * 100) / 1000;
    });

  //Filtered data where class of alcohol is 3 and calculated gamma in map and returned gamma values for all
  const class3 = wineData
    .filter((el) => el.Alcohol === 3)
    .map((el) => {
      let gamma = (el.Ash * el.Hue) / el.Magnesium;

      return Math.round(gamma * 100) / 1000;
    });

  const dataClass1 = calculateData(class1);
  const dataClass2 = calculateData(class2);
  const dataClass3 = calculateData(class3);

  return (
    <div>
      <h4>Mean, Median and Mode for gamma</h4>
      <table>
        <thead>
          <tr>
            <th>Measures</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
            <td>{dataClass1.mean}</td>
            <td>{dataClass2.mean}</td>
            <td>{dataClass3.mean}</td>
          </tr>
          <tr>
            <td>Median</td>
            <td>{dataClass1.median}</td>
            <td>{dataClass2.median}</td>
            <td>{dataClass3.median}</td>
          </tr>
          <tr>
            <td>Mode</td>
            <td>{dataClass1.mode}</td>
            <td>{dataClass2.mode}</td>
            <td>{dataClass3.mode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Gamma;
