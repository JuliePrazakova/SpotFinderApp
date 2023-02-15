// Types
// Styles
import { Wrapper, Buttons } from './Search.styles'
import * as React from 'react'



export type ISearchProps = Record<string, unknown>

const Search: React.FunctionComponent<ISearchProps> = () => {

    return (
        <div>
            <Buttons>
                <div className='type-button active'>One place</div>
                <div className='type-button'>Road trip</div>
            </Buttons>
        <Wrapper>
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

            <div className='label' >Who
                <select className="dropdown">
                    <option value="0">Add guests </option>
                    <option value="1">1 </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4 </option>
                </select>
            </div>
              <div className="button">SEARCH</div>
        </Wrapper>
        </div>
    )
}

export default Search