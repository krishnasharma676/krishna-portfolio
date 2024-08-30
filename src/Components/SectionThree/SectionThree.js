import React from 'react'
import { HeadingTitle } from '../HeadingTitle/HeadingTitle'
import './SectionThree.css'
export const SectionThree = () => {
  return (
    <div className='bg-white'>
        <HeadingTitle heading="WHAT I DO"/>
            <div className='p-30 d-flex-cards'>
                <div className="card">
                <div className="icon-circle">
                    <i className="fas fa-laptop"></i>
                </div>
                <h3>Responsive Mobile</h3>
                <p>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.</p>
                </div>
                <div className="card">
                <div className="icon-circle">
                    <i className="fas fa-link"></i>
                </div>
                <h3>CSS Templates</h3>
                <p>We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.</p>
                </div>
                <div className="card">
                <div className="icon-circle">
                    <i className="fas fa-paper-plane"></i>
                </div>
                <h3>UI & UX Design</h3>
                <p>Credits go to Pixabay and Unsplash for images used in this free CSS website template.</p>
            </div>
        </div>
    </div>
  )
}
