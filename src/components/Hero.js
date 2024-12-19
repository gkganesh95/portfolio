import HeroImg from '../assets/hero.png'
import { AiOutlineGithub, AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero() {
    const config = {
        subtitle: 'Im a Front-End Developer',
        social: {
            instagram: 'https://www.instagram.com/gk_ganesh95/?igsh=MWxkNXZ3cHpydmNkcA%3D%3D#',
            linkedin: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF87IcC-qmLUQAAAZPbR5XQb860LUpQ3g40G4XEwhC25CFT1lzzP77muSqcMimXRRSwfyW7h3IeQYTFUwXVc19pXak3AYy3OShI6al6A02m5dulmNRJF1OSr5-UINhnAjT-PA_E=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fganesh-kumar-4a5628279%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_ap',
            github: 'https://github.com/gkganesh95'

        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-bold text-5xl font-hero-font'>Hi,<br/> I'm Ganeshkumar,
        <p className='text-2xl'>{config.subtitle}</p></h1>
        <div className='flex py-10'>
            <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
            <a href={config.social.linkedin}className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href={config.social.github}className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
}
