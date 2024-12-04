import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.jpg"

export default function Navbar (){
    return (
        <header>
            <nav className="navbar">
                <Link href="/">
                    <Image src={logo} width={100} height={100} alt="logo" />
                </Link>

                <ul className="nav-items">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Projetos</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Formação</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Experiências</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}