import { ImageForDay } from "../../components/ImageForDay";
import { Map } from "../../components/map";
import { Container } from "./styled";

const Dashboard = () => {
  return (
    <Container>
      <Map />
      <ImageForDay />
    </Container>
  );
};

export { Dashboard };
