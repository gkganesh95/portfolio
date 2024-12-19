import resumeimg from '../assets/resume.jpg'
export default function Resume (){
    const config = {
        link: 'https://drive.google.com/file/d/1bYR24f7vtSddp7QySyjEHLRaB-TXSzGC/view?usp=drive_link'
    }
    return <section className='flex  flex-col md:flex-row bg-secondary' id='resume'>
        <div className='py-5 md:w-1/2 px-5 flex justify-center md:justify-end'>
            <img className='w-[300px]'src={resumeimg} />
        </div>
        <div className='md:w-1/2 text-white flex justify-center'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl border-b-2 border-[white] mb-5 w-[140px] font-bold'>Resume</h1>
        <p className='pb-5'>You can view my resume <a className='btn'href={config.link}>Download</a></p>
        </div>
        </div>
    </section>
}