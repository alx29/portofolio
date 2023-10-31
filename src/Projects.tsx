import { useEffect, useState } from 'react';
import './Projects.css';
import thumbnail1 from './assets/thumbnail-project-1-large.webp';
import thumbnail2 from './assets/thumbnail-project-2-large.webp';
import thumbnail3 from './assets/thumbnail-project-3-large.webp';
import thumbnail4 from './assets/thumbnail-project-4-large.webp';
import thumbnail5 from './assets/thumbnail-project-5-large.webp';
import thumbnail6 from './assets/thumbnail-project-6-large.webp';

interface IProject {
    source: number;
    title: string;
    languages: string[];
}

const projects: IProject[] = [
    {
        source: 1,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS'],
    },
    {
        source: 2,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS'],
    },
    {
        source: 3,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS', 'Javascript'],
    },
    {
        source: 4,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS', 'Javascript'],
    },
    {
        source: 5,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS', 'Javascript'],
    },
    {
        source: 6,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS', 'Javascript'],
    },
];

function Projects() {
    const [sources, setSources] = useState<string[]>([]);
    useEffect(() => {
        setSources([thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6]);
    }, []);

    return (
        <div className='projects'>
            {projects.map((project) => {
                const {source, title, languages} = project;
                const src = sources[source - 1];

                return (
                <div className='project' key={source}>
                    <div className='imageContainer'>
                        <img className='projectImage' src={src}></img>
                        <div className='buttonContainer'>
                            <div className='view'>VIEW PROJECT</div>
                            <div className='view'>VIEW CODE</div>
                        </div>
                    </div>
                    <div className='projectTitle'>{title}</div>
                    <div className='languages'>
                        {languages.map((language) => {
                            return (
                            <div key={language} className='language'>
                                {language}
                            </div>)
                        })}
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Projects