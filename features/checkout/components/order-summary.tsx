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
    <section className="space-y-3.5">
      {/* Customer Info Form */}
      <div className="rounded-sm border-2 border-navy bg-cream p-3 space-y-2">
        <OrderSummarySectionHeader title="CUSTOMER DETAILS" />
        <div className="mt-2 space-y-2">
          <CustomerInputField id="customer-name" label="CUSTOMER NAME:" />
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <CustomerInputField id="phone" label="PHONE:" />
            <CustomerInputField id="email" label="EMAIL:" />
          </div>
          <CustomerInputField id="shipping-address" label="SHIPPING ADDRESS:" />
        </div>
      </div>

      {/* Payment Selection Grid */}
      <div className="space-y-2">
        <h2 className="inline-block rounded-sm border-2 border-navy bg-cream px-3 py-0.5 font-display text-sm sm:text-base">
          SELECT PAYMENT METHOD:
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {/* Credit / Debit Card */}
          <label className="group flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-navy bg-cream p-2 transition hover:bg-tan/40">
            <div className="flex w-full items-center justify-between">
              <input
                type="radio"
                name="payment-method"
                value="card"
                defaultChecked
                className="peer sr-only"
              />
              <span className="flex size-3.5 items-center justify-center rounded-full border-2 border-navy peer-focus-visible:outline-navy">
                <span className="size-1.5 rounded-full bg-navy group-has-checked:block hidden" />
              </span>
              <VisaLogo className="h-3 w-auto" />
            </div>
            <div className="mt-2 text-center">
              <p className="text-[9px] font-bold leading-tight">CREDIT/DEBIT CARD</p>
            </div>
          </label>

          {/* PayPal */}
          <label className="group flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-navy bg-cream p-2 transition hover:bg-tan/40">
            <div className="flex w-full items-center justify-between">
              <input
                type="radio"
                name="payment-method"
                value="paypal"
                className="peer sr-only"
              />
              <span className="flex size-3.5 items-center justify-center rounded-full border-2 border-navy peer-focus-visible:outline-navy">
                <span className="size-1.5 rounded-full bg-navy group-has-checked:block hidden" />
              </span>
            </div>
            <div className="mt-1 flex flex-col items-center">
              <PayPalLogo className="h-4 w-auto" />
              <p className="mt-1 text-[9px] font-bold leading-tight">PAYPAL</p>
            </div>
          </label>

          {/* Apple Pay */}
          <label className="group flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-navy bg-cream p-2 transition hover:bg-tan/40">
            <div className="flex w-full items-center justify-between">
              <input
                type="radio"
                name="payment-method"
                value="applepay"
                className="peer sr-only"
              />
              <span className="flex size-3.5 items-center justify-center rounded-full border-2 border-navy peer-focus-visible:outline-navy">
                <span className="size-1.5 rounded-full bg-navy group-has-checked:block hidden" />
              </span>
            </div>
            <div className="mt-1 flex flex-col items-center">
              <ApplePayLogo className="h-4 w-auto text-black" />
              <p className="mt-1 text-[9px] font-bold leading-tight">APPLE PAY</p>
            </div>
          </label>

          {/* Bank Transfer */}
          <label className="group flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-navy bg-cream p-2 transition hover:bg-tan/40">
            <div className="flex w-full items-center justify-between">
              <input
                type="radio"
                name="payment-method"
                value="bank"
                className="peer sr-only"
              />
              <span className="flex size-3.5 items-center justify-center rounded-full border-2 border-navy peer-focus-visible:outline-navy">
                <span className="size-1.5 rounded-full bg-navy group-has-checked:block hidden" />
              </span>
            </div>
            <div className="mt-1 flex flex-col items-center">
              <BankIcon className="size-4" />
              <p className="mt-1 text-[9px] font-bold leading-tight">BANK TRANSFER</p>
            </div>
          </label>
        </div>

        {/* Card Details Box */}
        <div className="rounded-md border-2 border-navy bg-cream p-2.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold">CARD INFORMATION</span>
            <div className="flex gap-1.5">
              <VisaLogo className="h-3.5 w-auto" />
              <MastercardLogo className="h-3.5 w-auto" />
            </div>
          </div>
          <input
            id="card-number"
            name="card-number"
            readOnly
            defaultValue="1234 4566 7723 8990"
            autoComplete="off"
            className="w-full rounded-sm border border-navy bg-white/80 px-2 py-1 text-xs font-bold tracking-wider tabular-nums focus-visible:outline-2 focus-visible:outline-navy"
          />
          <div className="flex gap-2">
            <input
              aria-label="Expiration date"
              name="expiration"
              readOnly
              placeholder="EXPIRATION (MM/YY)"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-sm border border-navy bg-white/80 px-2 py-1 text-[10px] font-bold placeholder:text-navy/60 focus-visible:outline-2 focus-visible:outline-navy"
            />
            <input
              aria-label="CVV"
              name="cvv"
              readOnly
              placeholder="CVV"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-sm border border-navy bg-white/80 px-2 py-1 text-[10px] font-bold placeholder:text-navy/60 focus-visible:outline-2 focus-visible:outline-navy"
            />
          </div>
        </div>
      </div>

      {/* Project Name / Notes */}
      <div className="space-y-1.5">
        <CustomerInputField id="project-notes-1" label="PROJECT NAME / NOTES:" />
        <div className="border-b border-navy h-4 w-full" />
      </div>

      {/* Order Button */}
      <button
        type="button"
        className="w-full rounded-md border-2 border-navy bg-navy py-2.5 font-display text-xs tracking-widest text-cream transition-colors hover:bg-terracotta-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        PLACE SECURE ORDER
      </button>
    </section>
  );
}
