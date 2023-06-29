import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";

const Router = ({darkMode, setDarkMode, handleDarkMode}) => {
	return (
        <Routes>
            <Route path="/"  element={<Layout  darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode}/>}>
                <Route index element={<Home  darkMode={darkMode}/>} />
                {/* <Route path="destination" element={<Destination />} /> */}
            </Route>
        </Routes>
	);
};

export default Router;