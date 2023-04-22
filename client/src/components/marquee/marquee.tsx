
import Marquee from "react-fast-marquee";

// import custom styles

import { MarqueeContainer} from "./marquee.styles";

const MarqueeDiv = () => {
    return (
       <MarqueeContainer>
          <Marquee gradient={false} speed={20}>
        <ul>
         <li>LightningPay has big dreams</li>
         <li>Leveraging Lightning. ⚡️</li>
         <li>Pay for Utility Bills with Bitcoin</li>
         <li>Lightning has big dreams 💫</li>
         <li>Pay for Utility Bills with Crypto</li>
         <li>LightningPay has big dreams</li>
         <li>Pay for Utility Bills with Crypto</li>
         <li>LightningPay has big dreams</li>
         <li>Pay for Utility Bills with Bitcoin</li>
         <li>LightningPay has big dreams</li>
         <li>Pay for Utility Bills with Crypto ⚡️</li>
       </ul>
      </Marquee>
       </MarqueeContainer>
    );
}

export default MarqueeDiv;