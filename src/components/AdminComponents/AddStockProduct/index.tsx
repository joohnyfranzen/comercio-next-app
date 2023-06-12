import { useAlertStore } from "@/store/alertStore";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface UpdateProductProps {
  id: string;
  onUpdate: () => void;
}
export default function AddStockProduct({ id, onUpdate }: UpdateProductProps) {
  const { setStatus, setMessage } = useAlertStore();

  const router = useRouter();
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const handleUpdate = () => {
    axios
      .put(`/api/nostockproduct/${id}`)
      .then((res) => {
        setStatus("success");
        setMessage(
          `Produto ${res.data.product.name} adicionado ao estoque com sucesso!`
        );
        onUpdate();
      })
      .catch((error) => {
        setStatus("error");
        setMessage(`Erro ao adicionar produto. ${error}.`);
      });
  };
  return (
    <>
      <Modal isOpen={modal} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            bg="green.700"
            className="h-full flex justify-between items-center"
          >
            <h3 className="text-white">Você tem certeza?</h3>
            <ModalCloseButton
              className="text-white"
              style={{
                position: "initial",
              }}
            />
          </ModalHeader>
          <ModalBody className="text-lg">
            Você está prestes a disponibilizar este produto para venda.
          </ModalBody>
          <ModalFooter className="flex w-full gap-5">
            <Button onClick={toggleModal} className="text-gray-700">
              Cancelar
            </Button>
            <Button
              onClick={() => id && handleUpdate()}
              bg="green.800"
              _hover={{
                bg: "green.700",
              }}
              className="text-xl font-semibold text-white"
            >
              Aceito
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button
        variant="solid"
        color="black"
        bgColor="green.200"
        onClick={toggleModal}
      >
        Tornar Disponível
      </Button>
    </>
  );
}
