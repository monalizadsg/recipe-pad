import { Flex, Text } from "@chakra-ui/react";

function RecipeCard({ name, imgUrl }) {
  return (
    <Flex flexDirection='column' alignItems='center' mb='20px'>
      <img
        src={imgUrl}
        alt='recipe_bowl'
        style={{ width: "30%", height: "auto" }}
      />
      <Text fontWeight={600}>{name}</Text>
    </Flex>
  );
}

export default RecipeCard;
