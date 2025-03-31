import projects from '@/lib/projects/projects'
import ProjectCard from './project-card'

export default function FeaturedProjects() {
  return (
    <section id='projects' className='py-12 pt-24'>
      <div className='container max-w-4xl mx-auto'>
        <h2 className='title mb-8 text-center'>Projects</h2>
        <div className='grid grid-cols-1 gap-8'>
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}