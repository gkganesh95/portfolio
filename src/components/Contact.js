import resumeimg from '../assets/resume.jpg'
export default function Contact (){

    const config ={
        email: 'gk95520@gmail.com',
        phone: '9361441773'
    }
    return <section className='flex  flex-col bg-primary px-5 py-32' id='contact'>
        <div className='text-white flex flex-col items-center'>
        <h1 className='text-4xl border-b-2 border-[white] mb-5 w-[140px] font-bold'>Contact</h1>
        <p className='pb-5'>If  you want to discuss more in detail,  please contact me</p>
        <p className='py-2'><span className='font-bold'>Email:</span>{config.email}</p>
        <p className='py-2'><span className='font-bold'>Phone:</span>{config.phone}</p>
        </div>
    </section>
}