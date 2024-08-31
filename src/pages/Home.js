import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxW={"3xl"} h="100vh">
      <Stack
        as={Box}
        textAlign={"center"}
        
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "8xl" }}
          marginBottom={0}
        >
          {/* Listen<br/> & <br/> */}
          <Text color={"#add8e6"}>
            EmpowerHer
          </Text>
        </Heading>
        <Text fontFamily={"Inter"} fontSize={"large"} color={"#add8e6"}>
          Revolutionizing Women's Safety with Cutting-Edge Tech
        </Text>
        <Stack
          direction={"column"}
          align={"center"}
          alignSelf={"center"}
          mt="200px"
        >
          <Link to="/login">
            <Button
              textColor={"black"}
              colorScheme={"#add8e6"}
              bg={"#add8e6"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "#1d122a",
                textColor: "pink.600",
              }}
              // onClick={() => {
              //   window.open(process.env.REACT_APP_LOGIN, "_self");
              // }}
            >
              Register Now
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
    // </Flex>
  );
}

export default Home;
