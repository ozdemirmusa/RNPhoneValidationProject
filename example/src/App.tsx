import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import phonevalidation from 'rn-phonevalidatorproject';
let formatter="(05XX) XXX-XX-XX";

export default function App() {
  const [phone, setPhone] = useState('');
  const [icon, setIcon] = useState(false);
  const [format, setFormat] = useState(formatter);

  const control = () => {
    if (phonevalidation(phone)) {
      setIcon(false);
    } else {
      setIcon(true);
    }
  };
  const mask = text => {
    if (format[text.length - 1] === 'X') {
      setPhone(text);
    } else {
      let x = '';
      text = text.split('');
      x = text.pop();
      text = text.join('');
      text = text + format[text.length];
      setPhone(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.phone_title}>Telefon Numrası</Text>
      <View style={styles.phone}>
        <TextInput
          keyboardType="phone-pad"
          maxLength={format.length}
          placeholder={format}
          value={phone}
          style={styles.phone_input}
          onChangeText={text => mask(text)}
          onFocus={() => setPhone('')}
          onEndEditing={control}
        />
        <View style={styles.phone_icon_container}>
          {icon ? (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828665.png',
              }}
              style={styles.phone_icon}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone_title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  phone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone_input: {
    margin: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    padding: 10,
    fontSize: 25,
  },
  phone_icon_container: {
    width: 20,
  },
  phone_icon: {
    width: 20,
    height: 20,
  },
});


