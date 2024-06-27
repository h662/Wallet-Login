import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const App: FC = () => {
  return (
    <Flex
      bgColor="red.100"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      Hello, React!
    </Flex>
  );
};

export default App;
