import { Log } from "@/@types/Log";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { todosOptions } from "../options";
import { labels } from "../labels";

export default function TabNovos({ data }: { data: Log }) {
  const totalSold = {
    labels,
    datasets: [
      {
        label: "Valor Total Vendido De Novos",
        data: [
          data.totalNewPrice,
          data.totalNewPriceSixMonthsAgo,
          data.totalNewPriceThreeMonthsAgo,
          data.totalNewPriceTwoMonthsAgo,
          data.totalNewPriceOneMonthAgo,
          data.totalNewPriceThreeWeeksAgo,
          data.totalNewPriceTwoWeeksAgo,
          data.totalNewPriceOneWeekAgo,
          data.totalNewPriceThreeDaysAgo,
          data.totalNewPriceTwoDaysAgo,
          data.totalNewPriceOneDayAgo,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const totalQuantitySold = {
    labels,
    datasets: [
      {
        label: "Quantidade Total Vendida De Novos",
        data: [
          data.totalNewQuantity,
          data.totalNewQuantitySixMonthsAgo,
          data.totalNewQuantityThreeMonthsAgo,
          data.totalNewQuantityTwoMonthsAgo,
          data.totalNewQuantityOneMonthAgo,
          data.totalNewQuantityThreeWeeksAgo,
          data.totalNewQuantityTwoWeeksAgo,
          data.totalNewQuantityOneWeekAgo,
          data.totalNewQuantityThreeDaysAgo,
          data.totalNewQuantityTwoDaysAgo,
          data.totalNewQuantityOneDayAgo,
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
