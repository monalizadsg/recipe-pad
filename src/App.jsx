import { Flex, Heading } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <Flex flexDir='column' justifyContent='space-between' h='100vh'>
      <Header />
      {/* sample content Here */}
      <Hero />
      <Flex flex={2} justifyContent='center' alignItems='center'>
        <Heading>Welcome to RecipePad</Heading>
      </Flex>
      {/* sample content above */}
      <Footer />
    </Flex>
  );
}

export default App;
