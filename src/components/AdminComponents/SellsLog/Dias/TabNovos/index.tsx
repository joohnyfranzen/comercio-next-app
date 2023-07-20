import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabNovosDia({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Por Dia Vendido",
        data: [
          data.totalPriceBetweenNew6And5DaysAgo,
          data.totalPriceBetweenNew5And4DaysAgo,
          data.totalPriceBetweenNew4And3DaysAgo,
          data.totalPriceBetweenNew3And2DaysAgo,
          data.totalPriceBetweenNew2And1DaysAgo,
          data.totalPriceBetweenNew1And0DaysAgo,
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
          data.totalQuantityBetweenNew6And5DaysAgo,
          data.totalQuantityBetweenNew5And4DaysAgo,
          data.totalQuantityBetweenNew4And3DaysAgo,
          data.totalQuantityBetweenNew3And2DaysAgo,
          data.totalQuantityBetweenNew2And1DaysAgo,
          data.totalQuantityBetweenNew1And0DaysAgo,
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
