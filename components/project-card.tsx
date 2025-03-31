import Image from 'next/image'

interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({ name, description, imageUrl }: ProjectCardProps) {
  return (
    <div className='relative bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden group'>
      <div className='h-96 w-full overflow-hidden bg-muted sm:h-80'>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className='rounded-lg object-contain object-center transition-transform transform group-hover:scale-105'
        />
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-8'>
        <h3 className='title no-underline text-2xl mb-2 text-white'>{name}</h3>
        <p className='text-sm text-white text-center '>{description}</p>
      </div>
    </div>
  )
}