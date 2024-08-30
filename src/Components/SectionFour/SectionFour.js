import React from 'react'
import { HeadingTitle } from '../HeadingTitle/HeadingTitle'
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'
import image5 from '../../images/image5.jpg'
import "./SectionFour.css"
export const SectionFour = () => {
    const portfolioImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
      ];
    return (
        <div className="section-four">
            <HeadingTitle heading="PORTFOLIO" />
            <div className="portfolio-grid">
                {portfolioImages.map((image, index) => (
                    <div key={index} className="portfolio-item">
                        <img src={image} alt={`Portfolio ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}
