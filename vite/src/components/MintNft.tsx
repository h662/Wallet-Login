import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";

const MintNft: FC = () => {
  return (
    <Flex flexGrow={1} width="full" justifyContent="center" alignItems="center">
      <Button colorScheme="green">민팅</Button>
    </Flex>
  );
};

export default MintNft;
