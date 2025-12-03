import { useState } from "react";
import { CITY_LIST } from "../../constants/cinemaСhain/cities/citiesConstants";
import Dropdown from "../Dropdown/Dropdown"


function Header({ handleClickCity, handleClickCinema, currentCinema, currentCity, cinemaList, ticket }) {

	const [isOpenCities, setIsOpenCities] = useState(false)
	const [isOpenCinema, setIsOpenCinema] = useState(false)

	const onClickCity = (city) => {
		setIsOpenCities(false)
		handleClickCity(city)
	}
	const toggleDropdownCity = () => {
		setIsOpenCities(!isOpenCities)
		setIsOpenCinema(false)
	}
	const onClickCinema = (city) => {
		setIsOpenCinema(false)
		handleClickCinema(city)
	}
	const toggleDropdownCinema = () => {
		setIsOpenCinema(!isOpenCinema)
		setIsOpenCities(false)
	}

	return (
		<div>
			<div className=" flex flex-wrap gap-4">
				{/* <div> */}
				<div className="text-[1.2rem] pt-2" href="#">Россия</div>
				{/* </div> */}
				<div className={`flex gap-4 ${ticket ? "" : ""}`}>
					<Dropdown
						isOpen={isOpenCities}
						data={CITY_LIST}
						currentChoice={currentCity}
						handleClick={onClickCity}
						toggleDropdown={toggleDropdownCity}
					/>
					{/* <Dropdown
						isOpen={isOpenCinema}
						data={cinemaList}
						currentChoice={currentCinema}
						handleClick={onClickCinema}
						toggleDropdown={toggleDropdownCinema}
					/> */}
				</div>
				<div>
					<Dropdown
						isOpen={isOpenCinema}
						data={cinemaList}
						currentChoice={currentCinema}
						handleClick={onClickCinema}
						toggleDropdown={toggleDropdownCinema}
					/>
				</div>
			</div>
		</div >
	)
}

export default Header