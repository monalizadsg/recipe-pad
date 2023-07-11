import { useState } from "react";
import {
  Flex,
  Image,
  Stack,
  VStack,
  Heading,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  InputGroup,
  InputRightElement,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import loginPortrait from "/assets/login_food_portrait.jpg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

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
        <Box borderWidth='1px' p={8} borderRadius={10} boxShadow='xs'>
          <Stack
            flexDir='column'
            mb='2'
            justifyContent='center'
            alignItems='center'
          >
            <Heading as='h3' size='lg'>
              Sign up
            </Heading>
            <Text fontSize='lg'>to enjoy all of our cool features</Text>
            <Box mt={8}>
              <form>
                <VStack spacing={4}>
                  <HStack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type='text' placeholder='John' />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Input type='text' placeholder='Smith' />
                    </FormControl>
                  </HStack>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='johnsmith@gmail.com' />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        pr='4.5rem'
                        type={showPassword ? "text" : "password"}
                        placeholder='Enter password'
                      />
                      <InputRightElement width='4.5rem'>
                        <IconButton
                          onClick={handleClick}
                          bg='unset'
                          _hover={{ bg: "unset" }}
                          aria-label='Search database'
                          icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
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
                  Sign Up
                </Button>
              </form>
            </Box>
          </Stack>
          <Box textAlign='center' mt={4} mb={2}>
            Already a user?{" "}
            <Link as='b' color='#fe6062' href='#'>
              Login
            </Link>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
