"use client";

import Logo from "@/app/utils/icons/Logo";
import Image from "next/image";
import { ListBullets, CaretUp } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Sidebar = () => {
    const pathname = usePathname()


    return (
        <section className="leftsidebar">
            <Logo />
            
            <div className="leftsidebar__top">
            <h2>Countries</h2>
            </div>
            <nav className="leftsidebar_nav">
            <div className="leftsidebar_nav__top">
            <ListBullets size={20} weight="bold" />
            <CaretUp size={20} weight="bold" />
            </div>
            <Link href="/congo" className={pathname === "/congo" ? "link-active" : ""}>Congo</Link>
            <Link href="/ethiopia" className={pathname === "/ethiopia" ? "link-active" : ""}>Ethiopia</Link>
            <Link href="/kenya" className={pathname === "/kenya" ? "link-active" : ""}>Kenya</Link>
            <Link href="/somalia" className={pathname === "/somalia" ? "link-active" : ""}>Somalia</Link>
            <Link href="/south-sudan" className={pathname === "/south-sudan" ? "link-active" : ""}>South Sudan</Link>
            <Link href="/sudan" className={pathname === "/sudan" ? "link-active" : ""}>Sudan</Link>
            </nav>
        </section>
    );
}

export default Sidebar;
