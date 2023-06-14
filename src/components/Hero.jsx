import { Flex, Image, Button, Text } from "@chakra-ui/react";
import sampleFoodLogo from "../assets/sample-food-logo.png";
import foodLogo from "../assets/logo.png";

function Hero(){
  return(
    <Flex
      bgColor='#EAAFB4'
      alignItems='center'
      justifyContent='center'
      p='20px'
    >
      <Flex flex={3} justifyContent='center' p='20px'>
        <div> 
          <Text fontSize='6xl' fontWeight='semibold' color='#fff'>
            GET INSPIRED 
            <br></br>
            IN THE KITCHEN.
          </Text>
          <Text fontSize='3x1' color='#fff'>
            Explore, save, and create your own recipe collections with RecipePad. <br>
            </br>Elevate your cooking skills and unleash your culinary creativity.
          </Text>      
          <br></br>      
          <Button
            color='#fff'
            bgColor='#FE7071'
            p='0 20px'
            borderRadius={30}
            _hover={{ opacity: 0.8 }}
          >
            GET STARTED
          </Button>      
        </div>
      </Flex>
      <Flex flex={2} justifyContent='center' p='20px'>
        <Image src={foodLogo} boxSize='400px'/>
      </Flex>
    </Flex>
  );
}

export default Hero;