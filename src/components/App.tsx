import React, { useState } from "react";
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <br />
            <Link to={'/about'}>О нас</Link>
            <br />
            <Link to={'/shop'}>Магазин</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>Увеличить</button>
            <Outlet />
        </div>
        
    );
}