// LIBRARY IMPORTS
import {
  Button,
  FormControl,
  Input,
  Textarea,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

// LOCAL IMPORTS
import HomeLayoutQuoteForm from "./quoteFormLayouts/HomeLayout";
import MachinesLayoutQuoteForm from "./quoteFormLayouts/MachinesLayout";

// TYPE DEFINTIONS
export interface QuoteFormProps {
  formTitle?: string;
  field1Placeholder?: string;
  field2Placeholder?: string;
  field3Placeholder?: string;
  submitButtonText?: string;
  layoutType: string;
  setSubmitSuccessful: Dispatch<SetStateAction<boolean>>;
}

export default function QuoteForm({
  formTitle,
  field1Placeholder,
  field2Placeholder,
  field3Placeholder,
  submitButtonText,
  setSubmitSuccessful,
  layoutType,
}: QuoteFormProps) {
  return layoutType === "homePage" ? (
    <HomeLayoutQuoteForm
      formTitle={formTitle}
      field1Placeholder={field1Placeholder}
      field2Placeholder={field2Placeholder}
      field3Placeholder={field3Placeholder}
      submitButtonText={submitButtonText}
      setSubmitSuccessful={setSubmitSuccessful}
    />
  ) : (
    <MachinesLayoutQuoteForm
      formTitle={formTitle}
      field1Placeholder={field1Placeholder}
      field2Placeholder={field2Placeholder}
      field3Placeholder={field3Placeholder}
      submitButtonText={submitButtonText}
      setSubmitSuccessful={setSubmitSuccessful}
    />
  );
}
