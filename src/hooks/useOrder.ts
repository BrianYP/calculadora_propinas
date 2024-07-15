import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    //función para agregar items al carrito y calcular su total
    const addItem = (item: MenuItem) =>{
        
        //Buscamos si el elemento se encuentra repetido para evitar que se repita y solo aumente el quantity
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            //toma una copia de lo que ya hay pero en cantidad, y toma lo que ya se tiene haciendo una copia y lo incrementa en 1
            const updateOrder = order.map(orderItem => orderItem.id === item.id ?
                {...orderItem, quantity : orderItem.quantity + 1}: orderItem)
                setOrder(updateOrder)
        }else{
            //que muestre todo el producto completo
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        //Traemos todos los elementos con un id diferente al que pasamos en nuestra función
        setOrder(order.filter( item => item.id !== id))
    }

    const placeOrder = () =>{
        setOrder([])
        setTip(0)
    }
    
    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}

//Generygs en typeScript para asignarle un tipo de dato