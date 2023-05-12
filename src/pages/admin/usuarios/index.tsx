import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { User } from "@/@types/User";
import DeleteUser from "@/components/AdminComponents/DelUser";
import Layout from "@/components/AdminComponents/Layout";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

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
      <div>
        <h1 className="text-center font-bold text-2xl mb-5">Usuários</h1>
        <Link className="flex m-5" href="/admin/novousuario">
          <Button>Novo Usuário</Button>
        </Link>
        <div className="text-center justify-center flex flex-wrap">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-5 py-3 border">Nome</th>
                <th className="px-5 py-3 border">Cpf</th>
                <th className="px-5 py-3 border">Endereço</th>
                <th className="px-5 py-3 border">Editar</th>
                <th className="px-5 py-3 border">Deletar</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => {
                return (
                  <tr key={user.id}>
                    <td className="px-5 py-3 border">{user.name}</td>
                    <td className="px-5 py-3 border">{user.email}</td>
                    <td className="px-5 py-3 border">{user.address?.street}</td>
                    <td className="px-5 py-3 border">
                      <Link href={`/admin/editarusuario/${user.id}`}>
                        <Button
                          variant="solid"
                          color="black"
                          bgColor="green.200"
                        >
                          Editar
                        </Button>
                      </Link>
                    </td>
                    <td className="px-5 py-3 border">
                      <DeleteUser id={user?.id} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Link className="flex m-5" href="/admin/novousuario">
        <Button>Novo Usuário</Button>
      </Link>
    </Layout>
  );
}
