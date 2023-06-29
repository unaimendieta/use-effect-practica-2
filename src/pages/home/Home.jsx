import { useEffect, useState } from "react";
import { Country, CountryContainer, CountryDetails, CountryImg, CountryInfo, CountryName, DetailSpan, Details, FilterContainer, MainContainer, Option, SearchFilter, SearchIcon, SearchInput, SelectFilter } from "./styles";
import {URL_BASE,SEARCH_BY_REGION} from "../../constants/api";
import { v4 } from "uuid";


const Home = ({darkMode}) => {
	const [countryList,setCountryList] = useState([]);
	const [countryListFiltered,setCountryListFiltered] = useState([]);
	useEffect(()=>{
        fetchCountryData("",setCountryList,setCountryListFiltered);
    },[]);
	return (
	<>
        <MainContainer>
			<FilterContainer>
				<SearchFilter  darkMode={darkMode}>
					<SearchIcon src={darkMode ? "../../assets/searchDark.svg":"../../assets/searchLight.svg"}/>
					<SearchInput onChange={e => filterByName(e.target.value,countryList,setCountryListFiltered)} darkMode={darkMode} type="search" placeholder="Search for a country…"></SearchInput>
				</SearchFilter>
				<SelectFilter id="selectFilter" onChange={e => fetchCountryData(e.target.value,setCountryList,setCountryListFiltered)} darkMode={darkMode}>
					<Option value="" selected>Filter by Region</Option>
					<Option value="africa">Africa</Option>
					<Option value="americas">America</Option>
					<Option value="asia">Asia</Option>
					<Option value="europe">Europa</Option>
					<Option value="oceania">Oceania</Option>
				</SelectFilter>
			</FilterContainer>
			<CountryContainer>
				{countryListFiltered.map(country => 
					<Country key={v4()} darkMode={darkMode}>
						<CountryImg src={country.flags.png}/>
						<CountryInfo>
							<CountryName>{country.name.common}</CountryName>
							<CountryDetails  darkMode={darkMode}>
								<Details>Population: <DetailSpan>{country.population}</DetailSpan></Details>
								<Details>Region: <DetailSpan>{country.region}</DetailSpan></Details>
								<Details>Capital: <DetailSpan>{country.capital}</DetailSpan></Details>
							</CountryDetails>
						</CountryInfo>
					</Country>
				)}
			</CountryContainer>
		</MainContainer>
	</>
	);
};

const fetchCountryData = async(param,setCountryList,setCountryListFiltered) =>{
	const url = (param==="")? URL_BASE : SEARCH_BY_REGION+param;
    const response = await fetch(url);
    const data = await response.json();
    setCountryList(data);
    setCountryListFiltered(data);
};
const filterByName = async(param,countryList,setCountryListFiltered) =>{
		const filteredList = countryList.filter(country => (country.name.common.toLowerCase().includes(param.toLowerCase())));
		setCountryListFiltered(filteredList);
	
	
};

export default Home;