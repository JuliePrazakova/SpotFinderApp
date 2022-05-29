import * as React from "react"
import { Wrapper } from './Footer.styles';

export interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {

        return (
        <Wrapper>
            <div className="footer">
                <div>
                    <p>Copywrite @ 2022 SpotFinder</p>
                </div>
                <span className='vl'></span>
                <div className='information'>
                    <span className='contact'>Contact us</span>
                    <div>+420 731 082 290</div>
                    <div>spotfinder@gmail.com</div>
                </div>
            </div>
        </Wrapper>
        );
}

export default Footer;