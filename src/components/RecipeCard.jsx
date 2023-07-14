import { Flex, Text } from "@chakra-ui/react";

function RecipeCard({ name, imgUrl }) {
  return (
    <Flex flexDirection='column' alignItems='center' mb='20px'>
      <img
        src={imgUrl}
        alt='recipe_bowl'
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          borderRadius: 20,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      />
      <Text fontWeight={600}>{name}</Text>
    </Flex>
  );
}

export default RecipeCard;
