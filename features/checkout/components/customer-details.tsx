'use client';

import { useAppSelector } from '@/app/hooks';
import { getCartSummary, selectCartItems } from '@/features/cart';
import { formatPrice } from '@/shared/utils';
import {
  CustomerInputField,
  OrderSummarySectionHeader,
  OrderSummaryTotalRow,
} from './checkout-ui';

export function CustomerDetails({
  values,
  errors,
  onChange,
}: {
  values: {
    customerName: string;
    phone: string;
    email: string;
    shippingAddress: string;
  };
  errors: Partial<Record<string, string | undefined>>;
  onChange: (
    field: 'customerName' | 'phone' | 'email' | 'shippingAddress',
    value: string,
  ) => void;
}) {
  const items = useAppSelector(selectCartItems);
  const { subtotal, shipping, grandTotal } = getCartSummary(items);

  return (
    <section className='space-y-2.5 max-md:order-3'>
      <OrderSummarySectionHeader title='ORDER SUMMARY' />

      <div className='space-y-1.5'>
        <CustomerInputField
          id='customerName'
          label='CUSTOMER NAME:'
          value={values.customerName}
          error={errors.customerName}
          onChange={(value) => onChange('customerName', value)}
        />
        <div className='flex gap-3'>
          <CustomerInputField
            id='phone'
            label='PHONE:'
            value={values.phone}
            error={errors.phone}
            onChange={(value) => onChange('phone', value)}
          />
          <CustomerInputField
            id='email'
            label='EMAIL:'
            value={values.email}
            error={errors.email}
            onChange={(value) => onChange('email', value)}
          />
        </div>
        <CustomerInputField
          id='shippingAddress'
          label='SHIPPING ADDRESS:'
          value={values.shippingAddress}
          error={errors.shippingAddress}
          onChange={(value) => onChange('shippingAddress', value)}
        />
      </div>

      <div className='space-y-1 pt-0.5'>
        <OrderSummaryTotalRow label='SUBTOTAL:' value={formatPrice(subtotal)} />
        <OrderSummaryTotalRow label='SHIPPING:' value={formatPrice(shipping)} />
        <OrderSummaryTotalRow
          label='GRAND TOTAL:'
          value={formatPrice(grandTotal)}
        />
      </div>
    </section>
  );
}
