new Vue({
    el : '#app',
    data : {
        titulo : 'Mi lista de compras',
        nuevoProducto : {nombre:'',comprado:false},
        productos : [
            {nombre : 'Platanos', comprado : false },
            {nombre : 'Manzanas', comprado : false },
            {nombre : 'Peras', comprado : false },
        ]
    },
    methods: {
        agregarProducto: function () {
            this.productos.push(Object.assign({},this.nuevoProducto));
            this.nuevoProducto.nombre = '';
        }
    }
});