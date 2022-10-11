import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState("");

  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ borderColor: "gray", borderWidth: 1, width: 300, height: 70}}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Text></Text>
      <Button title='Press me!' onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
