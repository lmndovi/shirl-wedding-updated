import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#home">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#location">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Location
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#rsvp">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  RSVP
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#gifts">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Gifts
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-center p-4">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-green-950 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-green-950 data-[focus]:outline-1 data-[focus]:outline-white">
            <Bars3Icon height={20} />
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className="w-full origin-top-right rounded-xl border border-black/5 b p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 bg-[#529864]"
          >
            <MenuItem>
              <a className="block data-[focus]:bg-green-500" href="#home">
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-green-500">
                  Home
                </button>
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-green-500" href="#location">
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-green-500">
                  Location
                </button>
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-green-500" href="#rsvp">
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-green-500">
                  RSVP
                </button>
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-green-500" href="#gifts">
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-green-500">
                  Gifts
                </button>
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
