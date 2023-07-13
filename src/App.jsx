import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeIndex from "./components/RecipeIndex";
import AboutUs from "./components/AboutUs";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import PublicRoute from "./app/PublicRoute";
import PrivateRoute from "./app/PrivateRoute";
import UserRecipes from "./user/UserRecipes";
import UserFavorites from "./user/UserFavorites";
import UserMyRecipes from "./user/UserMyRecipes";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/recipe-index' element={<RecipeIndex />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path='/recipes' element={<UserRecipes />} />
        <Route path='/favorites' element={<UserFavorites />} />
        <Route path='/my-recipes' element={<UserMyRecipes />} />
      </Route>
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
