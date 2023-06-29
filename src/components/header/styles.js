import styled from "styled-components";

const MainContainer = styled.nav`
    height: 80px;
    width: 100vw;
    background-color: ${props=>props.darkMode ? "#2B3844":"#ffffff"};
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
`;
const Title = styled.h1`
    color: ${props=>props.darkMode ? "#ffffff":"#111517"};
    font-size: 24px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
`;
const DarkModeContainer = styled.div`
    display: flex;
    gap: 4px;
`;
const Icon = styled.img`
    height: 20px;
    width: 20px;
`;
const ModeText = styled.p`
    color: ${props=>props.darkMode ? "#ffffff":"#111517"};
    font-size: 16px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
`;
export {MainContainer,DarkModeContainer,Icon,ModeText,Title};