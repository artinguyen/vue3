import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


/* code from our Firebase console */
var firebaseConfig = {
  apiKey: "AIzaSyBh2DwRsqKF6eZcNzuL9qQUaBEdgFpcL9Q",
          authDomain: "smooth-verve-245207.firebaseapp.com",
          projectId: "smooth-verve-245207",
          storageBucket: "smooth-verve-245207.appspot.com",
          messagingSenderId: "216250815087",
          appId: "1:216250815087:web:458b5105165ef7c67c339a",
          measurementId: "G-5D815ZW3TL"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app1);


try {
  const docRef = await addDoc(collection(db, "accounts"), {
    'id': 1,
    'username' : 'abc'
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')
