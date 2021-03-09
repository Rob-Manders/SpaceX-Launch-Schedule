
import React from 'react'

import Date from '../Date'
import Card_Core from './Card_Core'
import Card_Pad from './Card_Pad'

export default function Card({ launch, ...props }) {
	const {
		name,
		date_unix,
		date_precision,
		cores,
		launchpad
	} = launch

	return (
		<div className="card">
			<h2 className="card__title">{name}</h2>
			<Date value={{date_unix, date_precision}} />
			<Card_Core cores={cores} />
			<Card_Pad launchpad={launchpad} />
		</div>
	)
}