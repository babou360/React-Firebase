import React from 'react'
import './home.css';
import Header from '../../components/header/Header';
import Product from '../../components/product/product';

function Home() {
    return (
        <div className="home">
           <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"/>
           <div className="home__row">
           <Product title="SAMSUNG Wireless Speaker Scoop Design EO- SG510. Exclusive J. P. Morgan logo. Powerful and Clear Sound. Modern, Cozy & Playful Design."
           rating={5}
           price={1000}
           image="https://i.ebayimg.com/thumbs/images/g/vJ4AAOSwdYFe-uuO/s-l225.webp"/>
           <Product title="Canon EOS 2000D / Rebel T7 24.1MP DSLR Camera + 18-55mm Lens-18PC Bundle"
           rating={5}
           price={2000}
           image="https://i.ebayimg.com/thumbs/images/g/EssAAOSwIYBerHlu/s-l225.webp"/>
           </div>

           <div className="home__row">
           <Product title="Converse Chuck Taylor II Low Thunder Unisex Trainers/Sneakers NEW - 3 DAY SALE!!"
           rating={5}
           price={1000}
           image="https://i.ebayimg.com/thumbs/images/g/NR8AAOSwnGFfHdTP/s-l225.webp"/>
           <Product title="Shoe Care Kit Tarrago LIGHT BROWN SHOE CARE TRAVEL KIT"
           rating={5}
           price={2000}
           image="https://i.ebayimg.com/thumbs/images/g/wWoAAOSwoP1ekcLX/s-l225.webp"/>
            <Product title="More Mile Boot Bag Blue Double Zip Gym Golf Football Running Sports Shoe Bag"
           rating={5}
           price={2000}
           image="https://i.ebayimg.com/thumbs/images/g/JcgAAOSwmOBcEjyD/s-l225.webp"/>
           </div>

           <div className="home__rowlast">
           <Product title="MacBook Pro 13.3 Retina, 2018 MR9Q2LL/A, Core i5-8259U, Iris Plus Graphics 655"
           rating={4}
           price={1000}
           image="https://i.ebayimg.com/thumbs/images/g/N4sAAOSwmZJfSXiD/s-l200.jpg"/>
           </div>
        </div>
    )
}

export default Home
