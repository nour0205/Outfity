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
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis quo sunt molestiae fuga magni excepturi eos delectus odio. Minima tempora error accusamus iusto perferendis perspiciatis aliquam ea, aut voluptatem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam amet voluptatibus hic, voluptates nam, sint maiores illo delectus impedit omnis dolor? Minus quos dicta tenetur qui debitis ullam earum.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore laborum mollitia deleniti aperiam officia ea velit veritatis nam numquam rerum molestiae error rem modi, ullam at? At, tenetur consequatur.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cupiditate perspiciatis aperiam ipsa dignissimos pariatur nulla laborum adipisci nam maiores accusantium officiis, inventore explicabo eligendi corrupti cumque! Minima, sapiente vitae.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cupiditate perspiciatis aperiam ipsa dignissimos pariatur nulla laborum adipisci nam maiores accusantium officiis, inventore explicabo eligendi corrupti cumque! Minima, sapiente vitae.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cupiditate perspiciatis aperiam ipsa dignissimos pariatur nulla laborum adipisci nam maiores accusantium officiis, inventore explicabo eligendi corrupti cumque! Minima, sapiente vitae.</p>
        </div>
      </div>

    <NewsletterBox />

    </div>
  )
}

export default About
