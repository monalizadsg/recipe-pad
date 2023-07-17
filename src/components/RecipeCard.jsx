import { Flex, Text, Image } from "@chakra-ui/react";
import favorite from "/assets/active_favorite.png";

function RecipeCard({ name, imgUrl, isFavorite }) {
  return (
    <Flex flexDirection='column' alignItems='center' mb='20px'>
      <Flex
        style={{
          position: "relative",
        }}
      >
        {isFavorite && (
          <Image
            src={favorite}
            w='30px'
            h='30px'
            style={{ position: "absolute", right: 20, top: 20 }}
          />
        )}
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
      </Flex>

      <Text fontWeight={600}>{name}</Text>
    </Flex>
  );
}

export default RecipeCard;
