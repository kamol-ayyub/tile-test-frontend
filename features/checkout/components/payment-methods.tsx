'use client';

import {
  ApplePayLogo,
  BankIcon,
  MastercardLogo,
  PayPalLogo,
  VisaLogo,
} from '@/shared/components/brand-icons';
import { PaymentMethodCard, PaymentMethodRadioButton } from './checkout-ui';

const TOP_PAYMENT_METHODS = [
  {
    label: 'Credit or debit card',
    children: <span className='text-[11px] font-bold'>CREDIT/DEBIT CARD</span>,
  },
  { label: 'PayPal', children: <PayPalLogo className='h-3.5 w-auto' /> },
] as const;

const BOTTOM_PAYMENT_METHODS = [
  {
    label: 'Apple Pay',
    children: <ApplePayLogo className='h-6 w-auto text-black' />,
    text: 'APPLE PAY',
  },
  {
    label: 'Bank transfer',
    children: <BankIcon className='size-6' />,
    text: 'BANK TRANSFER',
  },
] as const;

export function PaymentMethods({
  values,
  errors,
  onChange,
  onPaymentMethodChange,
}: {
  values: {
    paymentMethod: string;
    cardNumber: string;
    expiration: string;
    cvv: string;
  };
  errors: Partial<Record<string, string | undefined>>;
  onChange: (field: 'cardNumber' | 'expiration' | 'cvv', value: string) => void;
  onPaymentMethodChange: (method: string) => void;
}) {
  const isCreditCard = values.paymentMethod === 'Credit or debit card';

  return (
    <section className='space-y-2.5 md:mt-2.5 max-md:order-4'>
      <h2 className='inline-block rounded-sm border-2 border-navy bg-cream px-3 py-0.5 font-display text-base'>
        SELECT PAYMENT METHOD:
      </h2>

      <div className='flex items-center justify-between'>
        {TOP_PAYMENT_METHODS.map(({ label, children }) => (
          <PaymentMethodRadioButton
            key={label}
            group='payment-method'
            label={label}
            checked={values.paymentMethod === label}
            onChange={() => onPaymentMethodChange(label)}
          >
            {children}
          </PaymentMethodRadioButton>
        ))}
      </div>

      {isCreditCard && (
        <div className='rounded-md border-2 border-navy bg-cream p-2'>
          <div className='flex items-center gap-2'>
            <PaymentMethodRadioButton
              group='card-brand'
              label='Visa'
              defaultChecked
            />
            <VisaLogo className='h-3.5 w-auto' />
            <MastercardLogo className='h-3.5 w-auto' />
          </div>
          <label
            htmlFor='cardNumber'
            className='mt-1 block text-[9px] font-bold'
          >
            CARD NUMBER
          </label>
          <input
            id='cardNumber'
            name='cardNumber'
            value={values.cardNumber}
            onChange={(event) => onChange('cardNumber', event.target.value)}
            placeholder='1234 4566 7723 8990'
            autoComplete='off'
            className='mt-0.5 w-full rounded-sm border border-navy bg-white/70 px-2 py-1 text-xs font-bold tracking-wider tabular-nums placeholder:text-navy/50 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy'
          />
          {errors.cardNumber && (
            <p className='mt-0.5 text-[9px] font-bold text-terracotta-dark'>
              {errors.cardNumber}
            </p>
          )}
          <div className='mt-1 flex gap-2'>
            <div className='flex-1'>
              <input
                id='expiration'
                aria-label='Expiration date'
                name='expiration'
                value={values.expiration}
                onChange={(event) => onChange('expiration', event.target.value)}
                placeholder='MM/YY'
                autoComplete='off'
                className='min-w-0 w-full rounded-sm border border-navy bg-white/70 px-2 py-1 text-[10px] font-bold placeholder:text-navy/50 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy'
              />
              {errors.expiration && (
                <p className='mt-0.5 text-[9px] font-bold text-terracotta-dark'>
                  {errors.expiration}
                </p>
              )}
            </div>
            <div className='flex-1'>
              <input
                id='cvv'
                aria-label='CVV'
                name='cvv'
                value={values.cvv}
                onChange={(event) => onChange('cvv', event.target.value)}
                placeholder='CVV'
                autoComplete='off'
                className='min-w-0 w-full rounded-sm border border-navy bg-white/70 px-2 py-1 text-[10px] font-bold placeholder:text-navy/50 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy'
              />
              {errors.cvv && (
                <p className='mt-0.5 text-[9px] font-bold text-terracotta-dark'>
                  {errors.cvv}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className='flex gap-2'>
        {BOTTOM_PAYMENT_METHODS.map(({ label, children, text }) => (
          <PaymentMethodCard
            key={label}
            group='payment-method'
            label={label}
            checked={values.paymentMethod === label}
            onChange={() => onPaymentMethodChange(label)}
          >
            <div className='flex justify-center pt-0.5'>{children}</div>
            <p className='mt-1 text-center text-[9px] font-bold'>{text}</p>
          </PaymentMethodCard>
        ))}
      </div>
    </section>
  );
}
