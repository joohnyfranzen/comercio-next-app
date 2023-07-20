import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabNovosMes({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Por Mês Vendido",
        data: [
          data.totalPriceBetweenNew6And5MonthsAgo,
          data.totalPriceBetweenNew5And4MonthsAgo,
          data.totalPriceBetweenNew4And3MonthsAgo,
          data.totalPriceBetweenNew3And2MonthsAgo,
          data.totalPriceBetweenNew2And1MonthsAgo,
          data.totalPriceBetweenNew1And0MonthsAgo,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  console.log(data.totalPriceBetweenNew2And1MonthsAgo);
  const totalQuantitySold = {
    labels,
    datasets: [
      {
        label: "Quantidade Por Mês Vendida",
        data: [
          data.totalQuantityBetweenNew6And5MonthsAgo,
          data.totalQuantityBetweenNew5And4MonthsAgo,
          data.totalQuantityBetweenNew4And3MonthsAgo,
          data.totalQuantityBetweenNew3And2MonthsAgo,
          data.totalQuantityBetweenNew2And1MonthsAgo,
          data.totalQuantityBetweenNew1And0MonthsAgo,
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
