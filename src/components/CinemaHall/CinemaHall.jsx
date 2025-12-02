function CinemaHall({
	ticket,
	id,
	reservation,
	currentDbPlaces,
	units,
	serialNumber,
	className,
	overlay,
	hallInfo,
	activeHall,
	openModalPlaces,
	currentArrPlaces,
	setCurrentArrPlaces
}) {

	const place = (e, data) => {
		const unit = e.target
		const state = currentArrPlaces.includes(data)
		if (state) {
			unit.classList.remove('bg-orange')
			currentArrPlaces.filter(el => el !== data)
			setCurrentArrPlaces(prev => prev.filter(el => el !== data))
		} else {
			unit.className += " bg-orange"
			setCurrentArrPlaces(prev =>  [...prev, data])
		}
	}

	return (
		<section id={id} className={`relative ${className} ${activeHall == id ? '' : 'hidden'}`}>
			{
				hallInfo !== ""  && <div className={`absolute z-10 inset-0 bg-black z-10 opacity-50`}></div>
			}
			{
				ticket == true && <div className={`absolute z-10 inset-0 bg-black z-10 opacity-50`}></div>
			}
			{
				overlay && <div onClick={() => reservation.film !== "" && reservation.day !== null && openModalPlaces(units, serialNumber)}
					className="absolute z-5 inset-0"></div>
			}
			<h2 className="pr-1 pt-2 text-right text-[2rem]">Зал {serialNumber}</h2>
			<div className="grid grid-cols-10 border-t-2 border-t-blue mt-2 shadow-custom-inset">
				{units &&
					Array.from({ length: units }).map((_, index) => {

						let bg = ''
						currentDbPlaces !== undefined &&
							currentDbPlaces.forEach(function (elem) {
								elem == index + 1 ? bg = 'bg-silver-500 pointer-events-none' : ''
							})
						currentArrPlaces.forEach(function (elem) {
							elem == index + 1 ? bg = 'bg-silver-400' : ''
						})
						return <p key={`${index}/cinemahallitem/${serialNumber}`} id={`${index + 1}/cinemahallitem/${serialNumber}`}
							onClick={(e) => place(e, index + 1)}
							className={`cursor-pointer border-b border-r text-[.5rem] text-center ${overlay ? 'text-silver-300' : 'text-black text-center'} ${bg}`}>
							<span>{index + 1}</span>

						</p>
					})
				}
			</div>
		</section >
	)
}

export default CinemaHall