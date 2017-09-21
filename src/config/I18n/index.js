import I18n from 'react-native-i18n';
import en from './strings.en';
import de from './strings.de';

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
  en,
  de
};

export default I18n;
