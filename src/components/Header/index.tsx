import * as React from 'react';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

export default class AppHeader extends React.Component<{}, {}> {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Hour Tracker</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
