import { ChakraProvider, theme } from "@chakra-ui/react";
import { Voting } from "./features/vote/components/voting";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Voting />} />
      </Routes>
    </ChakraProvider>
  );
};
