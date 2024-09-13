import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCableCar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'

import { useState } from 'react'

import "./header.css"

export default function Header() {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions(prev=>{return {
            ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
        }})
    }
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Rooms</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCableCar}/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">A lifetime of discounts? Amazinnng.</h1>
                <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free EasyBooking account.</p>
                <button className='headerButton'>Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerSearchIcon'/>
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerSearchIcon'/>
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} 
                        to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false} ranges={date} className='date'/>}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerSearchIcon'/>
                        <span onClick={()=>setOpenOptions(!openOptions)} 
                        className='headerSearchText'>{`${options.adult} adult(s) ∙ ${options.children} childrens(s) ∙ ${options.room} room(s)`}</span>
                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className='optionText'>Adult</span>
                                    <div className="optionCounter">
                                        <button disabled={options.adult <= 1} className='optionCounterButton'
                                        onClick={()=>handleOption('adult', 'd')}>-</button>
                                        <span className='optionNumberButton'>{options.adult}</span>
                                        <button className='optionCounterButton' onClick={()=>handleOption('adult', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className='optionText'>Children</span>
                                    <div className="optionCounter">
                                        <button disabled={options.children <= 0} className='optionCounterButton' 
                                        onClick={()=>handleOption('children', 'd')}>-</button>
                                        <span className='optionNumberButton'>{options.children}</span>
                                        <button className='optionCounterButton' onClick={()=>handleOption('children', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className='optionText'>Room</span>
                                    <div className="optionCounter">
                                        <button disabled={options.room <= 1} className='optionCounterButton' 
                                        onClick={()=>handleOption('room', 'd')}>-</button>
                                        <span className='optionNumberButton'>{options.room}</span>
                                        <button className='optionCounterButton' onClick={()=>handleOption('room', 'i')}>+</button>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className='headerButton'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}