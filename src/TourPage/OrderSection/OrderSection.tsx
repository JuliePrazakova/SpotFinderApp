// Types
// Styles
import { Wrapper, Summary, Button } from './OrderSection.styles';
`
`
import * as React from 'react'
import {useState} from 'react'

export type IOrderSectionProps = Record<string, unknown>

export type Itour = {
    tour: string,
    price: string
}

const OrderSection: React.FunctionComponent<IOrderSectionProps> = () => {
    const [selectedOption, setSelectedOption] = useState<string>()
    const [selectedTour, setSelectedTour] = useState<Itour>({tour: '', price: ''})
    const [totalPrice, setTotalPrice] = useState<number>()

    // This function is triggered when the select changes
    const optionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        setSelectedOption(value)
    }

    const tourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        if(value==='Long sledge'){
            setSelectedTour({tour: value, price: '130'})
            setTotalPrice((+selectedTour.price))
            console.log(totalPrice)
        }else if(value==='Short sledge'){
            setSelectedTour({tour: value, price: '79'})
        }else{
            console.log('mistake')
        }

    }
    let total
    if(selectedOption && selectedTour){
       total= (+selectedTour.price) * (+selectedOption)
            document.getElementById('totalPrice')!.innerText = '$' + total.toString()
    }

    return (
        <>
        <Wrapper>
            <span className='box'>
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
                            <option value='0'>Add guests </option>
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
                            <option value='0'> Time </option>
                            <option value="date">11:00 </option>
                            <option value="date">14:30</option>
                        </select>
                    </div>

                    <div className='label' >
                        <div>Tour</div>
                        <select className="dropdown" onChange={tourChange}>
                            <option value="0">Tours </option>
                            <option value="Long sledge">Long sledge </option>
                            <option value="Short sledge">Short sledge</option>
                        </select>
                   </div>
                </div>
            </span>
            <span className='second-part'>
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
            </span>
        </Wrapper>
            <Summary>
                <div id='summary'>
                    <span className='title'>Summary:</span>

                    <div className='label'>People</div>
                    <span className='variable'>{selectedOption}</span>

                    <div className='vl'></div>

                    <div className='label'>Tour</div>
                    <span className='variable'>{selectedTour.tour}</span>

                    <div className='vl'></div>

                    <div className='label'>Price in $ per 1</div>
                    <span className='variable'>{selectedTour.price}</span>
                </div>
                <div className='summary-part'>
                    <div className='title'>Total:</div>
                    <div id='totalPrice' className='variable'> </div>
                </div>
            </Summary>
            <Button >RESERVE</Button>
        </>
    )

}

export default OrderSection