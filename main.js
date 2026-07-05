const {createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Comfortable footwear')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', size: 'S,M,L', image:'./assets/images/socks_green.jpg'},
            {id: 2235, color: 'blue',  size: 'S,M,L',  image:'./assets/images/socks_blue.jpg'}
        ])
        const cart = ref(0)
        
        function addToCart(){
            cart.value +=1
        }
        function  updateImage(variantImage){
            image.value = variantImage
        }
        function toggleStock(){
            inStock.value = !inStock.value
        }

        return{
            product,
            image,
            description,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            cart,
            addToCart,
            updateImage,
            toggleStock
        }

        
    }
    
}) .mount('#app')