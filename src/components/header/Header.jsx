import { DarkModeContainer, Icon, MainContainer, ModeText, Title } from "./styles";

const Header = ({darkMode, setDarkMode, handleDarkMode}) => {
	return (
	<>
        <MainContainer darkMode={darkMode}>
            <Title darkMode={darkMode}>Where in the world?</Title>
            <DarkModeContainer onClick={()=>handleDarkMode(darkMode,setDarkMode)}>
                <Icon src={darkMode? "../../assets/darkmode.svg":"../../assets/lightmode.svg"}/>
                <ModeText darkMode={darkMode}>Dark Mode</ModeText>
            </DarkModeContainer>
        </MainContainer>
        
	</>
	);
};

export default Header;