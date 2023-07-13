import { Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import recipe from "/assets/recipe_nav_icon.png";
import favorite from "/assets/favorite_nav_icon.png";
import myRecipe from "/assets/my_recipe_nav_icon.png";
import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Recipes",
    path: "/recipes",
    icon: recipe,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: favorite,
  },
  {
    title: "My Recipes",
    path: "/my-recipes",
    icon: myRecipe,
  },
];

function SideNav() {
  return (
    <Flex flexDir='column'>
      <Flex>
        <List>
          {menu.map(({ title, path, icon }) => (
            <NavLink key={title} to={path}>
              <ListItem>
                <Flex>
                  <Image src={icon} h='20px' w='20px' />
                  <Text> {title}</Text>
                </Flex>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Flex>
    </Flex>
  );
}

export default SideNav;