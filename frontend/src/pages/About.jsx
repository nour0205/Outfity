import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Outfity, we believe in crafting high-quality, timeless fashion pieces that inspire confidence and style. Our passion for design and sustainability sets us apart, ensuring every product is a blend of elegance, comfort, and durability.</p>
          <p>We are committed to empowering our customers to express themselves through fashion that feels as good as it looks. From sourcing premium materials to ensuring ethical production practices, every step we take reflects our dedication to quality and responsibility. With Outfity, you’re not just wearing clothes—you’re embracing a lifestyle of sophistication and authenticity.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To empower individuals with clothing that reflects their personality, while maintaining a commitment to quality and sustainability.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure every product meets the highest standards of craftsmanship and design, providing long-lasting and stylish pieces for your wardrobe.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shop seamlessly from the comfort of your home with our easy-to-navigate platform and hassle-free delivery options.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team is here to assist you every step of the way, ensuring a delightful shopping experience.</p>
        </div>
      </div>

    <NewsletterBox />

    </div>
  )
}

export default About
