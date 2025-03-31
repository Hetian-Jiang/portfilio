import { FaJs, FaReact, FaNodeJs, FaDatabase, FaFigma, FaGitAlt, FaJava } from 'react-icons/fa'
import { SiBlender, SiSpine } from 'react-icons/si'
import { TbBrandCSharp } from "react-icons/tb";

const skills = {
  languages: [
    { name: 'Java', icon: FaJava },
    { name: 'JavaScript', icon: FaJs },
    { name: 'C#', icon: TbBrandCSharp },
  ],
  frameworks: [
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'PostgreSQL', icon: FaDatabase },
  ],
  software: [
    { name: 'Git', icon: FaGitAlt },
    { name: 'Spine2D', icon: SiSpine },
    { name: 'Blender3D', icon: SiBlender },
    { name: 'Figma', icon: FaFigma },
  ],
}

export default skills