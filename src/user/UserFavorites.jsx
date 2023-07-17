import { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard";
// import { useNavigate } from "react-router-dom";
import ScrollContainer from "../components/ScrollContainer";

const favRecipesMockupData = [
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

function UserFavorites() {
  const [recipes, setRecipes] = useState(favRecipesMockupData);
  // const navigate = useNavigate();

  console.log({ setRecipes });
  useEffect(() => {
    const newRecipes = recipes.map((item) => {
      return { ...item, isFavorite: true };
    });
    setRecipes(newRecipes);
  }, [recipes]);

  return (
    <>
      <ScrollContainer>
        <Grid templateColumns='repeat(3, 1fr)' gap={10} w='100%'>
          {recipes.map((item) => (
            <GridItem key={item.id}>
              <RecipeCard
                name={item.title}
                imgUrl={item.imgSrc}
                isFavorite={item.isFavorite}
              />
            </GridItem>
          ))}
        </Grid>
      </ScrollContainer>
    </>
  );
}

export default UserFavorites;
