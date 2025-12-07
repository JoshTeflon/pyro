import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import Button from './button';
import { Email } from '@/components/icons';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full'
    >
      <div className='py-2.5 px-2 md:px-4 w-full h-20 flex items-center border-4 border-main'>
        <div className='pr-2 md:pr-4 text-main border-r border-main'>
          <Email width={32} />
        </div>

        <div className='w-full'>
          <label htmlFor='email' className='sr-only'>Email Address:</label>
          <input
            id='email'
            aria-label='Email'
            autoComplete='email'
            placeholder='Email Address'
            type='email'
            value={email}
            onChange={handleEmailChange}
            className='pl-2 md:pl-4 pr-2.5 w-full flex-1 bg-transparent font-medium outline-none border-none focus:outline-none placeholder:text-main placeholder:opacity-50'
          />
        </div>

        <Button
          type='submit'
          className='w-full max-w-24 h-full xl:text-lg text-body uppercase'
        >
          join
        </Button>
      </div>
    </form>
  )
}

export default EmailInput;