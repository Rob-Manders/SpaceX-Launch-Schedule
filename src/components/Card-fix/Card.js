
export { default as Card_Core } from './Core/Card_Core'
export { default as Card_Date } from './Date/Card_Date'
export { default as Card_Header } from './Header/Card_Header'
export { default as Card_Launchpad } from './Launchpad/Card_Launchpad'
export { default as Card_Section } from './Section/Card_Section'

import React, { createContext } from 'react'

// import Card_Header from './Header/Card_Header'
// import Card_Date from './Date/Card_Date'
// import Card_Core from './Core/Card_Core'
// import Card_Launchpad from './Launchpad/Card_Launchpad'

export const CardContext = createContext()

export function Card({ children, launch, ...props }) {
	const {
		name,
		date_unix,
		date_precision,
		cores,
		launchpad,
		links
	} = launch	

	return (
		<CardContext.Provider value={{
			name,
			date_unix,
			date_precision,
			cores,
			launchpad,
			links
		}}>
			<div className="card">
				{children}
			</div>
		</CardContext.Provider>
	)
}