import website1 from '../assets/ecommerce-websites.jpg'
import website2 from '../assets/Screenshot 2023-05-07 232153.png'
import website3 from '../assets/food-ecommerce.jpg'
export default function Projects(){
    
    const config ={
        project : [
            {
                image: 'website1 ',
                description:'A E-Commerce Website build with React',
            },
            {
                image: 'website2 ',
                description:'A Restaurant Management System Build with PHP',
            },
            {
                image: 'website3 ',
                description:'',
            }
        ]
    }
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl border-b-2 border-[white] mb-5 w-[140px] font-bold">Projects</h1>
            <p>These are some of my best projects. I have built these with React,PHP,MERN.Check them out</p>
        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
            <img className='h-[200px] w-[500px]' src={website1}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>A E-Commerce Website build with React</p>
            </div>
            </div>
            <div className='relative'>
            <img className='h-[200px] w-[500px]'src={website2}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>A Restaurant Management System Build with PHP</p>
            </div>
            </div >
            <div className='relative'>
            <img className='h-[200px] w-[500px]'src={website3}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>Disaster Ready a comprehensive web application</p>
            </div>
            </div>
        </div>
        </div>
    </section>
}