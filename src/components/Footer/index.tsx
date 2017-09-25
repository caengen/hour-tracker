import * as React from 'react';
import { Icon, Footer, Tab, Tabs, TabHeading, Text } from 'native-base';

export default class AppFooter extends React.Component<{}, {}> {
  render() {
    return (
      <Footer>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name='moon' /><Text></Text></TabHeading> } />
          <Tab heading={ <TabHeading><Icon name='clock' /><Text></Text></TabHeading> } />
          <Tab heading={ <TabHeading><Icon name='beer' /><Text></Text></TabHeading> } />
          <Tab heading={ <TabHeading><Icon name='settings' /><Text></Text></TabHeading> } />
        </Tabs>
      </Footer>
    );
  }
}
