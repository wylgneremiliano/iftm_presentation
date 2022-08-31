import {
  Btn,
  Container,
  Content,
  ContentInputs,
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
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../services/query";
import YoutubeEmbed from "./components/player";

const ImageForDay = () => {
  const [date, setDate] = useState(moment().format("yyyy-MM-DD"));
  const [dateForButton, setDateForButton] = useState(
    moment().format("yyyy-MM-DD")
  );
  const { data } = useQuery(["imageForDay", dateForButton], () =>
    getImageForDay(dateForButton)
  );
  const onChangeAndFormatDate = async (e: string | null) => {
    const dateFormated = moment(e).format("yyyy-MM-DD");
    setDate(dateFormated);
  };
  const getImageForDayMutation = useMutation(
    ["imageForDay"],
    () => getImageForDay(date),
    {
      onSuccess: () =>
        queryClient.invalidateQueries(["imageForDay", dateForButton]),
    }
  );
  async function onSubmit() {
    setDateForButton(date);
    getImageForDayMutation.mutate();
  }
  return (
    <Container>
      <Title>Selecione uma data para ver a imagem/vídeo do dia </Title>
      <ContentInputs>
        <MobileDateTimePicker
          inputFormat="DD/MM/yyyy"
          renderInput={(params) => (
            <TextField
              style={{ background: "#fff", borderRadius: 5, marginRight: 10 }}
              {...params}
            />
          )}
          onChange={(e) => onChangeAndFormatDate(e)}
          value={date}
        />
        <Btn
          variant="contained"
          onClick={() => onSubmit()}
          style={{
            backgroundColor: "#bd93f9",
            paddingTop: 15,
            paddingBottom: 15,
            fontWeight: "bold",
          }}
        >
          Ver nova imagem
        </Btn>
      </ContentInputs>
      <Content>
        {data?.media_type === "image" && (
          <Logo
            src={data?.url || nasaLogo}
            alt="nasa-logo"
            style={{ width: "800px", height: "600px", objectFit: "contain" }}
          />
        )}

        {data?.media_type === "video" && <YoutubeEmbed embedId={data?.url} />}

        {data?.media_type !== "image" && data?.media_type !== "video" && (
          <>
            <Logo
              src={nasaLogo}
              alt="nasa-logo"
              style={{ width: "700px", height: "500px", objectFit: "contain" }}
            />
            <Title>Sem imagem/vídeo nessa data.</Title>
          </>
        )}
        <Title>{data?.title}</Title>
        <Text>{data?.explanation}</Text>
        <TextItalic>{data?.copyright}</TextItalic>
      </Content>
    </Container>
  );
};

export { ImageForDay };
