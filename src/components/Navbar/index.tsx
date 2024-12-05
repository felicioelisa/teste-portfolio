"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.jpg"
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
            label: "Formacao"
        },
        {
            url: "/jobs",
            label: "Experiencias"
        }
    ]

    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean> (false);

    return (
        <header>
            <nav className="navbar">
                <Link href="/">
                    <Image src={logo} width={100} height={100} alt="logo" className="logo"/>
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

                <button className="btn-bar-mobile" onClick={ () => setOpenMenu(!openMenu) } >
                    { openMenu ? <FaXmark /> : <FaBars />}
                </button>

                <button className="btn-default">
                    Contatar
                </button>
            </nav>
        </header>
    );
}