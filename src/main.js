import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// JOKE LANG TO GUYZ TINRY LANG 

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// /* add icons to the library */
library.add(faFacebook, faXTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub)

// /* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
