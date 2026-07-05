const {createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Comfortable footwear')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th')

        return{
            product,
            image,
            description,
            link
        }

        
    }
    
}) .mount('#app')