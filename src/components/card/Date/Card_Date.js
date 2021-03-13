
import React, { useState, useEffect, useContext } from 'react'
import { CardContext } from '../Card'

export default function Card_Date({ ...props }) {
	const { date_unix, date_precision } = useContext(CardContext)
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')

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