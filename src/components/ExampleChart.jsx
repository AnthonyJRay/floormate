import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "This is a dataset",
      backgroundColor: "rbg(255, 99, 132)",
      borderColor: "rbg(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

export default function ExampleChart() {
  return (
    <div>
      <Line data={data} />
    </div>
  );
}
