import react from "react";

export default function Orders(props){
    const { order } = props

    if(order.length < 0){
        return (
            <p>'No Orders Yet!'</p>
        )
    }

    return (
        order.map(ord => {
            return(
                <div>
                    <p> {ord['name']}'s Order: </p>
                    <p> Size: {ord['size']}</p>
                    <p> Toppings Selected: {ord.toppings.length >0 ? ord.toppings.join(', '): 'No Toppings Selected!'}</p>
                    <p>Special Instructions: {ord['special'].length > 0 ? ord['special']: 'No Special Instructions'}</p>
                </div>
            )
        })
    )
}