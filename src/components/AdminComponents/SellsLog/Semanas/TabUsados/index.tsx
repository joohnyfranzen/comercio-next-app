import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabUsadosSemana({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Por Semana Vendido",
        data: [
          data.totalPriceBetweenUsed6And5WeeksAgo,
          data.totalPriceBetweenUsed5And4WeeksAgo,
          data.totalPriceBetweenUsed4And3WeeksAgo,
          data.totalPriceBetweenUsed3And2WeeksAgo,
          data.totalPriceBetweenUsed2And1WeeksAgo,
          data.totalPriceBetweenUsed1And0WeeksAgo,
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
          data.totalQuantityBetweenUsed6And5WeeksAgo,
          data.totalQuantityBetweenUsed5And4WeeksAgo,
          data.totalQuantityBetweenUsed4And3WeeksAgo,
          data.totalQuantityBetweenUsed3And2WeeksAgo,
          data.totalQuantityBetweenUsed2And1WeeksAgo,
          data.totalQuantityBetweenUsed1And0WeeksAgo,
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
