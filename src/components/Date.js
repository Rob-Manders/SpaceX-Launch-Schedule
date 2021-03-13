
import React, { useState, useEffect } from 'react'

export default function Card_Date({ value, ...props }) {
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')

	const { date_unix, date_precision } = value

	function parseDate() {
		const rawDate = new Date(date_unix * 1000)

		setDate(rawDate.toLocaleDateString())
		setTime(() => {
			const splitTime = rawDate.toLocaleTimeString().split(':')
			splitTime.pop()
			return splitTime.join(':')
		})
	}

	useEffect(() => {
		parseDate()
	}, [])

	return (
		<p className="date">{date} {date_precision === 'hour' && <span>{time}</span>}</p>
	)
}