import Link from "next/link";

export interface NavItemInterface {url, label}

export default function NavItem()
{
    return ( 
        <li className="nav-item">
            <Link href={url} className="nav-link">{label}</Link>
        </li>
    )
}