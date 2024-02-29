import React from "react";
import Link from "next/link";
import { BadgeCheck, MenuSquare, UserRound, WalletCards } from "lucide-react";
const Sidebar = () => {
  return (
    <div className="flex flex-col -z-10 text-white w-56 h-screen gap-2 p-3">
      <Link className="flex gap-3" href="/">
        <div className="bg-orange-500 rounded-full text-white p-6">
          Examen final
        </div>
      </Link>
      <div className="flex flex-col  text-white  h-screen gap-4 p-3">
        <Link className="flex gap-3" href="/cardGenerator">
          <MenuSquare />
          <p>Card Generator</p>
        </Link>
        <Link className="flex gap-3" href="/digitalClock">
          <UserRound />
          <p>Digital Clock</p>
        </Link>
        <Link className="flex gap-3" href="/drillinInfo">
          <BadgeCheck />
          <p>Drilling Info</p>
        </Link>
        <Link className="flex gap-3" href="/">
          <WalletCards />
          <p>Galeria de cartas</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
