import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item =>(
              <MenuItems
              key={item.id}
              item={item}
              addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem} />

              <TipPercentageForm
                setTip={setTip}
                tip={tip} />

              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}/>
            </>
          ) : (
            <p className="text-center">La orden está vacía</p> // Aquí podrías agregar un mensaje para cuando no hay elementos en la orden
          )}
        </div>
      </main>
    </>
  )
}

export default App
