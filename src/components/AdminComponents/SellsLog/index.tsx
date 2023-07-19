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
import TabTodos from "./TabTodos";
import { Log } from "@/@types/Log";
import TabNovos from "./TabNovos";
import TabUsados from "./TabUsados";
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
  const [data, setData] = useState<Log>({
    totalQuantity: 0,
    totalPrice: 0,
    totalNewQuantity: 0,
    totalNewPrice: 0,
    totalUsedQuantity: 0,
    totalUsedPrice: 0,
  });

  useEffect(() => {
    const getSevenData = async () => {
      axios.get("/api/log").then((response) => {
        setData(response.data);
      });
    };
    getSevenData();
  }, []);

  const month = [
    "Este Mês",
    "Antes do Ultimo Mês",
    "Dois Meses atrás",
    "Três de três meses atrás",
  ];

  const perMonthValorData = {
    month,
    datasets: [
      {
        label: "Valor Vendido",
        data: [data.totalPrice],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const perMonthQuantityData = {
    month,
    datasets: [
      {
        label: "Quantidade Vendida",
        data: [data.totalQuantity],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Tabs isFitted>
        <TabList mb="1em">
          <Tab>Todos</Tab>
          <Tab>Novos</Tab>
          <Tab>Usados</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TabTodos data={data} />
          </TabPanel>
          <TabPanel>
            <TabNovos data={data} />
          </TabPanel>
          <TabPanel>
            <TabUsados data={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
