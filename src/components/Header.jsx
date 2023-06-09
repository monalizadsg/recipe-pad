import { Flex, Button } from "@chakra-ui/react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      bgColor='#FAECED'
      p='20px'
    >
      <Flex w='85%' justifyContent='space-between' alignItems='center'>
        <Logo />
        <Navigation />
        <Flex flex={1} justifyContent='flex-end'>
          <Button
            color='#fff'
            bgColor='#FE7071'
            p='0 30px'
            borderRadius={30}
            _hover={{ opacity: 0.8 }}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
