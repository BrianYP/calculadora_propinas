import type { MenuItem } from "../types"

type MenuItemProops = {
    item:  MenuItem
    //le decimos que tipo de dato va a ser addItem
    addItem: (item: MenuItem) => void
}

//atajo para crear componentes rápidos : rfc
export default function MenuItems({item, addItem} : MenuItemProops) {
  return (
    <button
    className="border-2
     border-teal-400 hover:bg-teal-200
     w-full p-3 flex justify-between"
     onClick={() => addItem(item)}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    
    </button>
  )
}
