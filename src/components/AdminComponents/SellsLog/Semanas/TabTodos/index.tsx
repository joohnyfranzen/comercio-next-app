import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabTodosSemana({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Por Semana Vendido",
        data: [
          data.totalPriceBetween6And5WeeksAgo,
          data.totalPriceBetween5And4WeeksAgo,
          data.totalPriceBetween4And3WeeksAgo,
          data.totalPriceBetween3And2WeeksAgo,
          data.totalPriceBetween2And1WeeksAgo,
          data.totalPriceBetween1And0WeeksAgo,
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
          data.totalQuantityBetween6And5WeeksAgo,
          data.totalQuantityBetween5And4WeeksAgo,
          data.totalQuantityBetween4And3WeeksAgo,
          data.totalQuantityBetween3And2WeeksAgo,
          data.totalQuantityBetween2And1WeeksAgo,
          data.totalQuantityBetween1And0WeeksAgo,
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
