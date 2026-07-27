'use client';

import { CustomerInputField } from './checkout-ui';

export function ProjectNotes({
  value,
  error,
  onChange,
}: {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className='md:mt-1.5 max-md:order-5'>
      <CustomerInputField
        id='projectNotes'
        label='PROJECT NOTES:'
        value={value}
        error={error}
        onChange={onChange}
      />
    </div>
  );
}
