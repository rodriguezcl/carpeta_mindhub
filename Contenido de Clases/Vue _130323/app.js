const { createApp } = Vue

createApp({
    data() {
        return {
            primerPropiedad: "Hola Mundo!",
            arrayNumeros: [],
            valorInput: 0,
        }
    },
    // created() {
    //     this.primerPropiedad = "Se creo la app"
    //     console.log(this.primerPropiedad);
    // },
    methods: {
        agregarNumero() {
            this.arrayNumeros.push(this.valorInput)
            this.valorInput = 0
            console.log(this.arrayNumeros);
        }
    }
}).mount("#app")
