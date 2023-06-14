import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <Flex flexDir='column' justifyContent='space-between' h='100vh'>
      <Header />
      <Hero />
      <Flex
        justifyContent='center'
        alignItems='center'
        margin={"15px 0px 25px 0px"}
      >
        <Recipes />
      </Flex>
      <Flex
        justifyContent='center'
        alignItems='center'
        margin={"15px 0px 25px 0px"}
      >
        <ContactUs />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
