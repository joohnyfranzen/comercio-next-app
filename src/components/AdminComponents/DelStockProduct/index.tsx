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

export default function DeleteStockProduct({ id }: { id: string }) {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const handleDelete = () => {
    axios.delete(`/api/nostockproduct/${id}`).then((response) => {
      console.log("Produto deletado com sucesso!");
      router.reload();
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
