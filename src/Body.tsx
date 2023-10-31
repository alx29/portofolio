import './Body.css';
import Description from './Description';
import Footer from './Footer';
import HorizontalLine from './HorizontalLine';
import Projects from './Projects';
import Skill from './Skill';
import Ring from './icons/Ring';
import skills from './skills';

function Body() {
  return (
    <div className='body'>
        <div className='ring1'><Ring /></div>
        <div className='bodyContainer'>
            <Description />
            <div className='contact' style={{marginTop: '66px'}}>CONTACT ME</div>
            <div className='line'><HorizontalLine /></div>
            <div className='skillsContainer'>
                <div className='skills'>
                    {skills.map((skill) => {
                        const { name, experience } = skill;

                        return <Skill name={name} experience={experience} key={name}/>
                    })}
                </div>
                <Ring />
            </div>
            <div className='projectsContainer'>
                <div className='projectsHeader'>
                    <div className='projectsTitle'>Projects</div>
                    <div className='contact'>CONTACT ME</div>
                </div>
                <Projects />
            </div>
        </div>
    </div>
  )
}

export default Body