import { Flex, Heading } from "@chakra-ui/react";
import SideNav from "../components/SideNav";

function UserAppContainer(props) {
  return (
    <Flex flexDir='column' h='100vh' alignItems='center'>
      <Flex>
        <Heading>Users Page</Heading>
      </Flex>
      <Flex
        flex={1}
        // border='1px solid red'
        w='100%'
        p='50px'
        pb='30px'
        gap={10}
      >
        <SideNav />
        <Flex flexDir='column' flexGrow={1}>
          {props.children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UserAppContainer;
