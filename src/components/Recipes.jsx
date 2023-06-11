import { Flex, Text } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";
import recipe_bowl from "../assets/recipe.png";

function Recipes() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgColor="#FAECED"
      p="20px"
    >
      <Flex flexDirection="row" alignItems="center">
        <img src={recipe_bowl} alt="recipe_bowl" />
        <Text fontWeight={600} mb="20px">
          Try Out New Recipes
        </Text>
      </Flex>
      <Flex w="80%" justifyContent="center">
        <Flex flexDirection="column" alignItems="center" mb="20px">
          <img src={recipe_bowl} alt="recipe_bowl" />
          <Text fontWeight={600}>Recipe 1</Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb="20px">
          <img src={recipe_bowl} alt="recipe_bowl" />
          <Text fontWeight={600}>Recipe 2</Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb="20px">
          <img src={recipe_bowl} alt="recipe_bowl" />
          <Text fontWeight={600}>Recipe 3</Text>
        </Flex>
      </Flex>
      {/*<Flex justifyContent="center" alignItems="center" mb="20px">
        
        <Text fontWeight={600}>Try Out New Recipes</Text>
      </Flex>
      <Flex w="80%" justifyContent="center" flexWrap="wrap">
        <Flex
          flexDirection="column"
          alignItems="center"
          width={{ base: "100%", md: "33%" }}
          mb="20px"
        >
          <img src={recipe_bowl} alt="recipe_bowl" />
          <Text fontWeight={600}>Recipe 1</Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          width={{ base: "100%", md: "33%" }}
          mb="20px"
        >
          <img src={recipe_bowl} alt="recipe_bowl" />
          <Text fontWeight={600}>Recipe 2</Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          width={{ base: "100%", md: "33%" }}
          mb="20px"
        >
          <img src={recipe_bowl} alt="recipe_bowl" />
          <Text fontWeight={600}>Recipe 3</Text>
        </Flex>
      </Flex>

      <Flex flex={2} justifyContent="center" mb="20px">
        <img src={recipe_bowl} alt="recipe_bowl" />
        <Text fontWeight={600}>Try Out New Recipes</Text>
      </Flex>
      <Flex w="80%" justifyContent="center">
        <Flex flexDirection="column" alignItems="center" mb="20px">
          <RecipeCard />
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb="20px">
          <RecipeCard />
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb="20px">
          <RecipeCard />
        </Flex>
  </Flex>*/}
    </Flex>
  );
}

export default Recipes;
