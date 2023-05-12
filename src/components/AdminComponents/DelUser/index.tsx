import { User } from "@/@types/User";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function DeleteUser({ id }: { id: User["id"] }) {
  const router = useRouter();
  const handleDelete = () => {
    axios.delete(`/api/user/${id}`).then((response) => {
      console.log("Usuário deletado com sucesso!");
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
