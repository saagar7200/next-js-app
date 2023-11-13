import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h2>Help-desk</h2>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>Tickets</Link>
    </nav>
  );
}
