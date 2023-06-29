import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = ({darkMode, setDarkMode, handleDarkMode}) => {
	return (
	<>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode}/>
        <Outlet />
	</>
	);
};


export default Layout;