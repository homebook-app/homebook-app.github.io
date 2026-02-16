import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
  theme: {
    defaultTheme: 'homebook',
    themes: {
      homebook: {
        dark: false,
        colors: {
          primary: '#1f8f73',
          secondary: '#0f5f4a',
          background: '#f5f7fb',
          surface: '#ffffff'
        }
      }
    }
  }
});
