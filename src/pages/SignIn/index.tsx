import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const SignIn: React.FC = () => {
  const {signIn} = useAuth();

  function handleSignin() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSignin} />
    </View>
  );
};

export default SignIn;
