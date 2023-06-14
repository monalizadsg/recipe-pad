import { Flex, Heading } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <Flex flexDir="column" justifyContent="space-between" h="100vh">
      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        margin={"15px 0px 25px 0px"}
      >
        <ContactUs />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
