import * as React from "react"
import { Wrapper } from './Footer.styles';

export interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {

        return (
        <Wrapper>
            <div className="footer">
                <div className="left-part">
                    <span>Copywrite @ 2022 SpotFinder</span>
                    <div>Privacy policy</div>
                </div>
                <span className='vl'></span>
                <div className='information'>
                    <span className='contact'>Contact us</span>
                    <div>
                        <i className="whatsapp icon"></i>
                        <div>+420 731 082 290</div>
                    </div>
                    <div>
                        <i className="envelope icon"></i>
                        <div>spotfinder@gmail.com</div>
                    </div>
                </div>
                <span className='vl'></span>
                <div className="icons">
                    <i className="facebook f large icon"></i>
                    <i className="instagram large icon"></i>
                </div>
            </div>
        </Wrapper>
        );
}

export default Footer;