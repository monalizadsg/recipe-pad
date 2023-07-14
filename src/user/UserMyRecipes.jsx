import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

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
];

function UserMyRecipes() {
  const [myRecipes, setMyRecipes] = useState(myRecipesMockupData);

  console.log({ setMyRecipes });

  return (
    <Flex>
      <Grid
        templateColumns='repeat(3, 1fr)'
        gap={10}
        // border='1px solid red'
        w='100%'
      >
        {myRecipes.map((item) => (
          <GridItem key={item.id}>
            <RecipeCard name={item.title} imgUrl={item.imgSrc} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}

export default UserMyRecipes;
