import { useState } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import { Upload } from "./components/Upload";
import { FileList } from "./components/FileList";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";

export function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  function handleUpload(files) {
    const uploadedFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      progress: 0,
      uploaded: false,
      error: false,
    }));

    const [uploadFile] = uploadedFiles;

    setUploadedFiles((oldState) => [...oldState, uploadFile]);
  }

  function handleDelete(id) {
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== id));
  }

  return (
    <Container>
      <Content>
        <Upload onUpload={handleUpload} />
        {!!uploadedFiles.length && (
          <FileList files={uploadedFiles} onDelete={handleDelete} />
        )}
      </Content>
      <GlobalStyle />
    </Container>
  );
}
