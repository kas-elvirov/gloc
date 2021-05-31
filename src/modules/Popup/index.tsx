import * as React from 'react';

import Grid from '@material-ui/core/Grid';

export default class PopupPage extends React.PureComponent {
	render() {
		return (
			<Grid
				container
				direction="column"
			>
				<Grid item>
					header
				</Grid>

				<Grid item>
					header
				</Grid>

				<Grid item>
					header
				</Grid>
			</Grid>
		);
	}
}
