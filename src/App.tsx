import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dashboard } from "./containers/Dashboard";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
const queryClient = new QueryClient();

import "mapbox-gl/dist/mapbox-gl.css";
import "./reset.css";
import { LocalizationProvider } from "@mui/x-date-pickers";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <QueryClientProvider client={queryClient}>
        <Dashboard />

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </LocalizationProvider>
  );
};

export { App };
