import React from 'react'
import './product.scss';
import image from '../../../assets/images/313036874_628129245765413_2454323726477110985_n.png';
import images from '../../../assets/images/328125994_1329615254559123_7615762011263076863_n.jpg';
import img from '../../../assets/images/328257450_711010973896783_5239478781888289608_n.jpg';

export default function Product() {
    return (
        <div className='product-background'>
            <div className='conatiner'>
                <div className='main-background-text'>
                    <h2>Shop Meta products</h2>
                    <span>The future of virtual reality and augmented reality is here.</span>
                    <div className='box-grid'>
                        <div className='box'>
                            <img src={image} alt="img" />
                            <div className='box-conatine'>
                                <p>Virtual reality</p>
                                <h3>Meta Quest</h3>
                                <div className='box-button'>
                                    <div className="button">
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <img src={img} alt="img" />
                            <div className='box-conatine'>
                                <p>Virtual reality</p>
                                <h3>Meta Quest</h3>
                                
                            </div>
                            <div className='box-button'>
                                <div className="button">
                                    <button>Shop now</button>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <img src={images} alt="img" />
                            <div className='box-conatine'>
                                <p>Virtual reality</p>
                                <h3>Meta Quest</h3>
                                <div className='box-button'>
                                    <div className="button">
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
