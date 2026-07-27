import { z } from "zod";

const CARD_NUMBER_REGEX = /^\d{16}$/;
const EXPIRATION_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/;
const CVV_REGEX = /^\d{3,4}$/;

function parseExpiry(value: string) {
  const [month, year] = value.split("/").map(Number);
  return new Date(2000 + year, month);
}

export const checkoutSchema = z
  .object({
    customerName: z.string().min(1, "Customer name is required"),
    phone: z.string().min(1, "Phone is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    shippingAddress: z.string().min(1, "Shipping address is required"),
    projectNotes: z.string().optional(),
    paymentMethod: z.enum([
      "Credit or debit card",
      "PayPal",
      "Apple Pay",
      "Bank transfer",
    ]),
    cardNumber: z.string(),
    expiration: z.string(),
    cvv: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod !== "Credit or debit card") return;

    const addIssue = (path: string, message: string) =>
      ctx.addIssue({ code: z.ZodIssueCode.custom, message, path: [path] });

    const cleanCard = data.cardNumber.replace(/\s/g, "");
    if (!CARD_NUMBER_REGEX.test(cleanCard)) {
      addIssue("cardNumber", "Card number must be 16 digits");
    }

    if (!EXPIRATION_REGEX.test(data.expiration)) {
      addIssue("expiration", "Use MM/YY format");
    } else if (parseExpiry(data.expiration) <= new Date()) {
      addIssue("expiration", "Card has expired");
    }

    if (!CVV_REGEX.test(data.cvv)) {
      addIssue("cvv", "CVV must be 3 or 4 digits");
    }
  });

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

export type CheckoutFieldErrors = Partial<
  Record<keyof CheckoutFormData, string>
>;
