import { Flex, Text } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";
import recipe_bowl from "../assets/recipe.png";

const recipeData = [
  {
    id: 1,
    name: "Recipe 1",
    imgUrl: recipe_bowl,
  },
  {
    id: 2,
    name: "Recipe 2",
    imgUrl: recipe_bowl,
  },
  {
    id: 3,
    name: "Recipe 3",
    imgUrl: recipe_bowl,
  },
];

function Recipes() {
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      // bgColor='#FAECED'
      p='20px'
    >
      <Flex flexDirection='row' alignItems='center' justifyContent='center'>
        <img
          src={recipe_bowl}
          alt='recipe_bowl'
          style={{ width: "5%", height: "auto" }}
        />
        <Text fontWeight={600} mb='20px'>
          Try Out New Recipes
        </Text>
      </Flex>
      <Flex w='80%' justifyContent='center'>
        {recipeData.map((item) => (
          <RecipeCard key={item.id} name={item.name} imgUrl={item.imgUrl} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Recipes;
