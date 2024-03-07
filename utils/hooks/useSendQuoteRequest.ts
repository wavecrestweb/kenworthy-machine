// LIBRARY IMPORTS
import { useForm, FieldErrors } from "react-hook-form";
import { useToast } from "@chakra-ui/react";

// LOCAL IMPORTS
import { sendEmail } from "@/utils/sendEmail";

// TYPE DEFINITIONS
interface FormData {
  name: string;
  email: string;
  industry?: string;
  details?: string;
}

type UseSendQuoteRequestReturn = {
  register: ReturnType<typeof useForm<FormData>>["register"];
  handleSubmit: ReturnType<typeof useForm<FormData>>["handleSubmit"];
  formState: {
    errors: FieldErrors<FormData>;
  };
  onSubmit: (
    data: FormData,
    onSuccess: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
};

export const useSendQuoteRequest = (): UseSendQuoteRequestReturn => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = (
    data: FormData,
    onSuccess: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    sendEmail(data)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.message === "Email sent") {
          onSuccess(true);
          reset();
        } else {
          toast({
            title: "Failed to send quote request.",
            description: "Please try again later.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        toast({
          title: "Error",
          description: "An error occurred while sending the quote request.",
          status: "error",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return {
    register,
    handleSubmit: handleSubmit,
    formState: { errors },
    onSubmit,
  };
};
