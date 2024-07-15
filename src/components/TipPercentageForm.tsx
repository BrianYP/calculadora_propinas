import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
    {
        id: 'tip-10',
        value: 0.10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: 0.20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: 0.50,
        label: '50%'
    },
];

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propinas:</h3>

            <form>
                {tipOptions.map(tipOption => (
                    <div className="flex gap-2" key={tipOption.id}>
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        {/*El + que le ponemos es para indicarle que sera un numero después de tratarlo como string*/}
                        <input type="radio" id={tipOption.id} name="tip" value={tipOption.value} onChange={e => setTip(+e.target.value)}
                        checked={tipOption.value === tip}/>
                    </div>
                ))}
            </form>
        </div>
    );
}
