import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../../options";
import { labels } from "../../labels";

export default function TabUsados({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Total Vendido De Usados",
        data: [
          data.totalUsedPrice,
          data.totalUsedPriceSixMonthsAgo,
          data.totalUsedPriceThreeMonthsAgo,
          data.totalUsedPriceTwoMonthsAgo,
          data.totalUsedPriceOneMonthAgo,
          data.totalUsedPriceThreeWeeksAgo,
          data.totalUsedPriceTwoWeeksAgo,
          data.totalUsedPriceOneWeekAgo,
          data.totalUsedPriceThreeDaysAgo,
          data.totalUsedPriceTwoDaysAgo,
          data.totalUsedPriceOneDayAgo,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const totalQuantitySold = {
    labels,
    datasets: [
      {
        label: "Quantidade Total Vendida De Usados",
        data: [
          data.totalUsedQuantity,
          data.totalUsedQuantitySixMonthsAgo,
          data.totalUsedQuantityThreeMonthsAgo,
          data.totalUsedQuantityTwoMonthsAgo,
          data.totalUsedQuantityOneMonthAgo,
          data.totalUsedQuantityThreeWeeksAgo,
          data.totalUsedQuantityTwoWeeksAgo,
          data.totalUsedQuantityOneWeekAgo,
          data.totalUsedQuantityThreeDaysAgo,
          data.totalUsedQuantityTwoDaysAgo,
          data.totalUsedQuantityOneDayAgo,
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
