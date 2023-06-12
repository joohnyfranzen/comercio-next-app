import { User } from "@/@types/User";
import { useAlertStore } from "@/store/alertStore";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function DeleteUser({ id }: { id: User["id"] }) {
  const { setStatus, setMessage } = useAlertStore();

  const router = useRouter();
  const handleDelete = () => {
    axios
      .delete(`/api/user/${id}`)
      .then((response) => {
        setStatus("success");
        setMessage(`Usuário ${response.data.user.name} removido com sucesso!`);
        router.reload();
      })
      .catch((error) => {
        setStatus("error");
        setMessage(`Erro ao deletar usuário. ${error}.`);
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
