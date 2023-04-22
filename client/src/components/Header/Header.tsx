//import relevant modules
import {
         HeaderContainer, Logo, 
         LogoContainer, LogoHeader 
        } from "./Header.styles";

import { Link } from "react-router-dom";
import MarqueeDiv from "../marquee/marquee";

import { HeaderPropsType } from "../../types/types";



// header component
const Header: React.FC<HeaderPropsType> = ({marquee}) => {
     
     // building block
   return (
     <HeaderContainer>
       { marquee &&  <MarqueeDiv/>}
      <LogoContainer>
        <Link to="/" style={{
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            gap: "0.3rem"
        }}>  
            <Logo src="/assets/logo.png" alt="LightningPay icon"/>
            <LogoHeader>LightningPay</LogoHeader>
        </Link>
      </LogoContainer>
     </HeaderContainer>
   );
}

export default Header;

