import { Flex, Heading } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import "./App.css";

function App() {
  return (
    <Flex flexDir="column" justifyContent="space-between" h="100vh">
      <Header />
      {/* sample content Here */}
      <Flex flex={2} justifyContent="center" alignItems="center">
        <Heading>Welcome to RecipePad</Heading>
      </Flex>
      <Recipes />
      {/* sample content above */}
      <Footer />
    </Flex>
  );
}

export default App;
