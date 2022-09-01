import { ImageForDayResponse } from "../models/ImageForDayResponse";
import { httpClient } from "./api";

const getImageForDay = async (date: string) => {
  const { data } = await httpClient.get<ImageForDayResponse>(
    `https://api.nasa.gov/planetary/apod?api_key=sE9yyHJa6HONhcmz3CPAOnyThcFEXnAALoCTaox0&date=${date}`
  );
  return data;
};

export { getImageForDay };
