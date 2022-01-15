import React from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";

export function Upload(props) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ accept: "image/png" });
  return (
    <div className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        isDragActive={isDragActive}
        isDragReject={isDragReject}
      >
        <input {...getInputProps()} />
        Jogue seus arquivos aqui
      </div>
    </div>
  );
}
