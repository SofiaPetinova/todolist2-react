import CartListItem from "./CartListItem";

export default function CartList(props){
    return(
        <div>
            <h2>Cart list</h2>
            {props.list.filter(el => el.cart).map(el => <CartListItem key={el.id} task={el}/>)}
        </div>


    )
}