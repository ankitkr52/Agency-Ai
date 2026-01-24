import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const Ourwork = () => {
     const workData=[
        {
            title:'Mobile app marketing',
            description:'We turn bold ideas into powerful digital solutions that connect, engage...',
            Image:assets.work_mobile_app
        },
         {
            title:'Dashboard management',
            description:'We help you execute your plan and deliver results.',
            Image:assets.work_dashboard_management
         },
         {
            title:'Fitness app promotion',
            description:'We help you create a marketing strategy that drives results.',
            Image:assets.work_fitness_app
         }
    ]
  return (
    <div id='our-work' className=' flex flex-col items-center gap-7 px:4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white'>
      <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
    </div>
  )
}

export default Ourwork
