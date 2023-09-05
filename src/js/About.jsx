import React, {useEffect} from 'react'
import home2 from '../../public/assets/home-2.jpeg';
import Path from './Path'
import Header from './Header';

const About = ({cartItems}) => {
  useEffect(() => {
    document.title="About"
  }, [])
  return (
    <>
     <Header cartItems={cartItems}/>
      <Path title="about" />
      <section className='w-laptop max-tablet:w-tablet mx-auto max-w-maxw py-20 grid grid-cols-2 max-tablet:grid-cols-1 gap-16 min-h-minh'>
        <img src={home2} alt="nice desk" className='w-full h-image block rounded object-cover'/>
        <article>
          <div>
            <h2 className='text-2.5 mb-3 capitalize'>our story</h2>
            <div className='w-24 h-1 bg-yellow-700'></div>
          </div>
          <p className='leading-loose max-w-max-text mt-8 mx-auto text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
        </article>
      </section>
    </>
  )
}

export default About
