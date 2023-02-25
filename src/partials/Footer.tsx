import * as React from "react";
import { useIntl } from "react-intl";
import messages from "../Messages";

import {
  Wrapper,
  Box,
  Line,
  LeftPart,
  MiddlePart,
  Icons,
} from "./Footer.styles";

const Footer: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Box>
        <LeftPart>
          <span>{intl.formatMessage(messages.copywrite)}</span>
          <div>{intl.formatMessage(messages.privacyPolicy)}</div>
        </LeftPart>
        <Line></Line>
        <MiddlePart>
          <span>{intl.formatMessage(messages.contactUs)}</span>
          <div>
            <i className="whatsapp icon"></i>
            <div>{intl.formatMessage(messages.phoneNumber)}</div>
          </div>
          <div>
            <i className="envelope icon"></i>
            <div>{intl.formatMessage(messages.email)}</div>
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
