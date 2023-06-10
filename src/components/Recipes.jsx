import { Flex, Button } from "@chakra-ui/react";

function Recipes() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgColor="#FAECED"
      p="20px"
    >
      <Flex w="80%" justifyContent="center">
        <Text fontWeight={600}>&copy;*Insert Image* Try Out New Recipes</Text>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Flex>
    </Flex>
  );
}

export default Recipes;
