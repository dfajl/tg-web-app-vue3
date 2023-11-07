import { createApp } from 'vue';
import App from './App.vue';
import Components from '@/components/exportComponents.js'; //глобальная регистрация компонентов
import router from './router/router';
import { store } from './store/store';
import VueTelegram from 'vue-tg';

const app = createApp(App);

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

const vuetify = createVuetify({
	components,
	directives,
});

Components.forEach((component) => {
	app.component(component.name, component);
});

app.use(vuetify).use(store).use(router).use(VueTelegram).mount('#app');
