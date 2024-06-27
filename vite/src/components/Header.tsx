import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Flex
      fontSize="4xl"
      bgColor="green.300"
      width="full"
      justifyContent="center"
      py={4}
      position="relative"
    >
      어떤 NFT가 나올까요?
      <Flex position="absolute" h="100%" top={0} right={4} alignItems="center">
        <Button>🦊 로그인</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
