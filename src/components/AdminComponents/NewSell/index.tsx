import { Product } from "@/@types/Product";
import { Button, Select } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { NewSell } from "@/@types/NewSell";
import { User } from "@/@types/User";

export default function NewSell() {
  const [newUser, setNewUser] = useState({
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
    getData();
    getUsers();
  }, []);
  const getData = () => {
    axios.get("/api/product").then((response) => setProducts(response.data));
  };
  const getUsers = () => {
    axios.get("/api/user").then((response) => setUsers(response.data));
  };
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
    axios.post("/api/userproduct", formData).then((res) => {
      console.log(res.data);
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
    <div>
      <form>
        {productCount.map((count) => (
          <Select key={count} id={`select-${count}`}>
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
          <Select>
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
            <input
              type="text"
              placeholder="Nome do Comprador"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="text"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="Email do Comprador"
            />
            <br />
            <input
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
              placeholder="Senha do Comprador"
            />
            <br />
            <input
              type="text"
              name="phoneNumber"
              value={newUser.phoneNumber}
              onChange={handleInputChange}
              placeholder="Nome da Rua"
            />
            <br />
            <input
              type="text"
              name="street"
              value={newUser.street}
              onChange={handleInputChange}
              placeholder="Cidade"
            />
            <br />
            <input
              type="text"
              name="city"
              value={newUser.city}
              onChange={handleInputChange}
              defaultValue={"Jaraguá do Sul"}
            />
            <br />
          </>
        )}
        <Button onClick={() => setIsNewUser(!isNewUser)}>
          {!isNewUser ? "Novo Usuário" : "Selecionar Usuário"}
        </Button>
        <Button onClick={addProduct}>Adicionar Produto</Button>
        <Button onClick={submitForm}>Finalizar Venda</Button>
      </form>
    </div>
  );
}
