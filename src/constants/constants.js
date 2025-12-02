
export const DAY_MILSEC = 24 * 60 * 60 * 1000
export const DAYS = ["Вск", "Пон", "Вт", "Сред", "Чтв", "Пят", "Суб"]
export const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
export const TODAY = new Date().getTime()
export const YESTERDAY = new Date().getTime() - DAY_MILSEC
const curr = new Date(TODAY)
const d = curr.getDate()
const m = MONTH[curr.getMonth()]
const y = curr.getFullYear()
export const CURRENT_DATE = { d, m, y }
export const MAX_OBJECT_DATES = 7
export const CURRENT_OBJECT = 1

export const INITIAL_SELECTED = {
	film: false,
	hall: false,
	date: false,
	hour: false,
	place: false,
	placeModal: false
}
export const INITIAL_RESERVATION = {
	film: '',
	hall: null,
	units: null,
	date: '',
	day: null,
	time: '',
	hour: null,
	places: []
}

export const INFO = 'Выберите, пожалуйста, фильм'
export const INFO_PAST = 'За прошедшие даты можно только посмотреть заполненность зала. Выберите фильм, сеанс и зал'
export const INFO_MODAL = 'РЕДАКТИРОВАТЬ ЗАПОЛНЕННОСТЬ ЗАЛА НЕЛЬЗЯ'

export const HALL_INFO = "В этом зале нет сеансов на этот фильм"

export const ACTIVE_CLASS = 'bg-orange cursor-pointer text-white'
export const FUTURE_CLASS = 'bg-night cursor-pointer text-silver-100'
export const PAST_CLASS = 'bg-black text-white cursor-pointer'

