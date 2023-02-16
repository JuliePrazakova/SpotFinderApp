// Types
// Styles
import { Wrapper, Buttons } from './Search.styles'
import React, { useState } from 'react';




export type ISearchProps = Record<string, unknown>

const Search: React.FunctionComponent<ISearchProps> = () => {
  const [hidden, setHidden] = useState(true);

  function changeSearchbar(){
    if(hidden == true){
      setHidden(false);
    }else {
      setHidden(true);
    }
  }

    return (
        <div>
            <Buttons>
                <div className='type-button active'><button onClick={changeSearchbar}>One place</button></div>
                <div className='type-button'><button onClick={changeSearchbar}>Road trip</button></div>
            </Buttons>
        <Wrapper>
          {hidden && <OneWayBar />}
          {!hidden && <RoadTripBar />}
          
        </Wrapper>
        </div>
    )
}
const OneWayBar = () => (
  <div>
  <div className='label left' >Where
            <input type="text" placeholder="Location" className="search-left" />
          </div>
            <div className="vl"></div>

            <div className='label' >Where
              <select className="dropdown">
                <option value="date">Mo 12.2. </option>
                <option value="date">Tu 13.2.</option>
                <option value="date">We 14.2.</option>
                <option value="date">Thr 15.2. </option>
              </select>
            </div>
            <div className="vl"></div>

            <div className='label' >Radius
              <input type="text" placeholder="Radius" className="search-left" />
            </div>
              <div className="button">SEARCH</div>
              </div>
  )

  const RoadTripBar = () => (
    <div>
    <div className='label left' >Where
              <input type="text" placeholder="Location" className="search-left" />
            </div>
              <div className="vl"></div>
  
              <div className='label' >From
                <select className="dropdown">
                  <option value="date">Mo 12.2. </option>
                  <option value="date">Tu 13.2.</option>
                  <option value="date">We 14.2.</option>
                  <option value="date">Thr 15.2. </option>
                </select>
              </div>
              <div className="vl"></div>
  
              <div className='label' >To
              <select className="dropdown">
                <option value="date">Thr 15.2. </option>
                <option value="date">Tu 13.2.</option>
                <option value="date">We 14.2.</option>
                <option value="date">Thr 15.2. </option>
              </select>
            </div>
              <div className="vl"></div>
  
              <div className='label' >Radius
                <input type="text" placeholder="Radius" className="search-left" />
              </div>
                <div className="button">SEARCH</div>
                </div>
    )

export default Search