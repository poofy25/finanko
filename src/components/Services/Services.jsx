import styles from './services.module.scss'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import ServicesData from './ServicesData';





function ServicesSection() {

    const settings = {
        dots: false,
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerPadding:'50px',
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        lazyLoad: true,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

      };

    return ( 
        <section className={styles.container} id='servicii'>

            <Slider {...settings}>
            {ServicesData.map(slide =>{
                return (
                    <div className={styles.slideWrapper}>
                        <div className={styles.slide}>
                            <h3>{slide.text}</h3>
                            <img src={slide.src}/>
                        </div>
                    </div>
                    
                )
            })}
        
            </Slider>

        </section>
     );
}

export default ServicesSection;