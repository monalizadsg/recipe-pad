import { Flex, Text } from "@chakra-ui/react";

function RecipeCard({ name, imgUrl }) {
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      mb='20px'
      style={{ objectFit: "cover" }}
    >
      <img
        src={imgUrl}
        alt='recipe_bowl'
        style={{ width: "350px", height: "300px" }}
      />
      <Text fontWeight={600}>{name}</Text>
    </Flex>
  );
}

export default RecipeCard;
