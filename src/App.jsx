import { Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./components/Home";
import RecipeIndex from "./components/RecipeIndex";
import AboutUs from "./components/AboutUs";
import "./App.css";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <Flex flexDir='column' justifyContent='space-between' h='100vh'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe-index' element={<RecipeIndex />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </Flex>
  );
}

export default App;
