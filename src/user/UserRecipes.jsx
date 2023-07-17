import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard";
// import { useNavigate } from "react-router-dom";
import ScrollContainer from "../components/ScrollContainer";

const allRecipesMockupData = [
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

function UserRecipes() {
  const [recipes, setRecipes] = useState(allRecipesMockupData);
  // const navigate = useNavigate();

  console.log({ setRecipes });

  return (
    <>
      <ScrollContainer>
        <Grid templateColumns='repeat(3, 1fr)' gap={10} w='100%'>
          {recipes.map((item) => (
            <GridItem key={item.id}>
              <RecipeCard name={item.title} imgUrl={item.imgSrc} />
            </GridItem>
          ))}
        </Grid>
      </ScrollContainer>
    </>
  );
}

export default UserRecipes;
