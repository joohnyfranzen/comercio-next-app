import { Image } from "@/@types/Image";
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
import { getStorage, ref, deleteObject } from "firebase/storage";

export default function DeleteImage({ image }: { image: Image }) {
  const storage = getStorage();
  const desertRef = ref(storage, `image/${image.imageName}`);
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const handleDelete = () => {
    axios.delete(`/api/image/${image.id}`).then((response) => {
      console.log("Imagem deletado com sucesso!");
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
            Tem certeza que deseja Remover esta Imagem do Produto?
          </ModalBody>
          <ModalFooter className="flex w-full gap-5">
            <Button onClick={toggleModal} className="text-gray-700">
              Cancelar
            </Button>
            <Button
              onClick={() => image.id && handleDelete()}
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
        Deletar Imagem
      </Button>
    </>
  );
}
