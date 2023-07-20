import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import ImageUploader from "../components/ImageUploader";
import ScrollContainer from "../components/ScrollContainer";

function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
    image: "",
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
  });
  const [image, setImage] = useState([]);

  console.log({ image });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (imageFile) => {
    // data for submit
    console.log(imageFile);
    setImage(imageFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle the recipe submission here
    console.log(recipeData);
  };

  return (
    <ScrollContainer>
      <Box p={10} bgColor='#FFFAEF' borderRadius={10} position='relative'>
        <Heading size='md' mb={6}>
          New Recipe
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='stretch' alignItems='center'>
            {/* Image Upload */}
            <ImageUploader onChange={handleImageChange} />

            {/* Title */}
            <FormControl>
              <Input
                type='text'
                name='title'
                variant='unstyled'
                placeholder='Title your recipe...'
                fontSize='xl'
                sx={{ "::placeholder": { fontWeight: 600 } }}
                value={recipeData.title}
                onChange={handleChange}
              />
            </FormControl>

            {/* Description */}
            <FormControl>
              <FormLabel>Description (optional)</FormLabel>
              <Input
                name='description'
                value={recipeData.description}
                onChange={handleChange}
                variant='unstyled'
              />
            </FormControl>

            {/* Ingredients */}
            <FormControl>
              <FormLabel>Ingredients (one on each line)</FormLabel>
              <Textarea
                name='ingredients'
                value={recipeData.ingredients}
                onChange={handleChange}
                variant='unstyled'
                rows={2}
                placeholder='Enter your ingredients, one per line...'
                resize='none'
              />
            </FormControl>

            {/* Instructions */}
            <FormControl>
              <FormLabel>
                Instructions (steps to reproduce this recipe, one step on each
                line)
              </FormLabel>
              <Textarea
                name='instructions'
                value={recipeData.instructions}
                onChange={handleChange}
                variant='unstyled'
                rows={6}
                placeholder='Enter your instructions, one step per line...'
                resize='none'
              />
            </FormControl>

            {/* Add Recipe Button */}
            <Button w='300px' type='submit' bgColor='#FFBE73'>
              Add Recipe
            </Button>
          </VStack>
        </form>
      </Box>
    </ScrollContainer>
  );
}

export default AddRecipe;
