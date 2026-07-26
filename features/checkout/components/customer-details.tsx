import { CustomerInputField, OrderSummarySectionHeader } from "./checkout-ui";

export function CustomerDetails() {
  return (
    <section className="space-y-2.5 max-md:order-3">
      <OrderSummarySectionHeader title="ORDER SUMMARY" />

      <div className="space-y-1.5">
        <CustomerInputField id="customer-name" label="CUSTOMER NAME:" />
        <div className="flex gap-3">
          <CustomerInputField id="phone" label="PHONE:" />
          <CustomerInputField id="email" label="EMAIL:" />
        </div>
        <CustomerInputField id="shipping-address" label="SHIPPING ADDRESS:" />
      </div>
    </section>
  );
}
