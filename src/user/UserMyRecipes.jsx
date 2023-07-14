import { useState } from "react";
import { Flex, Grid, GridItem, Text, Button } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";
import ScrollContainer from "../components/ScrollContainer";

const myRecipesMockupData = [
  {
    id: 1,
    title: "Gyoza",
    imgSrc: "https://source.unsplash.com/kcA-c3f_3FE",
    description: "This is a description.",
    ingredients: ["cabbage, meat, onion, garlic, salt, pepper"],
    instructions: ["Mixed all ingredients. Wrap. Cook."],
  },
  {
    id: 2,
    title: "Gyoza",
    imgSrc: "https://source.unsplash.com/kcA-c3f_3FE",
    description: "This is a description.",
    ingredients: ["cabbage, meat, onion, garlic, salt, pepper"],
    instructions: ["Mixed all ingredients. Wrap. Cook."],
  },
  {
    id: 3,
    title: "Gyoza",
    imgSrc: "https://source.unsplash.com/kcA-c3f_3FE",
    description: "This is a description.",
    ingredients: ["cabbage, meat, onion, garlic, salt, pepper"],
    instructions: ["Mixed all ingredients. Wrap. Cook."],
  },
  {
    id: 4,
    title: "Gyoza",
    imgSrc: "https://source.unsplash.com/kcA-c3f_3FE",
    description: "This is a description.",
    ingredients: ["cabbage, meat, onion, garlic, salt, pepper"],
    instructions: ["Mixed all ingredients. Wrap. Cook."],
  },
  {
    id: 5,
    title: "Gyoza",
    imgSrc: "https://source.unsplash.com/kcA-c3f_3FE",
    description: "This is a description.",
    ingredients: ["cabbage, meat, onion, garlic, salt, pepper"],
    instructions: ["Mixed all ingredients. Wrap. Cook."],
  },
  {
    id: 6,
    title: "Gyoza",
    imgSrc: "https://source.unsplash.com/kcA-c3f_3FE",
    description: "This is a description.",
    ingredients: ["cabbage, meat, onion, garlic, salt, pepper"],
    instructions: ["Mixed all ingredients. Wrap. Cook."],
  },
];

function UserMyRecipes() {
  const [myRecipes, setMyRecipes] = useState(myRecipesMockupData);
  const navigate = useNavigate();

  console.log({ setMyRecipes });
  console.log(myRecipesMockupData);

  return (
    <>
      {myRecipes.length > 0 ? (
        <ScrollContainer>
          <Grid templateColumns='repeat(3, 1fr)' gap={10} w='100%'>
            {myRecipes.map((item) => (
              <GridItem key={item.id}>
                <RecipeCard name={item.title} imgUrl={item.imgSrc} />
              </GridItem>
            ))}
          </Grid>
        </ScrollContainer>
      ) : (
        <Flex
          // border='1px solid red'
          flexDir='column'
          alignItems='center'
          justifyContent='center'
          h='100%'
        >
          <Text fontSize='lg'>
            Add your own recipe and share it with the community
          </Text>
          <Button
            mt={4}
            color='#fff'
            bgColor='#FE7071'
            p='0 30px'
            borderRadius={30}
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/my-recipes/add")}
          >
            Add recipe
          </Button>
        </Flex>
      )}
    </>
  );
}

export default UserMyRecipes;
