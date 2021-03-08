
import React, { useState, useEffect } from 'react'
import useAPI from '../../hooks/useAPI'

import Card_Title from './Card_Title'
import Card_Date from './Card_Date'
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
			<Card_Title name={name} />
			<Card_Date value={{date_unix, date_precision}} />
			<Card_Core cores={cores} />
			<Card_Pad launchpad={launchpad} />
		</div>
	)
}