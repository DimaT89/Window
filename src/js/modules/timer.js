const timer = (id, deadline) => {
	const addZero = (num) => {
		return num <= 9 ? '0' + num : num
	}

	const getTimeRemaining = (endTime) => {
		const t = Date.parse(endTime) - Date.parse(new Date()),
			second = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			days = Math.floor(t / (1000 * 60 * 60 * 24));

		return {
			'total': t,
			'second': second,
			'minutes': minutes,
			'hours': hours,
			'days': days,
		}
	}

	const setClock = (selector, endTime) => {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timerInterval = setInterval(updateClock, 1000);

		updateClock()

		function updateClock() {
			const t = getTimeRemaining(endTime)

			days.textContent = addZero(t.days)
			hours.textContent = addZero(t.hours)
			minutes.textContent = addZero(t.minutes)
			seconds.textContent = addZero(t.second)

			if (t.total <= 0) {
				days.textContent = '00'
				hours.textContent = '00'
				minutes.textContent = '00'
				seconds.textContent = '00'

				clearInterval(timerInterval)
			}
		}
	}
	setClock(id, deadline)

}

export default timer