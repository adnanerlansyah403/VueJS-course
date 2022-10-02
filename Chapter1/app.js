const app = new Vue({
    el: "#app",
    data: {
        maximum: 200,
        products: null,
    },
    mounted: () => {
        fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data
            console.log(this.products)
        });
    }
});