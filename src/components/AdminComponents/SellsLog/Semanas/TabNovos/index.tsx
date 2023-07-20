import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabNovosSemana({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Por Semana Vendido",
        data: [
          data.totalPriceBetweenNew6And5WeeksAgo,
          data.totalPriceBetweenNew5And4WeeksAgo,
          data.totalPriceBetweenNew4And3WeeksAgo,
          data.totalPriceBetweenNew3And2WeeksAgo,
          data.totalPriceBetweenNew2And1WeeksAgo,
          data.totalPriceBetweenNew1And0WeeksAgo,
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
          data.totalQuantityBetweenNew6And5WeeksAgo,
          data.totalQuantityBetweenNew5And4WeeksAgo,
          data.totalQuantityBetweenNew4And3WeeksAgo,
          data.totalQuantityBetweenNew3And2WeeksAgo,
          data.totalQuantityBetweenNew2And1WeeksAgo,
          data.totalQuantityBetweenNew1And0WeeksAgo,
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
