import { findMean, findMedian, findMode } from "../Utils/utils";

const Flavanoids = (data) => {
  const { wineData } = data; //destructure winedata from prop

  const calculateData = (data) => {
    return {
      mean: findMean(data),
      median: findMedian(data),
      mode: findMode(data),
    };
  };
  //Filtered data where class of alcohol is 1 and got different array of flavanoids
  const alcoholOne = wineData
    .filter((el) => el.Alcohol === 1)
    .map((elm) => elm.Flavanoids);

  //Filtered data where class of alcohol is 2 and got different array of flavanoids
  const alcoholTwo = wineData
    .filter((el) => el.Alcohol === 2)
    .map((elm) => elm.Flavanoids);

  //Filtered data where class of alcohol is 3 and got different array of flavanoids
  const alcoholThree = wineData
    .filter((el) => el.Alcohol === 3)
    .map((elm) => {
      let flav = elm.Flavanoids;
      return Number(flav);
    });

  const dataClass1 = calculateData(alcoholOne);
  const dataClass2 = calculateData(alcoholTwo);
  const dataClass3 = calculateData(alcoholThree);

  return (
    <div>
      <h4>Mean, Median and Mode for flavanoids</h4>
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

export default Flavanoids;
