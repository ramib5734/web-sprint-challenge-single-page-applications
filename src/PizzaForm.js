import react from 'react'

export default function PizzaForm(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked: value;
        change(name, valueToUse)
    }

    return (
        <div>
            <p>{errors['name-input']}</p>
            <form id='pizza-form' onSubmit={onSubmit}>
                <label> Your Name
                    <input
                        value = {values['name-input']}
                        onChange = {onChange}
                        name = 'name-input'
                        type = 'text'
                        id = 'name-input'
                    />
                </label>
                <label> Pizza Size 
                    <select 
                        name= 'size-dropdown'
                        onChange = {onChange}
                        value = {values['size-dropdown']}
                        id = 'size-dropdown'
                    >
                        <option hidden value = {null}>- Select a Size</option>
                        <option value = 'small'> Small </option>
                        <option value = 'medium'> Medium </option>
                        <option value = 'large'> Large </option>
                    </select>
                </label>
                <div>
                    <h4> Toppings </h4>
                    <label> Pepperoni 
                        <input
                            type = 'checkbox'
                            name = 'pepperoni'
                            checked = {values.pepperoni}
                            onChange = {onChange}
                        />
                    </label>
                    <label> Mushrooms 
                        <input
                            type = 'checkbox'
                            name = 'mushroom'
                            checked = {values.mushroom}
                            onChange = {onChange}
                        />
                    </label>
                    <label> Onions
                        <input
                            type = 'checkbox'
                            name = 'onion'
                            checked = {values.onion}
                            onChange = {onChange}
                        />
                    </label>
                    <label> Chicken 
                        <input
                            type = 'checkbox'
                            name = 'onion'
                            checked = {values.onion}
                            onChange = {onChange}
                        />
                    </label>
                </div>
                <label> Special Requests
                    <input 
                        value = {values['special-text']}
                        type = 'text'
                        name = 'special-text'
                        id = 'special-text'
                        onChange = {onChange}
                    />
                </label>
                <button id='order-button' disabled={disabled}> Submit Order </button>
            </form>
        </div>
    )
}