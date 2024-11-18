import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Footer = () => {
  return (
    <div className=" bg-[#529864] p-4 text-white flex-col md:flex items-center">
      <div className="w-full flex justify-center items-center">
        {/* Desktop Nav */}
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col md:flex-row">
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
      </div>
    </div>
  );
};

export default Footer;
