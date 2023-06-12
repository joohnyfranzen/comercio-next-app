import { useAlertStore } from "@/store/alertStore";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function DeleteOrder({ id }: { id: string | undefined }) {
  const router = useRouter();
  const { setStatus, setMessage } = useAlertStore();

  const handleDelete = () => {
    axios
      .delete(`/api/userproduct/${id}`)
      .then((response) => {
        setStatus("success");
        setMessage(`Pedido ${response.data.id} deletado com sucesso!`);
        router.reload();
      })
      .catch((error) => {
        setStatus("error");
        setMessage(`Erro ao deletar pedido. ${error}.`);
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
