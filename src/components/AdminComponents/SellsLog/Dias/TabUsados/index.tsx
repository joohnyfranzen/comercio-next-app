import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabUsadosDia({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Por Dia Vendido",
        data: [
          data.totalPriceBetweenUsed6And5DaysAgo,
          data.totalPriceBetweenUsed5And4DaysAgo,
          data.totalPriceBetweenUsed4And3DaysAgo,
          data.totalPriceBetweenUsed3And2DaysAgo,
          data.totalPriceBetweenUsed2And1DaysAgo,
          data.totalPriceBetweenUsed1And0DaysAgo,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const totalQuantitySold = {
    labels,
    datasets: [
      {
        label: "Quantidade Por Semana Vendida",
        data: [
          data.totalQuantityBetweenUsed6And5DaysAgo,
          data.totalQuantityBetweenUsed5And4DaysAgo,
          data.totalQuantityBetweenUsed4And3DaysAgo,
          data.totalQuantityBetweenUsed3And2DaysAgo,
          data.totalQuantityBetweenUsed2And1DaysAgo,
          data.totalQuantityBetweenUsed1And0DaysAgo,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Por Valor</Tab>
          <Tab>Por Quantidade</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Bar options={todosOptions} data={totalSold} />;
          </TabPanel>
          <TabPanel>
            <Bar options={todosOptions} data={totalQuantitySold} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      ;
    </>
  );
}
