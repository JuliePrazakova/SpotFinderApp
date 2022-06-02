// Types
// Styles
import { Wrapper, Summary } from './OrderSection.styles';
import * as React from "react";
import {useState} from "react";

export interface IOrderSectionProps {
    price: number
}


const OrderSection: React.FunctionComponent<IOrderSectionProps> = (props) => {
    const [selectedOption, setSelectedOption] = useState<String>();
    const [selectedTour, setSelectedTour] = useState<String>();

    // This function is triggered when the select changes
    const optionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
    };
    const tourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedTour(value);
    };
    var totalPrice
    if(selectedOption){
         totalPrice = props.price* (+selectedOption);
    }


    return (
        <>
        <Wrapper>
            <span>
                <div className='vl'>
                    <div className='label left' >
                        <div>Date</div>
                         <input type="date" id="start" name="trip-start"
                                value="2018-07-22"
                                min="2018-01-01" max="2018-12-31" />
                    </div>

                    <div className='label' >
                        <div>Guests</div>
                        <select onChange={optionChange}  className="dropdown"  >
                            <option value="0" >Add guests </option>
                            <option value="1" >1 </option>
                            <option value="2">2</option>
                            <option value="3" >3</option>
                            <option value="4" >4 </option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className='label right' >
                        <div>Time</div>
                        <select className="dropdown">
                          <option value="date">11:00 </option>
                          <option value="date">14:30</option>
                        </select>
                    </div>

                    <div className='label' >
                        <div>Tour</div>
                        <select className="dropdown" onChange={tourChange}>
                            <option value="Long sledge">Long sledge </option>
                            <option value="Short sledge">Short sledge</option>
                        </select>
                   </div>
                </div>
            </span>
            <div className='label' >
                <div>Name</div>
                <input type="text" placeholder="Firstname" className="firstname" />
                <input type="text" placeholder="Lastname" className="name" />
            </div>
            <div className='label' >
                <div>Mail</div>
                <input type="email" placeholder="example@gmail.com" className="search-left" />
            </div>
            <div className='label' >
                <div>Mobile</div>
                <input type="text" placeholder="1 541 252 3827" className="search-left" />
            </div>

        </Wrapper>
            <Summary>
                <div>
                    <div>{selectedOption} x {selectedTour}</div>
                    <div>{props.price}</div>
                </div>
                <div className='summary-part'>
                    <div>Total:</div>
                    <div> {totalPrice}</div>
                </div>
                <div className="button">RESERVE</div>
            </Summary>
        </>
    );

}

export default OrderSection;