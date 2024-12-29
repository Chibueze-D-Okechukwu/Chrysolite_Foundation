"use client"
import Logo from "@/components/Logo";
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";

const links = [
    {
        title: "Home",
        url: "/",
        isExternal: false,
        isButton: false
    },
    {
        title: "About Us",
        url: "/about-us",
        isExternal: false,
        isButton: false
    },
    {
        title: "Merchandise",
        url: "https://www.whatsapp.com/catalog/2349127480531/?app_absent=0",
        isExternal: true,
        isButton: false
    },
    {
        title: "Blog",
        url: "https://medium.com/@thechrysolitefoundation",
        isExternal: true,
        isButton: false
    },
    {
        title: "Contact Us",
        url: "https://api.whatsapp.com/send/?phone=2349127480531&text&type=phone_number&app_absent=0",
        isExternal: true,
        isButton: false
    },
    {
        title: "Donate",
        url: "/donate",
        isExternal: false,
        isButton: true
    },
]

const Navbar = () => {
    const [navVisible, setNavVisible] = useState(false)
  return (
      <nav>
          <div
              className={"flex relative items-center justify-between px-[30px] sm:px-[50px] lg:px-[100px] py-[20px]"}>
              <div>
                  <Logo/>
              </div>
              <ul className={"hidden md:flex gap-x-4 font-medium items-center"}>
                  <NavLinks/>
              </ul>
              <div onClick={() => setNavVisible(!navVisible)} className={"md:hidden text-primary cursor-pointer"}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                  </svg>
              </div>
          </div>
          {
              navVisible && (
                  <ul className={"md:hidden flex flex-col gap-y-2 items-center"}>
                      <NavLinks/>
                  </ul>
              )
          }
      </nav>
  )
}

const NavLinks = () => {
    const pathname = usePathname()
    return (
        <>
            {
                links.map((appLink) => (
                    <li key={appLink.title}>
                        <div className={appLink.isButton ? "primary-btn" : ""}>
                            <Link href={appLink.url} target={appLink.isExternal ? "_blank" : undefined} className={appLink.isButton ? "text-white" : pathname === appLink.url ? "font-semibold text-gray-900" : "text-gray-700 hover:text-gray-900"}>
                                {appLink.title}
                            </Link>
                        </div>
                    </li>
                ))
            }
        </>
    )
}

export default Navbar