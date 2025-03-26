"use client"
<<<<<<< HEAD
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
export const CartContext = createContext({})

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        const updateCart = () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            setCart(cartItems);
        };
    
        updateCart(); // Initial load
    
        const interval = setInterval(updateCart, 1000); // Poll every second
    
        return () => clearInterval(interval);
    }, []);

    const subTotal = cart?.reduce((accumulator, cartItem) => accumulator + (cartItem?.price * cartItem?.quantity), 0)

    const grandTotal = subTotal - discount


    const addToCart = (item) => {

        const existingItem = cart.find(cartItem => cartItem?.productID === item?.productID)

        if (existingItem) {
            const newCart = cart?.filter(cartItem => cartItem?.productID !== item?.productID)

            localStorage.setItem("cart", JSON.stringify([...newCart, item]))
            setCart([item, ...newCart])

            toast?.error("Product already added")
=======
import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext({})

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const deliveryCharge = 60

    useEffect(()=>{
        const cartItems = JSON.parse(localStorage.getItem("cart"))
    
        setCart(cartItems || [])
    },[])

    const subTotal = cart?.reduce((accumulator, cartItem) => accumulator + (cartItem?.price * cartItem?.quantity), 0)

    const grandTotal = subTotal + deliveryCharge


    const addToCart = (item) =>{

        const existingItem = cart.find(cartItem => cartItem?.productID === item?.productID)

        if(existingItem){
            const newCart = cart?.filter(cartItem => cartItem?.productID !== item?.productID)

            localStorage.setItem("cart", JSON.stringify([...newCart, item]))
            setCart([item,...newCart])
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
            return
        }

        localStorage.setItem("cart", JSON.stringify([...cart, item]))
        setCart([item, ...cart])
<<<<<<< HEAD

        toast?.success("Product added to cart")
    }

    const removeFromCart = (id) => {
=======
    }

    const removeFromCart = (id) =>{
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
        const deletedCart = cart?.filter(item => item?.productID !== id)

        localStorage.setItem("cart", JSON.stringify(deletedCart))
        setCart(deletedCart)
    }

<<<<<<< HEAD
    const increaseQuantity = (id) => {
        const existingItem = cart.find(cartItem => cartItem?.productID === id)

        if (existingItem) {
=======
    const increaseQuantity = (id) =>{
        const existingItem = cart.find(cartItem => cartItem?.productID === id)

        if(existingItem){
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
            const index = cart.indexOf(existingItem)
            const newCart = [...cart]

            existingItem.quantity = existingItem?.quantity + 1

            newCart[index] = existingItem

            localStorage.setItem("cart", JSON.stringify([...newCart]))
            setCart([...newCart])
            return
        }
    }

<<<<<<< HEAD
    const decreaseQuantity = (id) => {
        const existingItem = cart.find(cartItem => cartItem?.productID === id)

        if (existingItem) {
            const index = cart.indexOf(existingItem)
            const newCart = [...cart]

            if (existingItem.quantity > 1) {
=======
    const decreaseQuantity = (id) =>{
        const existingItem = cart.find(cartItem => cartItem?.productID === id)

        if(existingItem){
            const index = cart.indexOf(existingItem)
            const newCart = [...cart]

            if(existingItem.quantity > 1){
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
                existingItem.quantity = existingItem?.quantity - 1
            }

            newCart[index] = existingItem

            localStorage.setItem("cart", JSON.stringify([...newCart]))
            setCart([...newCart])
            return
        }
    }

<<<<<<< HEAD
    const removeCart = () => {
        localStorage.removeItem("cart")
        setCart([])
    }

    const directAddToCart = async (productID, stock) => {

        if(!stock){
            return toast.error("Out of stock!")
        }

        const response = await axios.get(`https://api.abcpabnabd.com/api/v1/product-details/${productID}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        )

        const product = response?.data?.data

        const cartItem = {
            productID: productID,
            productName: product?.productID?.productName,
            price: product?.productID?.discountPrice || product?.productID?.price,
            productImg: product?.productID?.productImg,
            subCategory: product?.productID?.subCategoryID?.subCategoryName,
            quantity: 1,
        }

        if (product?.color?.length) {
            cartItem.color = product?.color[0]
        }

        addToCart(cartItem)

    }


=======
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
    const value = {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
<<<<<<< HEAD
        subTotal: subTotal,
        grandTotal: grandTotal,
        removeCart,
        directAddToCart,
        discount
=======
        subTotal: subTotal.toLocaleString(2),
        deliveryCharge,
        grandTotal: grandTotal.toLocaleString(2)
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;