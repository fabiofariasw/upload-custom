import { MdRemoveCircle } from "react-icons/md";
import { Container, FileInfo, Preview, IconContainer } from "./styles";

export function FileList({ files, onDelete }) {
  return (
    <Container>
      {files.map((uploadedFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src="https://play-lh.googleusercontent.com/37EzETO6gZyKmCg2kBIFX1e9gkubxZrVa5fHJ6yOaa7VvEShHjKv2RdtwnZt9Sk258s" />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
            </div>
          </FileInfo>
          <div>
            <IconContainer onClick={() => onDelete(uploadedFile.id)}>
              <MdRemoveCircle size={24} color="#e57878" />
            </IconContainer>
          </div>
        </li>
      ))}
    </Container>
  );
}
