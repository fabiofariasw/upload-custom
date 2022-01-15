import { Upload } from "./components/Upload";
import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";

export function App() {
  return (
    <Container>
      <Content>
        <Upload />
      </Content>
      <GlobalStyle />
    </Container>
  );
}
