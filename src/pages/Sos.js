import { Flex, Text, Box, Link, Heading } from "@chakra-ui/react";
import React from "react";
const Sos = () => {
  return (
    <Flex justifyContent="center" h="100vh" alignItems='center' flexDirection='column'>
      <Heading
          as="h1"
          fontFamily={"Open Sans"}
          fontWeight={"bold"}
          fontSize={50}
          mb={5}
          color={"#add8e6"}
        >Are you feeling unsafe?</Heading>
      
      <Link href= "/soscomponent">
      <Box
      
        as="button"
        height="300px"
        width= "300px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="8px"
        borderRadius="150px"
        fontSize="14px"
        fontFamily={"Open Sans"}
        fontWeight="semibold"
        bg="red"
        borderColor="#ccd0d5"
        color="#4b4f56"
        m={5}
        _hover={{ bg: "#8B0000" }}
        _active={{
          bg:"#B22222",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .25), 0 1px 1px rgba(0, 0, 0, .55)",
        }}
      >
            <Text color="white" fontSize="6xl">SOS </Text>
        
      </Box>
      </Link>
      <br/>
      <Text mb={4} color={"#add8e6"} fontFamily={"Open Sans"} fontSize="2xl">press this button 👆</Text>
    </Flex>
  );
};

export default Sos;
