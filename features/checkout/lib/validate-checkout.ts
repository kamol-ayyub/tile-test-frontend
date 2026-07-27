import {
  checkoutSchema,
  type CheckoutFormData,
} from '../schemas/checkout-schema';

export type CheckoutValidationResult =
  | { success: true; data: CheckoutFormData }
  | { success: false; errors: Partial<Record<keyof CheckoutFormData, string>> };

export function validateCheckout(values: unknown): CheckoutValidationResult {
  const result = checkoutSchema.safeParse(values);
  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Partial<Record<keyof CheckoutFormData, string>> = {};
  result.error.issues.forEach((issue) => {
    const key = issue.path[0] as keyof CheckoutFormData;
    if (!errors[key]) {
      errors[key] = issue.message;
    }
  });

  return { success: false, errors };
}
