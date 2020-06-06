import * as React from 'react';

import {
	Container,
	Row,
	Column,
} from '../../../Common/components/Layout/index';
import { Text } from '../../../Common/components/Text/index';
import { TextList, Type } from '../../../Common/components/TextList/index';
import { colors } from '../../../../theme/colors';

export default class Body extends React.PureComponent {
	render() {
		const headerMsg = chrome.i18n.getMessage('indexCountsFrom');
		const list = [
			chrome.i18n.getMessage('indexProjectPage'),
			chrome.i18n.getMessage('indexUserPage'),
			chrome.i18n.getMessage('indexSearchPage'),
			chrome.i18n.getMessage('indexTrandingPage'),
			chrome.i18n.getMessage('indexEtc'),
		];

		return (
			<Container color={colors.grey200}>
				<Column>
					<Row>
						<Text>{headerMsg}</Text>
					</Row>

					<Row>
						<TextList
							type={Type.Ol}
							list={list}
						/>
					</Row>
				</Column>
			</Container>
		);
	}
}
