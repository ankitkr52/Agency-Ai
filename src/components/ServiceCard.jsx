import React, { useState } from 'react'

const ServiceCard = ({ service, index }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible,setVisible]=useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    return (
        <div 
            className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10'
            onMouseMove={handleMouseMove}
        >
            <div 
                className='pointer-events-none blur-2xl bg-gradient-to-r from-blue-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten'
                style={{
                    top: `${position.y - 150}px`,
                    left: `${position.x - 150}px`
                }}
            />
            <div className='flex items-center gap-10 p-8 hover:p-7 hover:m-1 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>
                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img 
                        src={service.icon} 
                        alt={service.title} 
                        className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' 
                    />
                </div>
                <div className='flex-1'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-2'>{service.description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ServiceCard