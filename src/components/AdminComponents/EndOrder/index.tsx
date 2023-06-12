import { useAlertStore } from "@/store/alertStore";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function EndOrder({ id }: { id: string | undefined }) {
  const { setStatus, setMessage } = useAlertStore();

  const router = useRouter();

  const handleDelete = () => {
    axios
      .put(`/api/userproduct/${id}`)
      .then((response) => {
        setStatus("success");
        setMessage(`Venda ${response.data.order.id} finalizada com sucesso!`);
        router.reload();
      })
      .catch((error) => {
        setStatus("error");
        setMessage(`Erro ao deletar venda. ${error}.`);
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
