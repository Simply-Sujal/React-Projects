import React from 'react'
import '../Components/Shoe.css'
import ShoeData from './ShoeData'
import shoeInfo from '../Components/shoeInfo.json'



const Shoes = () => {
    return (
        <>
            <div className='shoe-section'>
                <h2 className='shoe-title'>Popular Sales</h2>

                <div className='main-shoe-section'>
                    {
                        shoeInfo.map((element, id) => {
                            return (
                                <ShoeData
                                    key={id}
                                    shoename={element.shoename}
                                    abtshoe={element.abtshoe}
                                    shoeprice={element.shoeprice}
                                    rating={element.rating}
                                    shoeimage={element.shoeimage}
                                    cardSection={element.cardSection}
                                    individualShoe={element.individualShoe}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Shoes
