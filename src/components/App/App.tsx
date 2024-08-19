import React, { useState } from "react";
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/About";
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Avatar from '@/assets/app-image.svg';

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <div>
                <img width={100} height={100} src={avatarPng} alt="" />
            </div>
            <div>
                <img width={100} height={100} src={avatarJpg} alt="" />
            </div>
            <div>
                <Avatar className={classes.icon} width={50} height={50} />
            </div>
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