import * as React from 'react';
import Iframe from 'react-iframe';

import { colors } from '../../../../theme/colors';
import {
	Container,
	Row,
	Column,
	Center,
} from '../../../Common/components/Layout/index';
import { Text } from '../../../Common/components/Text/index';
import { Anchor } from '../../../Common/components/Anchor/index';
import appConfig from '../../../Common/helpers/appConfig';


import { decorationProps } from './index';

export default class Footer extends React.PureComponent {
	render() {
		const linkMsg = chrome.i18n.getMessage('translateOurApp');
		// const titleMsg = chrome.i18n.getMessage('attentionPlease');

		return (
			<Container>
				<Column>
					<Row>
						<Column>
							<Row>
								<Center>
									<Iframe
										src='https://ghbtns.com/github-btn.html?user=artem-solovev&repo=gloc&type=star&count=true'
										{...decorationProps.githubFrame}
									/>
								</Center>
							</Row>

							<Row>
								<Center>
									<Anchor
										href='https://goo.gl/forms/uWbvB9tsbOrbaXmz2'
										target='_blank'
										color={colors.grey900}
									>
										{linkMsg}
									</Anchor>
								</Center>

							</Row>
						</Column>
						<Column>
							<Row>
								<Center>
									<Anchor
										href={appConfig.paypalUrl}
										target='_blank'
										color={colors.grey900}
									>
										Paypal
									</Anchor>
								</Center>
							</Row>
							<Row>
								<Center>
									<Anchor
										href={appConfig.opencollectiveUrl}
										target='_blank'
										color={colors.grey900}
									>
										Open collective
									</Anchor>
								</Center>
							</Row>
						</Column>
					</Row>



					<Row>
						<Center>
							<Text>
								Made by <Anchor href='http://artemsolovev.com/' target='_blank' color={colors.pink400}>Artem Solovev</Anchor>
							</Text>
						</Center>
					</Row>
				</Column>
			</Container>
		);
	}
}
