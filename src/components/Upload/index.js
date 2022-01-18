import React from "react";
import { useDropzone } from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";

export function Upload({ onUpload }) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
      onDropAccepted: onUpload,
      // xlsx = application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
      // xls = application/vnd.ms-excel
    });

  const renderDragMessage = (isDragAccept, isDragReject) => {
    if (!isDragAccept) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos...</UploadMessage>;
  };

  return (
    // <div>
    <DropContainer
      {...getRootProps()}
      isDragActive={isDragActive}
      isDragReject={isDragReject}
    >
      <input {...getInputProps()} />
      {renderDragMessage(isDragActive, isDragReject)}
    </DropContainer>
    // </div>
  );
}
