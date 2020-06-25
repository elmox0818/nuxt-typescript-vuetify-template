import { configure, addDecorator } from '@storybook/vue';
import Vue from 'vue';
import Vuetify, { VApp, VContent } from 'vuetify/lib';

Vue.use(Vuetify);

addDecorator(() => ({
  vuetify: new Vuetify(),
  components: { VApp, VContent },
  template: `
<v-app>
  <v-main class="ma-5">
    <story/>
  </v-main>
</v-app>
`,
}));

const req = require.context('../stories', true, /\.stories\.ts$/);
const loadStories = () => {
  req.keys().forEach(req);
};

configure(loadStories, module);
