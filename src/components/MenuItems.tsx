import type { MenuItem } from "../types"
import { Dispatch } from "react"
import type { OrderActions } from "../reducers/orderReducer"

type MenuItemProps = {
    item:  MenuItem
    //le decimos que tipo de dato va a ser addItem
    dispatch: Dispatch<OrderActions>
}

//atajo para crear componentes rápidos : rfc
export default function MenuItems({item, dispatch} : MenuItemProps) {
  return (
    <button
    className="border-2
     border-teal-400 hover:bg-teal-200
     w-full p-3 flex justify-between"
     onClick={() => dispatch({type: 'add-item', payload:{item}})}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    
    </button>
  )
}
