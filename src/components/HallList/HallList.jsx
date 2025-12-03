import InfoMessage from "../InfoMessage/InfoMessage"

function HallList({
	halls,
	visibleHall,
	reservation,
	info
}) {

	return (
		<div>
			<h4 className='text-[2rem] italic py-6'> Выбрать зал:	</h4>
			<div className="flex gap-4 pb-2">
				{
					halls.length &&
					Array.from({ length: halls.length }).map((_, index) => {
						return <p key={`${index}/hallitem/${index + 1}`}
							id={`${index + 1}/hallitem/${index + 1}`}
							className={`text-[2rem] flex ${reservation.hall == index + 1 ? 'underline' : 'cursor-pointer hover:text-blue'}`}
							onClick={() => visibleHall(index + 1)}>
							Зал {index + 1}
						</p>
					})
				}
			</div>
			<InfoMessage info={info} />
		</div>
	)
}

export default HallList