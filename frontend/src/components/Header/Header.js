import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {

    const user = {
        name: 'John', 
    };

    const cart = {
        totalCount: 10
    };

    const logout = () => {}

  return (
    <header className={classes.header}>
        <div className={classes.container}>
            <Link to="/" className={classes.logo}>
                Comida Ya!
            </Link>
            <nav>
                <ul>
                    {
                        user? (
                        <li className={classes.menu_container}>
                            <Link to="/profile">{user.name}</Link>
                            <div className={classes.menu}>
                                <Link to="/profile">Perfil</Link>
                                <Link to="/orders">Ordenes</Link>
                                <a onClick={logout}>Cerrar Sesion</a>
                            </div>
                        </li> 
                        ) : ( 
                        <Link to="/login">Iniciar Sesion</Link>
                        )
                    }
                    <li>
                        <Link to="/cart">
                            Carro 
                            {cart.totalCount>0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
