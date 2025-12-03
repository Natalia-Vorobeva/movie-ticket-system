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
		<div className='text-center'>
			<div className="flex flex-wrap gap-3">
				{
					dataBase.map((item, index) => {
						return <div key={`${item.day} ${item.month} ${item.year}/dataitem`} onClick={() => handleClickDate(item, index)}
							className={`min-w-[3rem] flex flex-wrap flex-col rounded-tr rounded-8 
  border-1 
  border-blue
  px-6 
  py-2
  hover:bg-blue
  transition ${indexActive === index ? ACTIVE_CLASS : indexActive > index ? PAST_CLASS : FUTURE_CLASS} `}>
							<span>{item.day}</span>
							<span className='pb-4'>{item.month} </span>
							<div className={`${sessionList?.length === 0 ? 'h-0' : ''} `}>
								{
									sessionList.map((el, index) => {
										return <p key={`${index}${index}/sessions`}
											onClick={() => handleClickSession(item, el, index)}
											className={` ${reservation.film === '' ? 'hidden' : ''} `}>{el}:00</p>
									})
								}
							</div>


						</div>
					})
				}
			</div>
		</div >
	);
}

export default Schedule