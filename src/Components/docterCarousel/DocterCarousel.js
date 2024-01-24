import React, { useEffect, useState } from 'react'
import "./doctercarousel.css"
import DrCard from '../Dr.card/DrCard'
import "slick-carousel/slick/slick.css";
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const docterData = [{
  image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F6YgFxi30kXv1oentAwEo7m%2Ff8a62977ee51c8ab296bb484751bc59f%2Fno_bg_kshama.png%3Ff%3Dface&w=1920&q=75",
  name: "Dr Kshama Mangal (PT)",
  degree: "M.Sc (Advanced Sports Therapy & Rehabilitation Science)",
  exprience: "14 years of experience",

}, {
  image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F5WfYG9JlQObYfuPIVBHWgB%2F0a2322ed704f2932f695abfa19859b5f%2Fno_bg_ritika.png%3Ff%3Dface&w=1920&q=75",
  name: "Dr Kshama Mangal (PT)",
  degree: "M.Sc (Advanced Sports Therapy & Rehabilitation Science)",
  exprience: "14 years od exprience"
},
{
  image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F4YLmowX4oqZwNchAIExAs2%2Feef3f24c5fabdce934eaa50444788d9b%2Fno_bg_namita.png%3Ff%3Dface&w=1920&q=75",
  name: "Dr Namita Singh (PT)",
  degree: "M.Sc (Advanced Sports Therapy & Rehabilitation Science)",
  exprience: "16 years od exprience"
},
{
  image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F3HISMVOTWHyZrjFklmtCne%2Faffa80a20cb88f10c6b8f0fa4a5545b2%2FUntitled_design__14_.png%3Ff%3Dface&w=1920&q=75",
  name: "Dr Radhika Kaple (PT)",
  degree: "M.Sc (Advanced Sports Therapy & Rehabilitation Science)",
  exprience: "8 years od exprience"
}]


const DocterCarousel = () => {

  const [slide, setSlide] = useState(4)

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {

        if (window.innerWidth < 600) {
          setSlide(2)
        } else {
          setSlide(3)
        }

      }
      return () => {
        window.addEventListener("scroll")
      }
    })
  }, [])



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1
  };
  return (
    <div className='docterCarousel'>
      <h2>Meet Our Experts</h2>
      <p>Experience the Benefits of Advanced Technology and Expert Care</p>
      <div className='slider'>
        <Slider {...settings}>
          {
            docterData.map((item, i) => {
              return <DrCard key={i} name={item.name} exprience={item.exprience} image={item.image} degree={item.degree} />
            })
          }

        </Slider>
      </div>
      <div>
        <Button variant="contained">Meet Team</Button>
      </div>

    </div>
  )
}

export default DocterCarousel
