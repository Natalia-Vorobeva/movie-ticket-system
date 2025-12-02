import { useState } from "react";
import { CITY_LIST } from "../../constants/cinemaСhain/cities/citiesConstants";
import Dropdown from "../Dropdown/Dropdown"


function Header({ handleClickCity, handleClickCinema, currentCinema, currentCity, cinemaList }) {

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
		<div className="w-full flex justify-right  h-[4rem]">
			<ul className="h-[3rem] flex gap-4">
				<li>
					<p className="text-white h-full text-[1.2rem] pt-2" href="#">Россия</p>
				</li>
				<li>
					<Dropdown
						isOpen={isOpenCities}
						data={CITY_LIST}
						currentChoice={currentCity}
						handleClick={onClickCity}
						toggleDropdown={toggleDropdownCity}
					/>
				</li>
				<li className="h-[2rem]">
					<Dropdown
						isOpen={isOpenCinema}
						data={cinemaList}
						currentChoice={currentCinema}
						handleClick={onClickCinema}
						toggleDropdown={toggleDropdownCinema}
					/>
				</li>
			</ul>
		</div >
	)
}

export default Header