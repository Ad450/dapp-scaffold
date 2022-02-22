import { ChakraProvider, theme } from "@chakra-ui/react";
import { VerifyVoter } from "./features/voter_verification/components/verify_voter";
import { Voting } from "./features/vote/components/voting";
import { Route, Routes } from "react-router-dom";
import { metaMaskListeners } from "./core/web3/web3";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    metaMaskListeners();
  }, []);

  // contract address

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<VerifyVoter />} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </ChakraProvider>
  );
};
