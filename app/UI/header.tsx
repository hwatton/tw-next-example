import Link from "next/link"
import { ReactElement } from "react";

interface NavLinkWrapperProps {
    children: ReactElement
}

const NavLinkWrapper = ({children}: NavLinkWrapperProps) => {
    return (
    <div className={" hover:bg-white pt-2 pb-3 "}>
         {children}
        </div>
    )
}

export const Header = () => {
    return (
      <div className={"w-full flex gap-x-8 pl-2 bg-superLime"}>
     <NavLinkWrapper><Link href="/">Home</Link></NavLinkWrapper>
     <NavLinkWrapper><Link href="/addcolour">Add Colour</Link></NavLinkWrapper>
     <NavLinkWrapper><Link href="/datacomponent">Data Component</Link></NavLinkWrapper>
     <NavLinkWrapper><Link href="/flexComponent">Flex Component</Link></NavLinkWrapper>
          
      
      </div>
    );
}