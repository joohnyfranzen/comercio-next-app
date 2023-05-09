import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function DeleteProduct({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = () => {
    axios.delete(`/api/product/${id}`).then((response) => {
      console.log("Produto deletado com sucesso!");
      router.reload();
    });
  };
  return <button onClick={handleDelete}>Deletar</button>;
}
