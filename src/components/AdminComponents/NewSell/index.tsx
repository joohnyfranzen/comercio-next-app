import { Product } from "@/@types/Product";
import { Button, Input, Select } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { NewSell } from "@/@types/NewSell";
import { User } from "@/@types/User";
import { useRouter } from "next/router";
import { useAlertStore } from "@/store/alertStore";

export default function NewSell() {
  const router = useRouter();
  const { setStatus, setMessage } = useAlertStore();
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    street: "",
    city: "Jaragua do Sul",
  });

  const [isNewUser, setIsNewUser] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [productCount, setProductCount] = useState([1]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    const getData = () => {
      axios.get("/api/product").then((response) => setProducts(response.data));
    };
    const getUsers = () => {
      axios.get("/api/user").then((response) => setUsers(response.data));
    };
    getData();
    getUsers();
  }, []);
  const submitForm = () => {
    const selectedProducts = productCount.map((count) => {
      const selectElement = document.getElementById(
        `select-${count}`
      ) as HTMLSelectElement;
      const selectedProductId = selectElement.value;
      const selectedProduct = products.find(
        (product) => String(product.id) === selectedProductId
      );
      return selectedProduct;
    });
    const formData: NewSell = {
      id: isNewUser == false ? selectedUser?.id : "",
      name: isNewUser == false ? selectedUser?.name : newUser.name,
      email: isNewUser == false ? selectedUser?.email : newUser.email,
      password: isNewUser == false ? selectedUser?.password : newUser.password,
      phoneNumber:
        isNewUser == false ? selectedUser?.phoneNumber : newUser.phoneNumber,
      address: {
        street:
          isNewUser == false ? selectedUser?.address?.street : newUser.street,
        city: isNewUser == false ? selectedUser?.address?.city : newUser.city,
      },
      userProducts: selectedProducts,
    };
    axios
      .post("/api/userproduct", formData)
      .then((res) => {
        setStatus("success");
        setMessage(`Venda ${res.data.order.id} finalizada com sucesso!`);
        router.push("/admin/vendas");
      })
      .catch((error) => {
        setStatus("error");
        setMessage(`Erro ao finalizar venda. ${error}.`);
        router.reload();
      });
  };
  const addProduct = () => {
    setProductCount((prevCount) => [...prevCount, prevCount.length + 1]);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  return (
    <div className="flex justify-center my-5">
      <form className="w-96 center">
        <h1 className="text-2xl text-center">Nova Venda</h1>
        {productCount.map((count) => (
          <Select
            className=" w-full p-2  mt-3 border-2 border-gray-200"
            key={count}
            id={`select-${count}`}
          >
            {products.map((product) => {
              return (
                <option value={String(product.id)} key={String(product.id)}>
                  {product.name}
                </option>
              );
            })}
          </Select>
        ))}
        {isNewUser == false ? (
          <Select className=" w-full p-2  my-3 border-2 border-gray-200">
            {users.map((user) => {
              return (
                <option
                  onClick={() => {
                    setSelectedUser(user);
                  }}
                  value={String(user.id)}
                  key={String(user.id)}
                >
                  {user.name}
                </option>
              );
            })}
          </Select>
        ) : (
          <>
            <Input
              className=" w-full p-2  my-3 border-2 border-gray-200"
              type="text"
              placeholder="Nome do Comprador"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
            />
            <Input
              className=" w-full p-2  my-3 border-2 border-gray-200"
              type="text"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="Email do Comprador"
            />
            <Input
              className=" w-full p-2  my-3 border-2 border-gray-200"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
              placeholder="Senha do Comprador"
            />
            <Input
              className=" w-full p-2  my-3 border-2 border-gray-200"
              type="text"
              name="phoneNumber"
              value={newUser.phoneNumber}
              onChange={handleInputChange}
              placeholder="Numero de Telefone"
            />
            <Input
              className=" w-full p-2  my-3 border-2 border-gray-200"
              type="text"
              name="street"
              value={newUser.street}
              onChange={handleInputChange}
              placeholder="Localização  do Comprador"
            />
            <Input
              className=" w-full p-2  my-3 border-2 border-gray-200"
              type="text"
              name="city"
              value={newUser.city}
              onChange={handleInputChange}
              defaultValue={"Jaraguá do Sul"}
            />
          </>
        )}
        <div className="w-full flex justify-between">
          <Button
            colorScheme="green"
            variant="outline"
            onClick={() => setIsNewUser(!isNewUser)}
          >
            {!isNewUser ? "Novo Usuário" : "Selecionar Usuário"}
          </Button>
          <Button colorScheme="green" variant="outline" onClick={addProduct}>
            Adicionar Produto
          </Button>
        </div>{" "}
        <Button
          onClick={submitForm}
          colorScheme="facebook"
          className=" w-full p-2  my-3 border-2 border-gray-200"
        >
          Finalizar Venda
        </Button>
      </form>
    </div>
  );
}
