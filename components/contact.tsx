'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message })
  }

  return (
    <section id='contact' className='py-12 pt-24'>
      <div className='container max-w-3xl mx-auto'>
        <h2 className='title mb-8 text-center'>Contact</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-muted-fnoreground'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4 text-lg'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-muted-foreground'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4 text-lg'
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-muted-foreground'>
              Message:
            </label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4 text-lg'
              required
            />
          </div>
          <div>
            <Button
              type='submit'
              className='w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium'
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}