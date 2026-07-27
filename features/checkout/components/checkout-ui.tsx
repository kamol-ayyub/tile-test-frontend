export function OrderSummarySectionHeader({ title }: { title: string }) {
  return (
    <div className='flex items-end  bg-cream'>
      <h2 className='border-2 border-b-0 border-navy bg-cream px-3 py-0.5 font-display text-base whitespace-nowrap'>
        {title}
      </h2>
      <div className='h-full flex-1 border-b-2 border-navy' />
    </div>
  );
}

export function CustomerInputField({
  id,
  label,
  value = '',
  error,
  onChange,
}: {
  id: string;
  label: string;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className='flex min-w-0 flex-1 flex-col gap-0.5'>
      <div className='flex min-w-0 flex-1 items-end gap-1.5'>
        <label htmlFor={id} className='shrink-0 text-[10px] font-bold'>
          {label}
        </label>
        <input
          id={id}
          name={id}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          autoComplete='off'
          className='mb-0.5 h-3.5 min-w-0 flex-1 border-b border-navy bg-transparent focus-visible:border-b-2 focus-visible:outline-none'
        />
      </div>
      {error && (
        <p className='text-[9px] font-bold text-terracotta-dark'>{error}</p>
      )}
    </div>
  );
}

export function OrderSummaryTotalRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className='flex items-center justify-end gap-2'>
      <span className='text-[10px] font-bold'>{label}</span>
      <span className='min-w-10 px-2 py-0.5 text-right text-xs font-bold whitespace-nowrap tabular-nums'>
        [ {value} ]
      </span>
    </div>
  );
}

export function PaymentMethodRadioButton({
  group,
  label,
  checked,
  defaultChecked,
  onChange,
  children,
}: {
  group: string;
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <label className='group flex cursor-pointer items-center gap-2'>
      <input
        type='radio'
        name={group}
        value={label}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        aria-label={label}
        className='peer sr-only'
      />
      <span className='flex size-3.5 shrink-0 items-center justify-center rounded-full border-2 border-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy'>
        <span className='hidden size-1.5 rounded-full bg-navy group-has-checked:block' />
      </span>
      {children}
    </label>
  );
}

export function PaymentMethodCard({
  group,
  label,
  checked,
  onChange,
  children,
}: {
  group: string;
  label: string;
  checked?: boolean;
  onChange?: () => void;
  children: React.ReactNode;
}) {
  return (
    <label className='group relative flex flex-1 cursor-pointer flex-col items-center rounded-md border-2 border-navy bg-cream-light/50 p-2 transition-colors hover:bg-tan/30 has-checked:bg-tan/50'>
      <input
        type='radio'
        name={group}
        value={label}
        checked={checked}
        onChange={onChange}
        aria-label={label}
        className='peer sr-only'
      />
      <span className='absolute left-2 top-2 flex size-3.5 shrink-0 items-center justify-center rounded-full border-2 border-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy'>
        <span className='hidden size-1.5 rounded-full bg-navy peer-checked:block' />
      </span>
      {children}
    </label>
  );
}
