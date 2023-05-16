import React, { useState } from "react";
import { View, ImageBackground, Image, Text, StyleSheet, PixelRatio, Switch, Button, ScrollView } from "react-native";
import CountryPicker, { CountryModalProvider } from "../src/";
import { Row } from "../src/Row";
import { DARK_THEME } from "../src/CountryTheme";

const backgroundImage = { uri: 'https://mediaim.expedia.com/destination/1/1bafbe8af6a39642290e865ba36f2dd1.jpg' };
const overlayImage = { uri: 'https://i.ibb.co/6Z5vHK7/primary-logo.png' };

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayImage: {
    width: '125%',
    height: '125%',
    resizeMode: 'contain',
    marginTop: 250
  },
  container: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 400,
  },
  welcome: {
    fontSize: 17,
    textAlign: "center",
    margin: 5,
  },
  instructions: {
    fontSize: 10,
    textAlign: "center",
    color: "#888",
    marginBottom: 0,
  },
  data: {
    maxWidth: 250,
    padding: 10,
    marginTop: 7,
    backgroundColor: "#ddd",
    borderColor: "#888",
    borderWidth: 1 / PixelRatio.get(),
    color: "#777",
  },
});

export default function LanguageTrans() {
  const [countryCode, setCountryCode] = useState()
const [country, setCountry] = useState(null)
const [withCountryNameButton, setWithCountryNameButton] = useState(false)
const [withCurrencyButton, setWithCurrencyButton] = useState(false)
const [withFlagButton, setWithFlagButton] = useState(true)
const [withCallingCodeButton, setWithCallingCodeButton] = useState(false)
const [withFlag, setWithFlag] = useState(true)
const [withEmoji, setWithEmoji] = useState(true)
const [withFilter, setWithFilter] = useState(true)
const [withAlphaFilter, setWithAlphaFilter] = useState(false)
const [withCallingCode, setWithCallingCode] = useState(false)
const [withCurrency, setWithCurrency] = useState(false)
const [withModal, setWithModal] = useState(true)
const [visible, setVisible] = useState(false)
const [dark, setDark] = useState(false)
const [fontScaling, setFontScaling] = useState(true)
const [disableNativeModal, setDisableNativeModal] = useState(false)
const onSelect = country => {
  setCountryCode(country.cca2)
  setCountry(country)
}
const switchVisible = () => setVisible(!visible)


  return (
    <View style={styles.containerBackground}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
      >
        <View style={styles.overlayContainer}>
          <Image
            source={overlayImage}
            style={styles.overlayImage}
          />
        </View>
        <CountryModalProvider>
          <ScrollView contentContainerStyle={styles.container}>
            {/* Rest of your code */}
            <CountryPicker
                theme={dark ? DARK_THEME : {}}
                {...{
                  allowFontScaling: fontScaling,
                  countryCode,
                  withFilter,
                  excludeCountries: ['FR'],
                  withFlag,
                  withCurrencyButton,
                  withCallingCodeButton,
                  withCountryNameButton,
                  withAlphaFilter,
                  withCallingCode,
                  withCurrency,
                  withEmoji,
                  withModal,
                  withFlagButton,
                  onSelect,
                  disableNativeModal,
                  preferredCountries: ['US', 'GB'],
                  modalProps: {
                    visible,
                  },
                  onClose: () => setVisible(false),
                  onOpen: () => setVisible(true),
                }}
              />
            <Button
              title={'Next'}
              onPress={switchVisible}
            />
          </ScrollView>
        </CountryModalProvider>
      </ImageBackground>
    </View>
  );
}
