import Image from 'next/image'
import authorImg from '@/public/images/authors/HetianJiang.png'

export default function Intro() {
  return (
    <section id='intro' className="flex flex-col-reverse items-center gap-x-10 gap-y-4">
      <div className='mt-2 flex-1 md:mt-0 text-center'>
        <h1 className='title no-underline'>Hetian Jiang</h1>
        <p className='mt-3 font-light text-muted-foreground text-sm'>
          Creative Computing student at St. Pölten University of Applied Sciences passionate about UI/UX design, full-stack development, game development and digital art.
        </p>
      </div>

      <div className='relative'>
        <Image
          className='flex-1 rounded-full shadow-lg'
          src={authorImg}
          alt='Hetian Jiang'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  );
}