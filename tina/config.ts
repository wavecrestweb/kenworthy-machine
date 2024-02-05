import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  // tina/config.ts
  schema: {
    collections: [
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        ui: {
          router: (props) => {
            return "/";
          },
        },
        fields: [
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                type: "object",
                label: "Hero Section",
                name: "hero",
                fields: [
                  {
                    type: "image",
                    label: "Hero Image",
                    name: "image",
                  },
                  {
                    type: "string",
                    label: "Heading",
                    name: "heading",
                  },
                ],
              },
              {
                type: "object",
                label: "Company Values",
                name: "values",
                fields: [
                  {
                    type: "image",
                    label: "Background Image",
                    name: "backgroundImage",
                  },
                  {
                    type: "string",
                    label: "Section Title",
                    name: "title",
                  },
                  {
                    type: "object",
                    label: "Quality Value",
                    name: "quality1",
                    fields: [
                      {
                        type: "string",
                        label: "Title",
                        name: "title",
                      },
                      {
                        type: "rich-text",
                        label: "Description",
                        name: "description",
                      },
                    ],
                  },
                  {
                    type: "object",
                    label: "On-Time Value",
                    name: "quality2",
                    fields: [
                      {
                        type: "string",
                        label: "Title",
                        name: "title",
                      },
                      {
                        type: "rich-text",
                        label: "Description",
                        name: "description",
                      },
                    ],
                  },
                  {
                    type: "object",
                    label: "Collaboration Value",
                    name: "quality3",
                    fields: [
                      {
                        type: "string",
                        label: "Title",
                        name: "title",
                      },
                      {
                        type: "rich-text",
                        label: "Description",
                        name: "description",
                      },
                    ],
                  },
                ],
              },
              {
                type: "object",
                label: "Location Section",
                name: "location",
                fields: [
                  {
                    type: "rich-text",
                    label: "Content",
                    name: "content",
                  },
                ],
              },
              {
                type: "object",
                label: "Machine Carousel",
                name: "machineCarousel",
                fields: [
                  {
                    type: "string",
                    label: "Section Title",
                    name: "sectionTitle",
                  },
                  {
                    type: "string",
                    label: "Button Label",
                    name: "buttonLabel",
                  },
                  {
                    type: "object",
                    label: "Machine Card",
                    name: "machineCard",
                    list: true, // Indicates that the carousel can have multiple machine cards
                    fields: [
                      {
                        type: "image",
                        label: "Machine Image",
                        name: "image",
                      },
                      {
                        type: "string",
                        label: "Machine Name",
                        name: "name",
                      },
                      {
                        type: "rich-text",
                        label: "Machine Description",
                        name: "description",
                      },
                      {
                        type: "string",
                        label: "Machine Type",
                        name: "type",
                      },
                    ],
                  },
                ],
              },
              {
                type: "object",
                label: "Quote Section",
                name: "quoteSection",
                fields: [
                  {
                    type: "object",
                    label: "Request Quote Form",
                    name: "requestQuoteForm",
                    fields: [
                      {
                        type: "string",
                        label: "Form Title",
                        name: "formTitle",
                      },
                      {
                        type: "string",
                        label: "Form Field 1 Placeholder",
                        name: "field1Placeholder",
                      },
                      {
                        type: "string",
                        label: "Form Field 2 Placeholder",
                        name: "field2Placeholder",
                      },
                      {
                        type: "rich-text",
                        label: "Form Field 3 Placeholder",
                        name: "field3Placeholder",
                      },
                      {
                        type: "string",
                        label: "Submit Button Text",
                        name: "submitButtonText",
                      },
                    ],
                  },
                  {
                    type: "string",
                    label: "Request Copy Title",
                    name: "requestCopyTitle",
                  },
                  {
                    type: "rich-text",
                    label: "Fill Form Copy",
                    name: "fillFormCopy",
                  },
                  {
                    type: "rich-text",
                    label: "Email Copy",
                    name: "emailCopy",
                  },
                  {
                    type: "rich-text",
                    label: "Response Copy",
                    name: "responseCopy",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
