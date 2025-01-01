import * as React from 'react';

import {
  Container,
  Row,
  Column,
} from '../../../Common/components/Layout/index';
import { Text } from '../../../Common/components/Text/index';
import { Header } from '../../../Common/components/Header/index';
import { colors } from '../../../../theme/colors';

export default class Body extends React.PureComponent {
  render() {
    const disclaimer =
      'Github does not have a function to view the total number of ' +
      'lines of code in the project but we can to compute an approximation ' +
      'of that data (LOC: Lines of Code) through the GitHub Statistics API. ' +
      'Some glitches may occur, such as negative loc or "unavailable data" for many reasons';

    return (
      <Container color={colors.grey200}>
        <Column>
          <Row>
            <Header>Disclaimer</Header>
          </Row>
          <Row>
            <Text>{disclaimer}</Text>
          </Row>
        </Column>
      </Container>
    );
  }
}
