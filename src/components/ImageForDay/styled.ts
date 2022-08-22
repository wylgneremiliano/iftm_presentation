import styled from "styled-components";

import Button from "@mui/material/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "ROBOTO", sans-serif;
  align-items: center;
  justify-content: center;
  background-color: #282a36;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 150px;
`;

export const Text = styled.p`
  margin-top: 15px;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;
export const TextItalic = styled.p`
  margin-top: 15px;
  font-size: 16px;
  font-style: italic;
  text-align: center;
`;
export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const Logo = styled.img`
  margin: 20px;
`;

export const Btn = styled(Button)``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
`;
export const ContentInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
