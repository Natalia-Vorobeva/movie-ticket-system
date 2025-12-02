import { useState } from "react";
import { ACTIVE_CLASS, PAST_CLASS, FUTURE_CLASS } from "../../constants/constants";

function Schedule({
	dataBase,
	indexActive,
	sessionList,
	reservation,
	handleClickDate,
	handleClickSession
}) {

	return (
		<div className='w-full flex justify-center gap-3 flex-wrap text-center'>
			{
				dataBase.map((item, index) => {
					return <div key={`${item.day} ${item.month} ${item.year}/dataitem`}>
						<div onClick={() => handleClickDate(item, index)}
							className={`min-w-[3rem] flex flex-col ${indexActive === index ? ACTIVE_CLASS : indexActive > index ? PAST_CLASS : FUTURE_CLASS} `}>
							<span>{item.day}</span>
							<span className='pb-4'>{item.month} </span>
							<div>
								{
									sessionList?.map((el, index) => {
										return <p key={`${index}${index}/sessions`}
											onClick={() => handleClickSession(item, el, index)}
											className={`${reservation.film === '' ? 'hidden' : ''} `}>{el}:00</p>
									})
								}
							</div>
						</div>
					</div>
				})
			}
		</div>
	);
}

export default Schedule