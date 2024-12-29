import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (

      <Link className={"flex flex-row gap-x-2 uppercase items-center"} href={'/'}>
          <div className={"w-[50px] h-[50px] relative"}>
              <Image src={'/images/logo-blue.png'} fill style={{objectFit: "contain"}} alt={"logo"}/>
          </div>
          <div className={"flex flex-col"}>
              <span>
              Chrysolite
              </span>
              <span>
              Foundation
          </span>
          </div>
      </Link>
  )
}

export default Logo