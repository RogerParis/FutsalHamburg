import I18n from 'react-native-i18n';
import en from './strings/en.json';
import de from './strings/de.json';

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
  en,
  de
};

export default I18n;
