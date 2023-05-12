import { Button } from "@chakra-ui/react";
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
  return (
    <Button
      variant="solid"
      color="black"
      bgColor="red.200"
      onClick={handleDelete}
    >
      Deletar
    </Button>
  );
}
