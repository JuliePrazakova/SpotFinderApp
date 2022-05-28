import * as React from "react"
import map from "./map.png";
import { Wrapper } from './Header.styles';


const Map = () => {
        return (
            <Wrapper>
                <div className='map'>
                    <img className="img" src={map} alt="Map" />
                </div>
            </Wrapper>
        );
    }

export default Map;
