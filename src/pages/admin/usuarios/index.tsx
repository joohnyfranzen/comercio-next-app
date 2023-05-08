import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { User } from "@/@types/User";
import DeleteUser from "@/components/AdminComponents/DelUser";
import Layout from "@/components/AdminComponents/Layout";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    submitForm();
  }, []);
  const submitForm = () => {
    axios.get("/api/user").then((response) => setUsers(response.data));
  };

  return (
    <Layout>
      <h1>Usuários</h1>
      {users?.map((user) => {
        return (
          <>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <Link href={`/admin/editarusuario/${user.id}`}>Editar Usuário</Link>
            <DeleteUser id={user?.id} />
          </>
        );
      })}
      <Link href="/admin/novousuario">Novo Usuário</Link>
    </Layout>
  );
}
