
import React from 'react'

export default function Card({ launch, index }) {
	return (
		<div className="card">
			<h2>Launch {index + 1}</h2>
			<p>Flight Number: {launch.flight_number}</p>
		</div>
	)
}