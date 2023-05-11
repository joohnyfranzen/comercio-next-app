import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Sells() {
  const [sells, setSells] = useState<[]>([]);
  const submitForm = () => {
    axios.get("/api/sell").then((response) => setSells(response.data));
  };
  useEffect(() => {
    submitForm();
  }, []);

  return <div>Sells</div>;
}
