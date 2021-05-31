import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import appConfig from '../../../Common/helpers/appConfig';

export default class PopupPage extends React.PureComponent {
    render() {
        const gloc = chrome.i18n.getMessage('shortName');
        const github = chrome.i18n.getMessage('github');

        return (
            <Grid
                container
                direction="row"
                justify="space-between"
            >
                <Grid item>
                    <img
                        src='img/icon128.png'
                        width='50'
                        style={{
                            verticalAlign: 'middle',
                            marginRight: '2px',
                        }}
                    />
                </Grid>

                <Grid item>
                    <Typography
                        variant={'h5'}
                    >
                        {github}
                        &nbsp;
                        {gloc}
                    </Typography>

                    <Typography
                        variant={'caption'}
                    >
                        Version: {appConfig.appVersion}
                    </Typography>
                </Grid>

                <Grid item>
                    header
				</Grid>
            </Grid>
        );
    }
}
