import * as React from 'react';
import { StyleSheet } from 'react-native';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';
import { Container, Content } from 'native-base';

interface SceneProps {
  children?: any;
}

export default class Scene extends React.Component<SceneProps, {}> {
  render() {
    return (
      <Container style={styles.container}>
        <AppHeader />
        <Content>
          {this.props.children}
        </Content>
        <AppFooter />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: { }
});
