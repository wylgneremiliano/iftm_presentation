import { ISSResponse } from "../models/ISSResponse";
import { httpClient } from "./api";

const getPosition = async () => {
  const { data } = await httpClient.get<ISSResponse>(
    "http://api.open-notify.org/iss-now.json"
  );
  return data;
};

export { getPosition };
