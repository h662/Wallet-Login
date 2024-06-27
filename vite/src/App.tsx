import { Flex } from "@chakra-ui/react";
import { FC } from "react";

import MintNft from "./components/MintNft";
import MyNfts from "./components/MyNfts";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Header />
      <MintNft />
      <MyNfts />
    </Flex>
  );
};

export default App;
