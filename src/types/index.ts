export type MenuItem ={
    id: number,
    name: string,
    price: number
}

//type para las ordenes
export type OrderItem = MenuItem & {
    quantity: number
}
