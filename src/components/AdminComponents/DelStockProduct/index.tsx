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

interface DeleteProductProps {
  id: string;
  onDelete: () => void;
}
export default function DeleteStockProduct({
  id,
  onDelete,
}: DeleteProductProps) {
  const { setStatus, setMessage } = useAlertStore();

  const router = useRouter();
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const handleDelete = () => {
    axios
      .delete(`/api/nostockproduct/${id}`)
      .then((response) => {
        onDelete();
        setStatus("success");
        setMessage(
          `Produto ${response.data.product.name} permanentemente deletado com sucesso!`
        );
      })
      .catch((error) => {
        setStatus("error");
        setMessage(`Erro ao deletar produto. ${error}.`);
      });
  };
  return (
    <>
      <Modal isOpen={modal} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            bg="red.700"
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
            Tem certeza que deseja Deleter permanentemente o produto?
          </ModalBody>
          <ModalFooter className="flex w-full gap-5">
            <Button onClick={toggleModal} className="text-gray-700">
              Cancelar
            </Button>
            <Button
              onClick={() => id && handleDelete()}
              bg="red.800"
              _hover={{
                bg: "red.700",
              }}
              className="text-xl font-semibold text-white"
            >
              Deletar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button
        variant="solid"
        color="black"
        bgColor="red.200"
        onClick={toggleModal}
      >
        Remover
      </Button>
    </>
  );
}
