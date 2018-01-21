import React from 'react'

import Item from './item.js'


export default ({match}) => {
	return (
		<div>
			<Item id="1" match={match} />
			<Item id="2" match={match} />
			<Item id="3" match={match} />
			<Item id="4" match={match} />
			<Item id="5" match={match} />
			<Item id="6" match={match} />
			<Item id="7" match={match} />
			<Item id="8" match={match} />
			<Item id="9" match={match} />
		</div>
	)
}