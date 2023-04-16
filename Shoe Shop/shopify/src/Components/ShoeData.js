import React from 'react'
import '../Components/Shoe.css'
import RatingStar from '../Images/StarRating.png'


const ShoeData = (props) => {

    return (
        <>
            <div className={props.cardSection}>
                <div className='info-card'>
                    <h2 className='shoe-name'>{props.shoename}</h2>
                    <p className='abt-shoe'>{props.abtshoe}</p>
                    <p className='price'>{props.shoeprice}  <span className='rating'><img src={RatingStar} className='star' alt='shoeess' /> {props.rating}</span></p>
                </div>
                <img src={props.shoeimage} alt='some shoe' className={props.individualShoe} />
            </div>
        </>
    )
}

export default ShoeData
