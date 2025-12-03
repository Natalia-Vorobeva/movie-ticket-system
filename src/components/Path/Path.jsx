function Path({
	selectedFilm,
	selectedHall,
	reservation,
	selectedDate,
	selectedPlace,
	currentArrPlaces,
	handleBookSeats,
	ticket,
	activeDate
}) {

	const time = reservation.date + " , " + reservation.time

	return (
		<div className={`flex w-full flex-wrap ${ticket ? 'justify-end' : 'justify-start'} gap-1 pb-4  pt-10`}>
			{/* фильм */}
			<button className={`relative z-2 min-w-[15vw] h-[3rem] text-silver-200 bg-black  text-ellipsis line-clamp-2 ${selectedFilm ? 'rounded-md border-green-300 border-2' : 'rounded-md border-silver-700 border-2 animate-pulse'}`}>{reservation.film == "" ? 'Выберите фильм' : reservation.film}</button>

			{/* кнопка дата */}
			<button className={`relative z-2 min-w-[15vw] h-[3rem] text-silver-200 bg-black  text-ellipsis line-clamp-2  ${reservation.film == '' ? ' opacity-0' : ''}  ${selectedDate ? 'rounded-md border-green-300 border-2' : 'bg-black rounded-md border-silver-700 border-2'}`}>{reservation.date == "" || reservation.time == "" ? 'Дата и сеанс' : time}</button>

			{/* кнопка зал  */}
			<button className={`relative z-2 min-w-[15vw] h-[3rem] text-silver-200 bg-black  text-ellipsis line-clamp-2  ${reservation.film == '' ? ' opacity-0' : ''} ${selectedHall ? 'rounded-md border-green-300 border-2' : 'rounded-md border-silver-700 border-2'}`}>Зал {reservation.hall}</button>

			{/* кнопка места */}
			<button className={`relative z-2 min-w-[15vw] h-[3rem] text-silver-200 bg-black  text-ellipsis line-clamp-2  ${reservation.film == '' || activeDate == false ? ' opacity-0' : ''}  ${selectedPlace ? 'rounded-md border-green-300 bg-black border-2' : 'rounded-md border-silver-700 border-2'}`}>{!selectedPlace ? 'Места в зале' : currentArrPlaces.toString()}</button>

			{/* кнопка забронировать */}
			<button onClick={handleBookSeats} className={`relative z-2 min-w-[15vw] h-[3rem] text-silver-200 bg-black  text-ellipsis line-clamp-2  ${reservation.film == '' || activeDate == false ? ' opacity-0' : ''} 	${selectedFilm && selectedHall && selectedPlace && selectedDate
				? 'rounded-md border-blue border-2' : 'bg-black rounded-md border-silver-700 border-2'}`}>{ticket ? 'Понятно' : 'Забронировать'}</button>
		</div >
	)
}

export default Path