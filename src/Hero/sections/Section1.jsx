import React from 'react'
import sideImage from '../../assets/imagesgallery.png'

function Section1() {
  return (
      <>
        <div className='section1'>
            <div className='section1-wrapper'>
                <h1>Staffing Perfected. <br />Efficiency Elevated.</h1>
                <p>GuruAI's AI-powered platform connects you with <br />
                <span>proactive assistants</span> poised to revolutionize your business.</p>
            </div>
            <div className='section1-wrapper img-wrapper'>
                <img src={sideImage} alt="image_gallery" />
            </div>
        </div>
        <div className='style-top'></div>
        <div className='style-bottom'></div>
        <div className='style-bottom-fade'></div>
    </>
  )
}

export default Section1