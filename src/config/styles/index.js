import { StyleSheet } from 'react-native';

export const colors = {
  black: '#141215',
  yellow: '#ffe529',
  white: '#ffffff',
  lightGray: '#e8eef4',
  darkGray: '#7f7f7f',
};

export const fontSizes = {
  title: 20,
  default: 16,
};

export const commonStyles = StyleSheet.create({
  mapContainer: {
    margin: 20,
    padding: 10,
    height: 300,
    backgroundColor: colors.black,
    elevation: 10,
    borderRadius: 10,
  },
  mapView: {
    flex: 1,
  },
  mapTitle: {
    fontSize: fontSizes.title,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  mapAddress: {
    fontSize: fontSizes.default,
    color: colors.yellow,
    marginTop: 10,
  },
});
