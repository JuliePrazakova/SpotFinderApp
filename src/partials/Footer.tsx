import * as React from "react";
import {
  Wrapper,
  Box,
  Line,
  LeftPart,
  MiddlePart,
  Icons,
} from "./Footer.styles";

const Footer: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Box>
        <LeftPart>
          <span>Copywrite @ 2022 SpotFinder</span>
          <div>Privacy policy</div>
        </LeftPart>
        <Line></Line>
        <MiddlePart>
          <span>Contact us</span>
          <div>
            <i className="whatsapp icon"></i>
            <div>+420 731 082 290</div>
          </div>
          <div>
            <i className="envelope icon"></i>
            <div>spotfinder@gmail.com</div>
          </div>
        </MiddlePart>
        <Line></Line>
        <Icons>
          <i className="facebook f large icon"></i>
          <i className="instagram large icon"></i>
        </Icons>
      </Box>
    </Wrapper>
  );
};

export default Footer;
