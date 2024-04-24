"use client";
import { dispose, init } from "klinecharts";
import { useEffect, useState } from "react";

interface Chart {
  applyNewData(data: ChartData[]): void;
  dispose(): void;
}

interface ChartData {
  close: number;
  high: number;
  low: number;
  open: number;
  timestamp: number;
  volume: number;
}

export default function CandlestickChartX() {
  const [chart, setChart] = useState<Chart | null>(null); // `any` は具体的な型に置き換える

  useEffect(() => {
    if (chart) {
      dispose("chart");
    }

    const initializedChart = init("chart") as Chart | null; // Type assertion, use with caution
    if (initializedChart) {
      setChart(initializedChart);

      // Initial data setup
      initializedChart.applyNewData([
        {
          close: 4976.16,
          high: 4977.99,
          low: 4970.12,
          open: 4972.89,
          timestamp: 1587660000000,
          volume: 204,
        },
        {
          close: 4977.33,
          high: 4979.94,
          low: 4971.34,
          open: 4973.2,
          timestamp: 1587660060000,
          volume: 194,
        },
        {
          close: 4977.93,
          high: 4977.93,
          low: 4974.2,
          open: 4976.53,
          timestamp: 1587660120000,
          volume: 197,
        },
        {
          close: 4966.77,
          high: 4968.53,
          low: 4962.2,
          open: 4963.88,
          timestamp: 1587660180000,
          volume: 28,
        },
        {
          close: 4961.56,
          high: 4972.61,
          low: 4961.28,
          open: 4961.28,
          timestamp: 1587660240000,
          volume: 184,
        },
        {
          close: 4964.19,
          high: 4964.74,
          low: 4961.42,
          open: 4961.64,
          timestamp: 1587660300000,
          volume: 191,
        },
        {
          close: 4968.93,
          high: 4972.7,
          low: 4964.55,
          open: 4966.96,
          timestamp: 1587660360000,
          volume: 105,
        },
        {
          close: 4979.31,
          high: 4979.61,
          low: 4973.99,
          open: 4977.06,
          timestamp: 1587660420000,
          volume: 35,
        },
        {
          close: 4977.02,
          high: 4981.66,
          low: 4975.14,
          open: 4981.66,
          timestamp: 1587660480000,
          volume: 135,
        },
        {
          close: 4985.09,
          high: 4988.62,
          low: 4980.3,
          open: 4986.72,
          timestamp: 1587660540000,
          volume: 76,
        },
      ]);
    }

    return () => {
      dispose("chart");
    };
  }, []);
  const updateChartData = (): void => {
    // `void` は関数が値を返さないことを示します
    if (chart) {
      chart.applyNewData([
        {
          close: 4960,
          high: 4970,
          low: 4950,
          open: 4965,
          timestamp: new Date().getTime(),
          volume: 150,
        },
      ]);
    }
  };

  return (
    <div>
      <div id="chart" className="chart-container" />
      <button onClick={updateChartData} className="update-button">
        Update Chart
      </button>
    </div>
  );
  // More functions and components...
}
