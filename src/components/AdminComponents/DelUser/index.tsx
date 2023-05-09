import { User } from "@/@types/User";
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
  return <button onClick={handleDelete}>Deletar</button>;
}
