import { Flex, Text } from "@chakra-ui/react";

function Navigation() {
  return (
    <Flex flex='10%' justifyContent='space-evenly'>
      <Text fontSize='md' fontWeight='semibold'>
        Home
      </Text>
      <Text fontSize='md' fontWeight='semibold'>
        Recipes
      </Text>
      <Text fontSize='md' fontWeight='semibold'>
        About Us
      </Text>
    </Flex>
  );
}

export default Navigation;
