const {createApp, ref, computed, reactive, toRefs} = Vue

const app = createApp({
    setup(){
       
        const cart = ref([]) 
        const premium = ref(true)

        function updateCart(id){
            cart.value.push(id)
        }
        
        function removeCart(id) {
            const index = cart.value.indexOf(id)
             if (index > -1) {
            cart.value.splice(index, 1)
            }
        }
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])

    

        return{
        
            cart,
            premium,
            details,
            updateCart,
            removeCart
        }        
    } 
}) 
app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)

app.mount('#app')