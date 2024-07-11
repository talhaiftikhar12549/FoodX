import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartvalue: [],
    totalprice: 0,
    totalquantity: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const cartData = action.payload;
            const existingItem = state.cartvalue.find((itm) => itm.id === cartData.id);
            if (!existingItem) {
                // Adding a new item to the cart
                state.cartvalue.push({
                    id: cartData.id,
                    name: cartData.name,
                    description: cartData.description,
                    price: cartData.price,
                    quantity: 1 // Initialize quantity for the new item

                });
                state.totalquantity += 1;
                state.totalprice += cartData.price;
                //state.totalquantity
                // existingItem.quantity

                // console.log(state.totalquantity)
//debugger
            } else {
                // Incrementing the quantity of an existing item
                existingItem.quantity += 1;
                existingItem.price = existingItem.quantity * cartData.price
                state.totalprice += cartData.price;
                state.totalquantity += 1;
            }
            // state.totalquantity =state.totalquantity+ existingItem.quantity
        },

        totalprice: (state) => {
            state.cartvalue.map((prs) => (state.totalprice.push(prs.price)))

        },
        incItem: (state, action) => {
            const {id, price} = action.payload;
            const currentitem = state.cartvalue.find((itm) => itm.id === id)
            const firstval = (currentitem.price / currentitem.quantity)
            currentitem.quantity += 1
            currentitem.price = firstval * currentitem.quantity
            state.totalprice += firstval;
            state.totalquantity += 1;
        },


        decItem: (state, action) => {
            const {id, price} = action.payload
            const currentitem = state.cartvalue.find((itm) => itm.id === id)
            const firstval = (currentitem.price / currentitem.quantity)
            if (currentitem.quantity > 1) {
                currentitem.quantity -= 1
                currentitem.price = firstval * currentitem.quantity
                state.totalprice -= firstval;
                state.totalquantity -= 1;
            } else if (currentitem.quantity == 1) {
                const deleteItem = state.cartvalue.findIndex(item => item.id === id)

                state.cartvalue.splice(deleteItem, 1);
                state.totalquantity -= 1;
                state.totalprice -= firstval;
            }

        }
    },
});

export const {addtocart, incItem, decItem, totalprice} = cartSlice.actions;

export default cartSlice.reducer;
