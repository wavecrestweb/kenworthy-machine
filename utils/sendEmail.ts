import { FormData } from "@/app/components/QuoteForm";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  return fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((err) => {
    throw err;
  });
}
