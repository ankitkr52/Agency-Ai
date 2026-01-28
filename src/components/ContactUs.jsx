import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Thank you! Your inquiry has been received.")

            event.target.reset();
        } else {

            toast.error(data.message);
        }

    } catch (error) {
        toast.error(error.message);
    }


}

const ContactUs = () => {
    return (
        <div id='contact-us' className='flex flex-col items-center gap-7 px:4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-800 dark:text-white'>
            <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
            <form onSubmit={onSubmit} className='grid sm:grid-cols-2  gap-3  max-w-2xl w-full' >

                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-700'>
                        <img src={assets.person_icon} alt="" />
                        <input name="name" type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>


                <div>
                    <p className='mb-2 text-sm font-medium'>Email id</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-700'>
                        <img src={assets.email_icon} alt="" />
                        <input name="email" type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>
                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea name="message" rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-700' required />
                </div>
                <button type='submit' className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-113 transition-all">
                    submit <img src={assets.arrow_icon} alt="" className='w-4' />
                </button>
            </form>
        </div>
    )
}

export default ContactUs
