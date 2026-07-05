const {createApp, ref, computed} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('Comfortable footwear')
      
        const link = ref('https://www.camt.cmu.ac.th')
      
        const inventory = ref(100)
       
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', size: 'S,M,L', image:'./assets/images/socks_green.jpg', quantity: 50 , onSale: true},
            {id: 2235, color: 'blue',  size: 'S,M,L',  image:'./assets/images/socks_blue.jpg', quantity: 0, onSale: false}
        ])
        const selectedVariant = ref(0)
        const cart = ref(0)
        
        function addToCart(){
            cart.value +=1
        }
        const title = computed(() =>{
            let title = brand.value + ' ' + product.value 

            if(onSale.value){
                title += ' is on sale'
            }

            return title
        })
     
        function toggleStock(){
            inStock.value = !inStock.value
        }
        function updateVariant(index){
            selectedVariant.value = index;
        }

        const image = computed(() =>{
            return variants.value[selectedVariant.value].image
        })
         const inStock = computed(() =>{
            return variants.value[selectedVariant.value].quantity
        }) 

       const onSale = computed(() => {
            return variants.value[selectedVariant.value].onSale
        })

        return{
            title,
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
            toggleStock,
            updateVariant
        }

        
    }
    
}) .mount('#app')