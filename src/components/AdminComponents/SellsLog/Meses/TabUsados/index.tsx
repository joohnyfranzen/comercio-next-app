import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabUsadosMes({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Por Mês Vendido",
        data: [
          data.totalPriceBetweenUsed6And5MonthsAgo,
          data.totalPriceBetweenUsed5And4MonthsAgo,
          data.totalPriceBetweenUsed4And3MonthsAgo,
          data.totalPriceBetweenUsed3And2MonthsAgo,
          data.totalPriceBetweenUsed2And1MonthsAgo,
          data.totalPriceBetweenUsed1And0MonthsAgo,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const totalQuantitySold = {
    labels,
    datasets: [
      {
        label: "Quantidade Por Mês Vendida",
        data: [
          data.totalQuantityBetweenUsed6And5MonthsAgo,
          data.totalQuantityBetweenUsed5And4MonthsAgo,
          data.totalQuantityBetweenUsed4And3MonthsAgo,
          data.totalQuantityBetweenUsed3And2MonthsAgo,
          data.totalQuantityBetweenUsed2And1MonthsAgo,
          data.totalQuantityBetweenUsed1And0MonthsAgo,
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
