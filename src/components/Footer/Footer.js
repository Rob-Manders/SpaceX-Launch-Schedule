
import React from 'react'
import Icon_GitHub from '../icons/Icon_GitHub'
import Icon_LinkedIn from '../icons/Icon_LinkedIn'

export default function Footer({ ...props }) {
	return (
		<footer>
			<p>Created by Rob Manders using the <a href="https://github.com/r-spacex/SpaceX-API">SpaceX API</a>.</p>

			<div className="social">
				<Icon_GitHub href="https://github.com/Rob-Manders/SpaceX-Launch-Schedule" aria-label="github" />
				<Icon_LinkedIn href="https://www.linkedin.com/in/robert-manders-925b88202/" aria-lavel="linked in"/>
			</div>

			<p className="disclaimer">
				This is a third party project which is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Space Exploration Technologies Corp (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners.
			</p>
		</footer>
	)
}