import * as React from 'react';
import Iframe from 'react-iframe';

import {
    Container,
    Row,
    Column,
    Center,
} from '../../../Common/components/Layout/index';

import { decorationProps } from './index';

export default class Footer extends React.PureComponent {
	render() {
        const linkMsg = chrome.i18n.getMessage('translateOurApp');
        // const titleMsg = chrome.i18n.getMessage('attentionPlease');

		return (
			<Container>
                <Column>
                    {/* <Row>
                        <Center>
                            <h3>
                                {titleMsg}
                            </h3>
                        </Center>
                    </Row> */}

                    <Row>
                        <Center>
                            <p>
                                <a
                                    href="https://goo.gl/forms/uWbvB9tsbOrbaXmz2"
                                    target="_blank"
                                >
                                    {linkMsg}
                                </a>
                            </p>
                        </Center>

                    </Row>

                    <Row>
                        <Center>
                            <Iframe
                                src="https://ghbtns.com/github-btn.html?user=artem-solovev&repo=gloc&type=star&count=true"
                                {...decorationProps.githubFrame}
                            />
                        </Center>
                    </Row>
                </Column>
            </Container>
		);
	}
}
