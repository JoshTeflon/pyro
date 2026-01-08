import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useTranslations } from 'next-intl';

import { Button } from '@/components/interfaces';
import { Email } from '@/components/icons';

import { newsCycle, rockSalt } from '@/lib/fonts';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const connectLang = useTranslations('connectSection');

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (message) setMessage(null);
  }, [message]);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    if (!email || !emailRegex.test(email.trim())) {
      setMessage({ type: 'error', text: connectLang('emailRequired') });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? connectLang('joinFailed'))
      }

      setMessage({
        type: 'success',
        text: connectLang('joinSuccess'),
      })
      setEmail('');
    } catch (error) {
      console.error('Error joining pack', error);
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : connectLang('joinFailed'),
      })
    } finally {
      setIsLoading(false);
    }
  }, [connectLang, email]);

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
          <label htmlFor='email' className='sr-only'>{ connectLang('emailLabel') }:</label>
          <input
            id='email'
            aria-label='Email'
            autoComplete='email'
            placeholder={connectLang('emailLabel')}
            type='email'
            value={email}
            onChange={handleEmailChange}
            className='pl-2 md:pl-4 pr-2.5 w-full flex-1 bg-transparent font-medium outline-none border-none focus:outline-none placeholder:text-main placeholder:opacity-50'
          />
        </div>

        <Button
          type='submit'
          className='w-max h-full xl:text-lg text-body uppercase'
        >
          { connectLang('submitCta') }
        </Button>
      </div>

      <div
        className='mt-1 lg:mt-2 min-h-6 lg:min-h-8'
        role="alert"
        aria-live="polite"
      >
        {message && (
          <span
            className={`
              tracking-widest transition-all duration-300
              ${message.type === 'success' ? `${rockSalt.className} text-success text-xs lg:text-sm` : `${newsCycle.className} text-error text-sm lg:text-base`}
            `}
          >
            { message.text }
          </span>
        )}
      </div>
    </form>
  )
}

export default EmailInput;