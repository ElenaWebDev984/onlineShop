import logo from './assets/img/logo.svg'
import cart from './assets/img/cart.svg'


export const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <img src={cart} alt=""/>
        </div>
    )
}