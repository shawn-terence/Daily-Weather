
// @ts-nocheck
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Image } from "@nextui-org/react";
import "@/styles/All.css"
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import { useState } from "react";

export const Navbar = ({ city, setCity }) => {
  const [search, setSearch] = useState(city);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    setCity(search);
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Enter city"
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      className="md:w-96 "
      onChange={handleSearchChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearchSubmit();
      }}
    />
  );

  return (
    <NextUINavbar id="Navbar" maxWidth="xl" position="static" className="">
      <NavbarContent id="NavBrand" className="basis-1/3 sm:row-start-1" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Image
              alt="logo"
              className="mr-40"
              width={50}
              height={50}
              src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-07-512.png"
            />
            <p className="font-bold text-inherit">Daily Weather</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 basis-1/5 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent id="NavContent" className="flex basis-1/3  justify-center">
        <NavbarItem>{searchInput}</NavbarItem>
        <NavbarItem><ThemeSwitch /></NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

export default Navbar;

// import { Button } from "@nextui-org/button";
// import { Kbd } from "@nextui-org/kbd";
// import { Link } from "@nextui-org/link";
// import { Input } from "@nextui-org/input";
// import { Image } from "@nextui-org/react";
// import {
//   Navbar as NextUINavbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { link as linkStyles } from "@nextui-org/theme";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";
// import {
//   TwitterIcon,
//   GithubIcon,
//   DiscordIcon,
//   HeartFilledIcon,
//   SearchIcon,
// } from "@/components/icons";
// import { Logo } from "@/components/icons";
// import { useState } from "react";

// export const Navbar = ({city,setCity}) => {
//   const [search,setSearch]=useState(city)
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//   };

//   const handleSearchSubmit = () => {
//     setCity(search);
//   };
//   const searchInput = (
//     <Input
//       aria-label="Search"
//       classNames={{
//         inputWrapper: "bg-default-100",
//         input: "text-sm",
//       }}
//       labelPlacement="outside"
//       placeholder="Search a city"
//       startContent={
//         <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
//       }
//       type="search"
//       className="w-96"
//       onChange={handleSearchChange}
//       onKeyDown={(e) => {
//         if (e.key === "Enter") handleSearchSubmit();
//       }}
//     />
//   );

//   return (
//     <NextUINavbar maxWidth="xl" position="static" >
//       <NavbarContent className="basis-1/3 sm:basis-full" justify="start">
//         <NavbarBrand className="gap-3 max-w-fit ">
//           <Link
//             className="flex justify-start items-center gap-1"
//             color="foreground"
//             href="/"
//           >
//             <Image alt="logo" className="mr-40" width={50} height={50} src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-07-512.png" />
//             <p className="font-bold text-inherit">Daily Weather</p>
//           </Link>
//         </NavbarBrand>
//         <div className="hidden lg:flex gap-4 basis-1/5 justify-start ml-2">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               <Link
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </Link>
//             </NavbarItem>
//           ))}
//         </div>
//       </NavbarContent>
  
//       <NavbarContent
//         className="hidden sm:flex basis-1/5 sm:basis-full justify-center"
//         justify="center"
//       >
//         <NavbarItem >{searchInput}</NavbarItem>
//         <NavbarItem><ThemeSwitch /></NavbarItem>
//       </NavbarContent>
  
//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         <Link isExternal href={siteConfig.links.github}>
//           <GithubIcon className="text-default-500" />
//         </Link>
//         <ThemeSwitch />
//         <NavbarMenuToggle />
//       </NavbarContent>
  
//       <NavbarMenu>
//         {searchInput}
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                       ? "danger"
//                       : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
//   };
