import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styled from '@emotion/native';

interface Props {}

const App = ({}: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionDescription>Step One</SectionDescription>
              <SectionDescription>
                Edit <HighLight>App.js</HighLight> to change this screen and
                then comback to see your edits.
              </SectionDescription>
            </SectionContainer>

            <SectionContainer>
              <SectionDescription>See Your Changes</SectionDescription>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>

            <SectionContainer>
              <SectionDescription>Debug</SectionDescription>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>

            <SectionContainer>
              <SectionDescription>Learn More</SectionDescription>
              <SectionDescription>
                Read the docs to discover what to do next:
              </SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default App;

const ScrollView = styled.ScrollView`
  background-color: ${Colors.lighter};
`;

const Body = styled.View`
  background-color: ${Colors.white};
`;

const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 0 24px 0 24px;
`;

const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const HighLight = styled.Text`
  font-weight: 700;
`;
