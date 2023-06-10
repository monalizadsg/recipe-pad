import { Flex, Text } from "@chakra-ui/react";

function RecipeCard() {
  return (
    <Flex flex="10%" justifyContent="space-evenly">
      <Text fontSize="md" fontWeight="semibold">
        Recipe Image
      </Text>
      <Text fontSize="md" fontWeight="semibold">
        Recipe Name
      </Text>
    </Flex>
  );
}

export default RecipeCard;
