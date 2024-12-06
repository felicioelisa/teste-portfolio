"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png"
import NavItem, { NavItemInterface } from "../NavItem";
import "./index.css"
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar (){
    const items: NavItemInterface [] = [
        {
            url: "/",
            label: "Início"
        },
        {
            url: "/about",
            label: "Sobre"
        },
        {
            url: "/projects",
            label: "Projetos"
        },
        {
            url: "/graduation",
            label: "Formação"
        },
        {
            url: "/jobs",
            label: "Experiências"
        }
    ]

    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState <boolean> (false);

    return (
        <header>
            <nav className="navbar">
                <Link href="/" className="logo">
                { !openMenu ? <Image src={logo} width={0} height={0} alt="logo" /> : '' }
                </Link>

                <ul className={`nav-items ${openMenu ? 'open' : '' }` } >
                    {items.map((item, index)=>  (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                            isActive={pathname === item.url}
                        />
                    ))}
                </ul>

                <button className={`btn-bar-mobile ${openMenu ? 'open-btn-mobile' : '' }` } onClick={ () => setOpenMenu(!openMenu) } >
                    { openMenu ? <FaXmark /> : <FaBars />}
                </button>

                <button className={`btn-default ${openMenu ? 'close-btn-default' : '' }` }>
                    Contatar
                </button>
            </nav>
        </header>
    );
}