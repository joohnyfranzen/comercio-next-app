import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function EndOrder({ id }: { id: string | undefined }) {
  const router = useRouter();

  const handleDelete = () => {
    axios.put(`/api/userproduct/${id}`).then((response) => {
      console.log("Venda deletada com sucesso!");
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
      Finalizar Pedido
    </Button>
  );
}
