/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useEffect, useRef } from 'react';
import {
  Button,
} from 'react-native';
import RNBootSplash from "react-native-bootsplash";


import { AppContainer } from '@src/AppContainer';
import { NavigationActions, withNavigation } from 'react-navigation';

interface HeaderProps {
  onPress: () => void
}

const Header = (props: HeaderProps) => {
  return <Button title="Test" onPress={props.onPress} />
}

const App = () => {
  const appContainerRef = useRef(null);

  const onHeaderPress = () => {
    appContainerRef.current.navigator.dispatch(
      NavigationActions.navigate({ routeName: "Home" })
    );
  }

  useEffect(() => {
    RNBootSplash.hide(); // immediate
    RNBootSplash.hide({ duration: 250 }); // fade
  }, [])

  return (
    <Fragment>
      <Header onPress={onHeaderPress} />
      <AppContainer ref={appContainerRef} />
    </Fragment>
  );
}

export default App;
