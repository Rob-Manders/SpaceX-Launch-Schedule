
import React, { useState, useEffect } from 'react'
import useAPI from '../../hooks/useAPI'
import Card_Section from './Card_Section'

export default function Card_Pad({ launchpad, ...props }) {
	const [pad, setPad] = useState({})

	useEffect(() => {
		useAPI(`launchpads/${launchpad}`)
			.then(pad => setPad(pad))
	}, [])

	return (
		<Card_Section section="launchpad">
			<p className="card__pad">{pad.name}</p>
		</Card_Section>
	)
}