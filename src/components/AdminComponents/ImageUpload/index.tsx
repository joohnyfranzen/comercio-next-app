import {
  Button,
  Card,
  Input,
  List,
  message,
  Image,
  Progress,
  InputRef,
} from "antd";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { RefObject, useRef, useState } from "react";
import { storage } from "../../../../firebaseConfig";
import { Product } from "@/@types/Product";
import axios from "axios";

export default function UploadImageToStorage({
  product,
}: {
  product: Product;
}) {
  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setProgressUpload] = useState(0);
  const updateProductImage = (url: string) => {
    axios.post("/api/image", {
      id: product.id,
      imageUrl: url,
      imageName: imageFile?.name,
    });
  };

  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0]);

      console.log(files[0]);
    } else {
      message.error("File size to large");
    }
  };

  const handleUploadFile = () => {
    if (imageFile) {
      const name = imageFile.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgressUpload(progress); // to show progress upload

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          message.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setDownloadURL(url);
            updateProductImage(url);
          });
        }
      );
    } else {
      message.error("File not found");
    }
  };

  const handleRemoveFile = () => setImageFile(undefined);

  return (
    <div className="container mt-5">
      <div className="col-lg-8 offset-lg-2">
        <label>
          <div className="flex justify-center align-center">
            <Image
              className="w-32 h-32 cursor-pointer"
              src="/images/illustrations/file-search.png"
              alt="Image-Upload"
            />
          </div>
          <Input
            type="file"
            className="hidden"
            placeholder="Select file to upload"
            accept="image/png"
            onChange={(files) => handleSelectedFile(files.target.files)}
          />
        </label>

        <div>
          <div>
            {imageFile && (
              <>
                <List.Item
                  extra={[
                    <Button
                      key="btnRemoveFile"
                      onClick={handleRemoveFile}
                      type="text"
                      icon={<i className="fas fa-times"></i>}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    title={imageFile.name}
                    description={`Size: ${imageFile.size}`}
                  />
                </List.Item>

                <div className="text-right mt-3">
                  <Button
                    loading={isUploading}
                    type="primary"
                    onClick={handleUploadFile}
                  >
                    Upload
                  </Button>

                  <Progress percent={progressUpload} />
                </div>
              </>
            )}

            {downloadURL && (
              <>
                <Image
                  src={downloadURL}
                  alt={downloadURL}
                  style={{ width: 200, height: 200, objectFit: "cover" }}
                />
                <p>{downloadURL}</p>
              </>
            )}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
