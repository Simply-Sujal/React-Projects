import React from 'react'
import '../Components/Highlight.css'
import HighlightImage from '../Images/hightlightimg.png'

const Highlights = () => {
  return (
    <>
      <div className='highlight-maincontainer'>
        <img src={HighlightImage} alt="Nike shoe Img" className='highlight-image' />
        <div className='highlight-abt'>
          <h3 className='topic-1'>Highlights</h3>
          <h2 className='topic-2'>Nike Air With
            <br /><span className='topic-3'>Limitless Choices</span></h2>
          <p className='abt-shoes'>Our purpose is to move the world forward. We take action by building community,protecting our planet and increasing access to sport.</p>
          <button className='explore-btn1'>Explore More</button>
        </div>
      </div>
    </>
  )
}

export default Highlights
