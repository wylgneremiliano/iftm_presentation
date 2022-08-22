import { useQuery } from "@tanstack/react-query";
import { getPosition } from "../services/ISSPosition";

const useISS = () => {
  return useQuery(["issPosition"], () => getPosition(), {
    select: (response) => response,
    refetchInterval: 3000,
  });
};

export { useISS };
