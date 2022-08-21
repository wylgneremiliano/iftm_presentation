import {
  Btn,
  Container,
  Content,
  Logo,
  Text,
  TextItalic,
  Title,
} from "./styled";

import nasaLogo from "../../assets/nasa-logo.png";
import { TextField } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import moment from "moment";

import { getImageForDay } from "../../services/ImageForDay";

const ImageForDay = () => {
  const [date, setDate] = useState(moment().format("yyyy-MM-DD"));
  const [data, setData] = useState({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
  });
  const onChangeAndFormatDate = async (e: string | null) => {
    const dateFormated = moment(e).format("yyyy-MM-DD");
    setDate(dateFormated);
  };

  const onSubmit = async () => {
    const response = await getImageForDay(date);
    setData(response);
  };
  return (
    <Container>
      <Title>Selecione uma data para ver a imagem do dia </Title>

      <MobileDateTimePicker
        inputFormat="DD/MM/yyyy"
        renderInput={(params) => (
          <TextField
            style={{ background: "#fff", borderRadius: 5, marginBottom: 20 }}
            {...params}
          />
        )}
        onChange={(e) => onChangeAndFormatDate(e)}
        value={date}
      />
      <Btn
        variant="contained"
        onClick={() => onSubmit()}
        style={{ backgroundColor: "#bd93f9" }}
      >
        Ver nova imagem
      </Btn>
      <Content>
        <Logo
          src={data?.hdurl || nasaLogo}
          alt="nasa-logo"
          style={{ width: "800px", height: "600px", objectFit: "contain" }}
        />
        <Title>{data?.title}</Title>
        <Text>{data?.explanation}</Text>
        <TextItalic>{data?.copyright}</TextItalic>
      </Content>
    </Container>
  );
};

export { ImageForDay };
