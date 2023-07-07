import { Flex, Text, Image } from "@chakra-ui/react";
import recipeLogo from "/assets/logo.png";

function Logo() {
  return (
    <Flex alignItems='center' gap={1} flex={1}>
      <Image boxSize='30px' src={recipeLogo} alt='Recipe logo' />
      <Text fontFamily='Inter' fontWeight={800}>
        RecipePad
      </Text>
    </Flex>
  );
}

export default Logo;
