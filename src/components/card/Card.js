
import React from 'react'

import Date from '../Date'
import Card_Header from './Card_Header'
import Card_Core from './Card_Core'
import Card_Pad from './Card_Pad'

export default function Card({ launch, ...props }) {
	const {
		name,
		date_unix,
		date_precision,
		cores,
		launchpad,
		links
	} = launch	

	return (
		<div className="card">
			<Card_Header patch={links.patch.small} name={name} />
			<Date value={{date_unix, date_precision}} />
			<Card_Core cores={cores} />
			<Card_Pad launchpad={launchpad} />
		</div>
	)
}