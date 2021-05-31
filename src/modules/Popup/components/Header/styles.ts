import { Theme,  createStyles } from '@material-ui/core';

export default (theme: Theme): ReturnType<typeof createStyles> => createStyles({
	card: {
		padding: theme.spacing(3),
	},
});
