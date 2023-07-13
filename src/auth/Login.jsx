import { useState } from "react";
import {
  Flex,
  Image,
  Stack,
  VStack,
  Heading,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import loginPortrait from "/assets/login_food_portrait.jpg";
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";
import { userData } from "../data/User";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    userData.push(user);
    console.log({ userData });
    alert(user.email + " " + user.password);
  };

  return (
    <Flex w='100%'>
      <Image
        w='50%'
        height='calc(100vh - 150px)'
        objectFit='cover'
        src={loginPortrait}
      />
      <Flex
        w='50%'
        // border='1px solid red'
        alignItems='center'
        justifyContent='center'
      >
        <Box w='60%' borderWidth='1px' p={8} borderRadius={10} boxShadow='xs'>
          <Stack
            flexDir='column'
            mb='2'
            justifyContent='center'
            alignItems='center'
          >
            <Heading as='h3' size='lg'>
              Sign in
            </Heading>
            <Box w='100%' mt={8}>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <TextInput
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='johnsmith@gmail.com'
                    onChange={handleInputChange}
                    isRequired
                  />
                  <PasswordInput onChange={handleInputChange} />
                </VStack>
                <Button
                  bgColor='#FE7071'
                  width='full'
                  mt={10}
                  borderRadius={8}
                  type='submit'
                  color='#fff'
                  _hover={{ bgColor: "#fe6062" }}
                >
                  Login
                </Button>
              </form>
            </Box>
          </Stack>
          <Box textAlign='center' mt={4} mb={2}>
            Not a member?{" "}
            <Link as='b' color='#fe6062' href='#'>
              Sign up
            </Link>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Login;
