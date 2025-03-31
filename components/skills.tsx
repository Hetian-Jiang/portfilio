import skills from '@/lib/skills/skills'

export default function Skills() {
  return (
    <section id='skills' className='flex flex-col items-center gap-8 py-12 pt-24'>
      <div className='text-center'>
        <h2 className='title'>Skills & Tools</h2>
      </div>
      {Object.entries(skills).map(([category, skills]) => (
        <div key={category} className='mb-2 text-center'>
          <h3 className='title no-underline text-2xl mb-4 capitalize text-muted-foreground'>{category}</h3>
          <ul className='flex flex-wrap justify-center gap-10'>
            {skills.map((skill) => (
              <li key={skill.name} className='flex flex-col items-center'>
                <skill.icon className='h-8 w-8 text-muted-foreground' aria-hidden='true' />
                <span className='mt-4 text-sm font-light text-muted-foreground'>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}