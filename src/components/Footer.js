
import React from 'react'
import Icon_GitHub from './icons/Icon_GitHub'
import Icon_LinkedIn from './icons/Icon_LinkedIn'

export default function Footer({ ...props }) {
	return (
		<footer>
			<div className="social">
				<Icon_GitHub href="https://github.com/Rob-Manders/SpaceX-Launch-Schedule" />
				<Icon_LinkedIn href="https://www.linkedin.com/in/robert-manders-925b88202/" />
			</div>

			<p className="disclaimer">
				This is a third party project which is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Space Exploration Technologies Corp (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners.
			</p>
		</footer>
	)
}