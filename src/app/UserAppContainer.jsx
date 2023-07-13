import { Flex, Heading } from "@chakra-ui/react";
import SideNav from "../components/SideNav";

function UserAppContainer(props) {
  return (
    <Flex flexDir='column'>
      <Flex>
        <Heading>Users Page</Heading>
      </Flex>
      <Flex>
        <SideNav />
        <Flex flexDir='column' flexGrow={1}>
          {props.children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UserAppContainer;
