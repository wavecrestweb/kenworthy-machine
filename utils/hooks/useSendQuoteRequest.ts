// LIBRARY IMPORTS
import { useForm, FieldErrors } from "react-hook-form";
import { useToast } from "@chakra-ui/react";

// LOCAL IMPORTS
import { sendEmail } from "@/utils/sendEmail";
import { FormData } from "../types";

type UseSendQuoteRequestReturn = {
  register: ReturnType<typeof useForm<FormData>>["register"];
  handleSubmit: ReturnType<typeof useForm<FormData>>["handleSubmit"];
  formState: {
    errors: FieldErrors<FormData>;
    isSubmitting: boolean;
  };
  onSubmit: (
    data: FormData,
    onSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    setButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
};

export const useSendQuoteRequest = (): UseSendQuoteRequestReturn => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = (
    data: FormData,
    onSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    setButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setButtonDisabled(true);
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
      })
      .finally(() => {
        setButtonDisabled(false);
      });
  };

  return {
    register,
    handleSubmit: handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  };
};
