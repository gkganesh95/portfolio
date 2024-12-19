import AboutImg from '../assets/about.png'
export default function About(){
    const config = {
        line1:'Hi, My name is Ganeshkumar. I am a front-end web developer, I built a beautiful website with React.js and Tailwind.css',
        line2:'I am aiming to leverage my skills in web development and software development in a challenging role to contribute to innovative projects and grow professionally',
    }
    return <section className='flex  flex-col md:flex-row bg-secondary' id='about'>
        <div className='py-5 md:w-1/2 px-5'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 text-white flex justify-center'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl border-b-2 border-[white] mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>{config.line1}</p>
        <p>{config.line2}</p>
        </div>
        </div>
    </section>
}