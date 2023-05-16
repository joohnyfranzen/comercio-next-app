import { User } from "@/@types/User";
import DeleteOrder from "@/components/AdminComponents/DelOrder";
import Layout from "@/components/AdminComponents/Layout";
import SellsLog from "@/components/AdminComponents/SellsLog";
import React from "react";

export default function Dashboard() {
  return (
    <Layout>
      <SellsLog />
    </Layout>
  );
}
