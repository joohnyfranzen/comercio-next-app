import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabTodosDia({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Por Dia Vendido",
        data: [
          data.totalPriceBetween6And5DaysAgo,
          data.totalPriceBetween5And4DaysAgo,
          data.totalPriceBetween4And3DaysAgo,
          data.totalPriceBetween3And2DaysAgo,
          data.totalPriceBetween2And1DaysAgo,
          data.totalPriceBetween1And0DaysAgo,
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
          data.totalQuantityBetween6And5DaysAgo,
          data.totalQuantityBetween5And4DaysAgo,
          data.totalQuantityBetween4And3DaysAgo,
          data.totalQuantityBetween3And2DaysAgo,
          data.totalQuantityBetween2And1DaysAgo,
          data.totalQuantityBetween1And0DaysAgo,
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
