'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 max-w-2xl mx-auto z-50", className)}>
       <Menu setActive={setActive}>
        <Link href={'/'}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>

        <MenuItem  setActive={setActive} active={active} item="Our Products">
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/product">All Products</HoveredLink>
        <HoveredLink href="/product">Basic Theory</HoveredLink>
        <HoveredLink href="/product">Advance Composition</HoveredLink>
        <HoveredLink href="/product">Song Writing</HoveredLink>
        <HoveredLink href="/product">Music Production</HoveredLink>
        </div>
        </MenuItem>
        <Link href={'/contact'}>
        <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
       </Menu>
    </div>
  )
}
