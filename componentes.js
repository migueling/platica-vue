Vue.component('ListaProductos', {
    props: ['productos'],
    template: '' +
        '<ul>'+
            '<li v-for="p in productos" v-bind:class="{ \'comprado\': p.comprado }">'+
                '<div class="checkbox">'+
                    '<label>'+
                        '<input type="checkbox" v-model="p.comprado"> {{ p.nombre }}'+
                    '</label>'+
                '</div>'+
            '</li>'+
        '</ul>'
});