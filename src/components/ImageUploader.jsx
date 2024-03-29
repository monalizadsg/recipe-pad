import { useState } from "react";
import { Flex, Input, Image, Text } from "@chakra-ui/react";
import fileUpload from "/assets/upload.png";

function ImageUploader({ onChange }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleOnChange = (event) => {
    console.log({ event });
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    console.log({ imageFile });

    if (imageFile != null) {
      // pass imageFile to parent
      onChange(imageFile);

      // Create a FileReader to read the image file and generate a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <Flex flexDir='row' w='100%'>
      <Flex align='center'>
        <label htmlFor='imageInput'>
          <Flex alignItems='center'>
            <Image
              cursor='pointer'
              boxSize='40px'
              src={fileUpload}
              alt='Image Upload'
            />
            <Text fontSize='md' fontWeight={500} pl='15px'>
              {previewImage && selectedImage
                ? selectedImage.name
                : "Upload photo"}
            </Text>
          </Flex>
        </label>
        <Flex>
          <Input
            id='imageInput'
            name='image'
            type='file'
            accept='image/*'
            onChange={handleOnChange}
            display='none' // Hide the actual file input
          />
        </Flex>
      </Flex>
      <Flex style={{ position: "absolute", top: 30, right: 50 }}>
        {selectedImage && (
          <Image
            cursor='pointer'
            boxSize='200px'
            src={previewImage}
            alt='Preview'
            objectFit='cover'
          />
        )}
      </Flex>
    </Flex>
  );
}

export default ImageUploader;
