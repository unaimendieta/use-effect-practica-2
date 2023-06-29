import styled from "styled-components";

const MainContainer = styled.main`
    width: 100vw;
    
    display: flex;
    flex-direction: column;
    padding: 48px 80px;
    gap:48px;
`;
const FilterContainer = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const SearchFilter = styled.div`
    width: 480px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 24px;
    padding-left: 24px;
    background-color: ${props=>props.darkMode ? "#2B3844":"#ffffff"};
    border-radius: 5px;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
`;
const SearchIcon = styled.img`
    width: 18px;
    height: 18px;
`;
const SearchInput = styled.input`
    color: ${props=>props.darkMode ? "#ffffff":"#848484"};
    background-color: transparent;
    font-size: 14px;
    font-family: 'Nunito Sans', sans-serif;
    line-height: 20px;
    border: none;
    :focus{
    outline: none;
    }
`;
const SelectFilter = styled.select`

    color: ${props=>props.darkMode ? "#ffffff":"#111517"};
    width: 200px;
    height: 100%;
    padding-left: 24px;
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${props=>props.darkMode ? "#2B3844":"#ffffff"};
    border-radius: 5px;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
`;
const Option = styled.option`
    
    font-family: 'Nunito Sans', sans-serif;
`;
const CountryContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 330px;
    gap:64px;
`;
const Country = styled.div`
    color: ${props=>props.darkMode ? "#ffffff":"#111517"};
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: ${props=>props.darkMode ? "#2B3844":"#ffffff"};
    border-radius: 5px;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
`;
const CountryImg = styled.img`
    width: 100%;
    height: 160px;
    border-radius: 5px 5px 0 0 ;
`;
const CountryInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 24px;
`;
const CountryName = styled.p`
    font-size: 18px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
    line-height: 26px;
`;
const CountryDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const Details = styled.p`
    font-size: 14px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    line-height: 16px;
`;
const DetailSpan = styled.span`
    font-size: 14px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    line-height: 16px;
`;
export {MainContainer,Country,CountryContainer,CountryDetails,CountryImg,CountryInfo,CountryName,FilterContainer,Option,SearchFilter,SearchIcon,SearchInput,SelectFilter,DetailSpan,Details};