import Image from "next/image";
import Logo from "./utils/icons/logo";
import { ListBullets, CaretUp } from "@phosphor-icons/react/dist/ssr";


export default function Home() {
  return (
    <main className="main">
      

      <div className="leftsidebar">
        <Logo />
        <div className="leftsidebar__top">
          <h2>Countries</h2>
        </div>
        <nav className="leftsidebar_nav">
        <div className="leftsidebar_nav__top">
          <ListBullets size={20} weight="bold" />
          <CaretUp size={20} weight="bold" />
        </div>
          <a href="/page">Congo</a>
          <a href="/page">Ethiopia</a>
          <a href="/page">Kenya</a>
          <a href="/page">Somalia</a>
          <a href="/page">South Sudan</a>
          <a href="/page">Sudan</a>
        </nav>
      </div>

    </main>
  );
}
