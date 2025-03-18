import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import Button from './button';

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
      className='py-2.5 pr-2.5 w-full flex items-center border border-primary'
    >
      <label htmlFor='email' className='sr-only'>Email Address:</label>
      <input
        id='email'
        aria-label='Email'
        placeholder='Email Address'
        type='email'
        value={email}
        onChange={handleEmailChange}
        className='px-2.5 flex-1 bg-transparent font-bold outline-none border-none focus:outline-none placeholder:text-body placeholder:opacity-25'
      />
      <Button
        type='submit'
        variant='primary'
        className='text-body uppercase font-bold'
      >join</Button>
    </form>
  )
}

export default EmailInput;