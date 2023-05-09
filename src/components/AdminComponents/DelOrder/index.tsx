import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function DeleteOrder({ id }: { id: string | undefined }) {
  const router = useRouter();

  const handleDelete = () => {
    axios.delete(`/api/userproduct/${id}`).then((response) => {
      console.log("Venda deletada com sucesso!");
      router.reload();
    });
  };
  return <button onClick={handleDelete}>Deletar</button>;
}
