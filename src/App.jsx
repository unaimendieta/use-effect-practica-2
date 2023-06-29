
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./router/Router";
import { useState } from "react";

const App = () => {
	const [darkMode,setDarkMode] = useState(false);
	return (
		<>
		<BrowserRouter>
		<GlobalStyles  darkMode={darkMode}/>
			<Router  darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode}/>
		</BrowserRouter>
	</>
	);
};

const handleDarkMode = (darkMode,setDarkMode) =>{
	setDarkMode(!darkMode);
}
export default App;
