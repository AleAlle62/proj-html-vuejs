import Vue from 'vue'
import App from './App.vue'
//bootstrap
import 'bootstrap';
// icone 
import { library } from '@fortawesome/fontawesome-svg-core'; 
// icone che si vogliono importare 
import { faCartShopping,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; 
import { faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

//icone che si vogliono importare
library.add(faCartShopping, faInstagram, faTwitter, faPinterest); 

Vue.component('FontAwesomeIcon', FontAwesomeIcon); 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
