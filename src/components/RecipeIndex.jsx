import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import { Grid, VStack } from "@chakra-ui/react";
import { recipeData } from "../data/RecipeData";
import { useState } from "react";

function RecipeIndex() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  const filteredRecipes = recipeData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <VStack>
      <SearchBar handleSearch={handleSearch} />
      <Grid templateColumns={"repeat(3, 1fr)"} gap={50} margin={10}>
        {filteredRecipes.map((data) => (
          <RecipeCard
            key={data.id}
            name={data.name}
            imgUrl={data.imgUrl}
            search={searchInput}
          />
        ))}
      </Grid>
    </VStack>
  );
}

export default RecipeIndex;
