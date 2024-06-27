import { Grid } from "@chakra-ui/react";
import { FC } from "react";

const MyNfts: FC = () => {
  return (
    <Grid
      flexGrow={6}
      bgColor="red.100"
      maxW={768}
      width="full"
      justifyContent="center"
      alignItems="center"
    >
      MyNfts
    </Grid>
  );
};

export default MyNfts;
