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

        return{
            product,
            image,
            description,
            link,
            inStock,
            inventory,
            onSale
        }

        
    }
    
}) .mount('#app')