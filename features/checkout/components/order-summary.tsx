import {
  ApplePayLogo,
  BankIcon,
  MastercardLogo,
  PayPalLogo,
  VisaLogo,
} from "@/shared/components/brand-icons";
import { ORDER_TOTALS } from "@/shared/data";

function OrderSummarySectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-end  bg-cream">
      <h2 className="border-2 border-b-0 border-navy bg-cream px-3 py-0.5 font-display text-base whitespace-nowrap">
        {title}
      </h2>
      <div className="h-full flex-1 border-b-2 border-navy" />
    </div>
  );
}

function CustomerInputField({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex min-w-0 flex-1 items-end gap-1.5">
      <label htmlFor={id} className="shrink-0 text-[10px] font-bold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        readOnly
        autoComplete="off"
        className="mb-0.5 h-3.5 min-w-0 flex-1 border-b border-navy bg-transparent focus-visible:border-b-2 focus-visible:outline-none"
      />
    </div>
  );
}

function OrderSummaryTotalRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-end gap-2">
      <span className="text-[10px] font-bold">{label}</span>
      <span className="min-w-10 px-2 py-0.5 text-right text-xs font-bold whitespace-nowrap tabular-nums">
        [ {value} ]
      </span>
    </div>
  );
}

function PaymentMethodRadioButton({
  group,
  label,
  defaultChecked,
  children,
}: {
  group: string;
  label: string;
  defaultChecked?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <label className="group flex cursor-pointer items-center gap-2">
      <input
        type="radio"
        name={group}
        value={label}
        defaultChecked={defaultChecked}
        aria-label={label}
        className="peer sr-only"
      />
      <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full border-2 border-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy">
        <span className="hidden size-1.5 rounded-full bg-navy group-has-checked:block" />
      </span>
      {children}
    </label>
  );
}

export function OrderSummary() {
  return (
    <section className="space-y-2.5">
      <OrderSummarySectionHeader title="ORDER SUMMARY" />

      <div className="space-y-1.5">
        <CustomerInputField id="customer-name" label="CUSTOMER NAME:" />
        <div className="flex gap-3">
          <CustomerInputField id="phone" label="PHONE:" />
          <CustomerInputField id="email" label="EMAIL:" />
        </div>
        <CustomerInputField id="shipping-address" label="SHIPPING ADDRESS:" />
        <CustomerInputField id="project-notes" label="PROJECT NOTES:" />
      </div>

      <div className="space-y-1 pt-0.5">
        <OrderSummaryTotalRow label="SUBTOTAL:" value={ORDER_TOTALS.SUBTOTAL} />
        <OrderSummaryTotalRow label="SHIPPING:" value={ORDER_TOTALS.SHIPPING} />
        <OrderSummaryTotalRow
          label="GRAND TOTAL:"
          value={ORDER_TOTALS.GRAND_TOTAL}
        />
      </div>

      <h2 className="inline-block rounded-sm border-2 border-navy bg-cream px-3 py-0.5 font-display text-base">
        SELECT PAYMENT METHOD:
      </h2>

      <div className="flex items-center justify-between">
        <PaymentMethodRadioButton
          group="payment-method"
          label="Credit or debit card"
          defaultChecked
        >
          <span className="text-[11px] font-bold">CREDIT/DEBIT CARD</span>
        </PaymentMethodRadioButton>
        <PaymentMethodRadioButton group="payment-method" label="PayPal">
          <PayPalLogo className="h-3.5 w-auto" />
        </PaymentMethodRadioButton>
      </div>

      <div className="rounded-md border-2 border-navy bg-cream p-2">
        <div className="flex items-center gap-2">
          <PaymentMethodRadioButton group="card-brand" label="Visa" defaultChecked />
          <VisaLogo className="h-3.5 w-auto" />
          <MastercardLogo className="h-3.5 w-auto" />
        </div>
        <label
          htmlFor="card-number"
          className="mt-1 block text-[9px] font-bold"
        >
          CARD NUMBER
        </label>
        <input
          id="card-number"
          name="card-number"
          readOnly
          defaultValue="1234 4566 7723 8990"
          autoComplete="off"
          className="mt-0.5 w-full rounded-sm border border-navy bg-white/70 px-2 py-1 text-xs font-bold tracking-wider tabular-nums focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy"
        />
        <div className="mt-1 flex gap-2">
          <input
            aria-label="Expiration date"
            name="expiration"
            readOnly
            placeholder="EXPIRATION /"
            autoComplete="off"
            className="min-w-0 flex-1 rounded-sm border border-navy bg-white/70 px-2 py-1 text-[10px] font-bold placeholder:text-navy/70 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy"
          />
          <input
            aria-label="CVV"
            name="cvv"
            readOnly
            placeholder="CVV"
            autoComplete="off"
            className="min-w-0 flex-1 rounded-sm border border-navy bg-white/70 px-2 py-1 text-[10px] font-bold placeholder:text-navy/70 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1 rounded-md border-2 border-navy bg-cream-light/50 p-2">
          <span className="absolute left-2 top-2">
            <PaymentMethodRadioButton group="payment-method" label="Apple Pay" />
          </span>
          <div className="flex justify-center pt-0.5">
            <ApplePayLogo className="h-6 w-auto text-black" />
          </div>
          <p className="mt-1 text-center text-[9px] font-bold">APPLE PAY</p>
        </div>
        <div className="relative flex-1 rounded-md border-2 border-navy bg-cream-light/50 p-2">
          <span className="absolute left-2 top-2">
            <PaymentMethodRadioButton group="payment-method" label="Bank transfer" />
          </span>
          <div className="flex justify-center pt-0.5">
            <BankIcon className="size-6" />
          </div>
          <p className="mt-1 text-center text-[9px] font-bold">
            BANK TRANSFER
          </p>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-md bg-navy py-2 font-display text-xs tracking-widest text-cream transition-colors hover:bg-terracotta-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        PLACE SECURE ORDER
      </button>
    </section>
  );
}
