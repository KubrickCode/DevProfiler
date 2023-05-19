import { FC, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";

ChartJS.register(CategoryScale);

interface OwnProps {
  values: number[];
  titleList: string[];
}

const UserChart: FC<OwnProps> = ({ values, titleList }) => {
  const chartConfig = useMemo(() => {
    const labels = titleList.map((title) =>
      title.substring(0, title.length - 5)
    );
    const barData = Array(5)
      .fill(0)
      .map(
        (_, i) =>
          (values.slice(i * 5, i * 5 + 5).reduce((acc, curr) => acc + curr, 0) /
            20) *
          100
      );

    const colors = [
      "rgb(54, 162, 235)",
      "rgb(255, 99, 132)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(255, 159, 64)",
    ];

    const datasets = [
      {
        label: "data",
        data: barData,
        backgroundColor: colors,
      },
    ];

    return {
      labels,
      datasets,
    };
  }, [values, titleList]);

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "개발 역량 평가 그래프",
      },
    },
  };

  return (
    <>
      <Bar data={chartConfig} options={options} />
    </>
  );
};

export default UserChart;
