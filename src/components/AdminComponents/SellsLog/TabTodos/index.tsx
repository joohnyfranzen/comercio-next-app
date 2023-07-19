import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabTodos({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Total Vendido",
        data: [
          data.totalPrice,
          data.totalPriceSixMonthsAgo,
          data.totalPriceThreeMonthsAgo,
          data.totalPriceTwoMonthsAgo,
          data.totalPriceOneMonthAgo,
          data.totalPriceThreeWeeksAgo,
          data.totalPriceTwoWeeksAgo,
          data.totalPriceOneWeekAgo,
          data.totalPriceThreeDaysAgo,
          data.totalPriceTwoDaysAgo,
          data.totalPriceOneDayAgo,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const totalQuantitySold = {
    labels,
    datasets: [
      {
        label: "Quantidade Total Vendida",
        data: [
          data.totalQuantity,
          data.totalQuantitySixMonthsAgo,
          data.totalQuantityThreeMonthsAgo,
          data.totalQuantityTwoMonthsAgo,
          data.totalQuantityOneMonthAgo,
          data.totalQuantityThreeWeeksAgo,
          data.totalQuantityTwoWeeksAgo,
          data.totalQuantityOneWeekAgo,
          data.totalQuantityThreeDaysAgo,
          data.totalQuantityTwoDaysAgo,
          data.totalQuantityOneDayAgo,
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
