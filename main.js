const {createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Comfortable footwear')

        return{
            product,
            description
        }

        
    }
    
}) .mount('#app')