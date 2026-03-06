function BasketItem (props) {
    const {
        id,
        title,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity= Function.prototype,
        decQuantity= Function.prototype,
    } = props

    return  <li className="collection-item">
        {title} 
        <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i> 
        {quantity}
        <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i>
         x {price}руб  = {price*quantity}руб 
        <span className="secondary-content" onClick = {() => removeFromBasket(id)} >
            <i className="material-icons basket-delete">close</i>
        </span>
    </li>
}

export default BasketItem 