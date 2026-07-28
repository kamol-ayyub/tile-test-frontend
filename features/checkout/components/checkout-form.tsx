'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { CustomerDetails } from './customer-details';
import { PaymentMethods } from './payment-methods';
import { PlaceOrderButton } from './place-order-button';
import { ProjectNotes } from './project-notes';
import { validateCheckout } from '../lib/validate-checkout';
import type { CheckoutFormData } from '../schemas/checkout-schema';

type FormValues = Required<CheckoutFormData>;

const initialValues: FormValues = {
  customerName: '',
  phone: '',
  email: '',
  shippingAddress: '',
  projectNotes: '',
  paymentMethod: 'Credit or debit card',
  cardNumber: '',
  expiration: '',
  cvv: '',
};

export function CheckoutForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = validateCheckout(values);
    if (!result.success) {
      setErrors(result.errors);
      const firstInvalidKey = Object.keys(result.errors)[0];
      if (firstInvalidKey) {
        document.getElementById(firstInvalidKey)?.focus();
      }
      return;
    }
    setErrors({});
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className='w-[320px] shrink-0 md:max-xl:w-full md:max-xl:max-w-150 md:max-xl:order-3 max-md:contents'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='rounded-sm border-2 border-navy bg-cream p-4 text-center'
          >
            <h2 className='font-display text-lg'>ORDER PLACED</h2>
            <p className='mt-2 text-[10px] font-bold'>
              THANK YOU FOR YOUR ORDER. WE WILL CONTACT YOU SHORTLY.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-[320px] shrink-0 md:max-xl:w-full md:max-xl:max-w-150 md:max-xl:order-3 max-md:contents'
    >
      <CustomerDetails
        values={values}
        errors={errors}
        onChange={handleChange}
      />
      <ProjectNotes
        value={values.projectNotes}
        error={errors.projectNotes}
        onChange={(value) => handleChange('projectNotes', value)}
      />
      <PaymentMethods
        values={values}
        errors={errors}
        onChange={handleChange}
        onPaymentMethodChange={(method) =>
          handleChange('paymentMethod', method)
        }
      />
      <PlaceOrderButton />
    </form>
  );
}
