import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabTodosMes({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Por Mês Vendido",
        data: [
          data.totalPriceBetween6And5MonthsAgo,
          data.totalPriceBetween5And4MonthsAgo,
          data.totalPriceBetween4And3MonthsAgo,
          data.totalPriceBetween3And2MonthsAgo,
          data.totalPriceBetween2And1MonthsAgo,
          data.totalPriceBetween1And0MonthsAgo,
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
          data.totalQuantityBetween6And5MonthsAgo,
          data.totalQuantityBetween5And4MonthsAgo,
          data.totalQuantityBetween4And3MonthsAgo,
          data.totalQuantityBetween3And2MonthsAgo,
          data.totalQuantityBetween2And1MonthsAgo,
          data.totalQuantityBetween1And0MonthsAgo,
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
