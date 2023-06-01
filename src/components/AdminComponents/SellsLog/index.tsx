import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const perWeekValorOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Vendas no ultimo mês",
    },
  },
};
export const perMonthValorOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Vendas nos ultimos meses",
    },
  },
};

export default function SellsLog() {
  const [sevenData, setSevenData] = useState({
    totalQuantity: 0,
    totalPrice: 0,
  });
  const [fourteenData, setFourteenData] = useState({
    totalQuantity: 0,
    totalPrice: 0,
  });
  const [twentyOneData, setTwentyOneData] = useState({
    totalQuantity: 0,
    totalPrice: 0,
  });
  const [twentyEightData, setTwentyEightData] = useState({
    totalQuantity: 0,
    totalPrice: 0,
  });

  const [lastMoth, setLastMonth] = useState({
    totalQuantity: 0,
    totalPrice: 0,
  });
  const [beforeLastMonth, setBeforeLastMonth] = useState({
    totalQuantity: 0,
    totalPrice: 0,
  });
  const [lastThreetoSixMonths, setLastThreetoSixMonths] = useState({
    totalQuantity: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    const getSevenData = async () => {
      axios.get("/api/log/seven").then((response) => {
        setSevenData(response.data);
      });
    };
    getSevenData();
    const getFourteenData = async () => {
      axios.get("/api/log/fourteen").then((response) => {
        setFourteenData(response.data);
      });
    };
    getFourteenData();
    const getTwentyOneData = async () => {
      axios.get("/api/log/twentyOne").then((response) => {
        setTwentyOneData(response.data);
      });
    };
    getTwentyOneData();
    const getTwentyEightData = async () => {
      axios.get("/api/log/twentyEight").then((response) => {
        setTwentyEightData(response.data);
      });
    };
    getTwentyEightData();

    const getLastMonth = async () => {
      axios.get("/api/log/lastMonth").then((response) => {
        setLastMonth(response.data);
      });
    };

    getLastMonth();
    const getBeforeLastMonth = async () => {
      axios.get("/api/log/beforeLastMonth").then((response) => {
        setBeforeLastMonth(response.data);
      });
    };
    getBeforeLastMonth();
    const getLastThreetoSixMonths = async () => {
      axios.get("/api/log/lastsix-threemonths").then((response) => {
        setLastThreetoSixMonths(response.data);
      });
    };
    getLastThreetoSixMonths();
  }, []);

  const labels = [
    "Essa Semana",
    "Semana Passada",
    "Duas Semanas atrás",
    "Três Semanas atrás",
    "Total dos ultimos 28 dias",
  ];
  const month = [
    "Este Mês",
    "Antes do Ultimo Mês",
    "Dois Meses atrás",
    "Três de três meses atrás",
  ];
  const perWeekValorData = {
    labels,
    datasets: [
      {
        label: "Valor Vendido",
        data: [
          sevenData.totalPrice,
          fourteenData.totalPrice,
          twentyOneData.totalPrice,
          twentyEightData.totalPrice,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const perWeekQuantityData = {
    labels,
    datasets: [
      {
        label: "Quantidade Vendida",
        data: [
          sevenData.totalQuantity,
          fourteenData.totalQuantity,
          twentyOneData.totalQuantity,
          twentyEightData.totalQuantity,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const perMonthValorData = {
    month,
    datasets: [
      {
        label: "Valor Vendido",
        data: [
          lastMoth.totalPrice,
          beforeLastMonth.totalPrice,
          lastThreetoSixMonths.totalPrice,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const perMonthQuantityData = {
    month,
    datasets: [
      {
        label: "Quantidade Vendida",
        data: [
          lastMoth.totalQuantity,
          beforeLastMonth.totalQuantity,
          lastThreetoSixMonths.totalQuantity,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Tabs isFitted>
        <TabList mb="1em">
          <Tab>Ultimo mês</Tab>
          <Tab>Ultimos 6 meses</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Por Valor</Tab>
                <Tab>Por Produtos</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Bar options={perWeekValorOptions} data={perWeekValorData} />;
                </TabPanel>
                <TabPanel>
                  <Bar
                    options={perWeekValorOptions}
                    data={perWeekQuantityData}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Por Valor</Tab>
                <Tab>Por Produtos</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Bar
                    options={perMonthValorOptions}
                    data={perMonthValorData}
                  />
                </TabPanel>
                <TabPanel>
                  <Bar
                    options={perMonthValorOptions}
                    data={perMonthQuantityData}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
