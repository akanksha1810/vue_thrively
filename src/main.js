import Vue from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import ContentComponent from './components/ContentComponent.vue';

new Vue({
    el: '#app',
    components: {
        'header-component': { render: h => h(HeaderComponent) },
        'main-content': { render: h => h(ContentComponent) }
    }
});
