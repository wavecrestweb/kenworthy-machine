import { FormData } from "@/app/components/QuoteForm";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
      console.log("response: ", response);
    })
    .catch((err) => {
      alert(err);
      console.log("error: ", err);
    });
}
