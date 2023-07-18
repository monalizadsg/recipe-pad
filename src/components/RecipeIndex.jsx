import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import { Grid, VStack } from "@chakra-ui/react";
import { recipeData } from "../data/RecipeData";
import { useState } from "react";
import { useDebounce } from "use-debounce";

function RecipeIndex() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 500);

  const handleSearch = (input) => {
    setInputValue(input);
  };

  const filteredRecipes = recipeData.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
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
            search={inputValue}
          />
        ))}
      </Grid>
    </VStack>
  );
}

export default RecipeIndex;
