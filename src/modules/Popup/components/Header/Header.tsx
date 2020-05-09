import * as React from 'react';

import {
    Container,
    Row,
    Column,
    Center,
} from '../../../Common/components/Layout/index';
import { Text } from '../../../Common/components/Text/index';
import { Header, Type } from '../../../Common/components/Header/index';
import { colors } from '../../../../theme/colors';

// import { decorationProps } from './index';

export default class Footer extends React.PureComponent {
    onSettingsClick() {
        chrome.tabs.create({url: 'chrome://extensions/?options=' + chrome.runtime.id});
    }

	render() {
        const gloc = chrome.i18n.getMessage('shortName');
        const github = chrome.i18n.getMessage('github');

		return (
			<Container color={colors.grey200}>
                <Column>
                    <Header type={Type.H2}>
                        <img
                            src='img/icon128.png'
                            width='50'
                            style={{
                                verticalAlign: 'middle',
                                marginRight: '2px',
                            }}
                        />

                        <Text color={colors.grey900}>
                            {github}
                        </Text>

                        <Text color={colors.pink400}>
                            {gloc}
                        </Text>

                    </Header>
                    <Text>Version: 8.2.4</Text>
                </Column>

                <Column>
                    <div
                        onClick={this.onSettingsClick}
                        style={{
                            textAlign: 'right',
                            float: 'right',
                            marginTop: '15px',
                            cursor: 'pointer',
                        }}
                    >
                        <svg fill="#989898" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                            />
                        </svg>
                    </div>
                </Column> 
            </Container>
		);
	}
}
