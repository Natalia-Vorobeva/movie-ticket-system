function InfoMessage({
	info, 
	infoPast
}) {

	return (
		<div className={`h-12 text-red text-[1.5rem] pt-4 leading-[1.1]`}>{infoPast} {info}</div>
	)
}

export default InfoMessage