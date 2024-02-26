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
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
            if (document._sys.filename === "view_machines") {
              return "/view-machines";
            }
            if (document._sys.filename === "careers") {
              return "/view-careers";
            }
          },
        },
        templates: [
          {
            name: "home",
            label: "Home",
            fields: [
              {
                name: "blocks",
                label: "Blocks",
                type: "object",
                list: true,
                templates: [
                  {
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
                    label: "Location",
                    name: "location",
                    fields: [
                      {
                        type: "string",
                        label: "Location",
                        name: "location",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                  {
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
                        type: "reference",
                        collections: ["machines"],
                        name: "machineCards",
                        label: "Machine Cards",
                      },
                    ],
                  },
                  {
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
          {
            name: "viewMachines",
            label: "View Machines",
            fields: [
              {
                name: "blocks",
                label: "Blocks",
                type: "object",
                list: true,
                templates: [
                  {
                    label: "Machines",
                    name: "machines",
                    fields: [
                      {
                        name: "heading",
                        label: "Heading",
                        type: "string",
                      },
                      {
                        name: "description",
                        label: "Description",
                        type: "string",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        name: "machineCards",
                        label: "Machine Cards",
                        type: "reference",
                        collections: ["machines"],
                      },
                    ],
                  },
                  {
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
          {
            name: "careers",
            label: "Careers",
            fields: [
              {
                name: "blocks",
                label: "Blocks",
                type: "object",
                list: true,
                templates: [
                  {
                    label: "Benefits Section",
                    name: "benefits",
                    fields: [
                      {
                        name: "heading",
                        label: "Heading",
                        type: "string",
                      },
                      {
                        name: "benefits",
                        label: "Benefits",
                        type: "object",
                        list: true,
                        ui: {
                          itemProps: (item) => {
                            return { label: item?.benefitTitle };
                          },
                          max: 3,
                        },
                        fields: [
                          {
                            name: "benefitTitle",
                            type: "string",
                            label: "Benefit Title",
                          },
                          {
                            name: "icon",
                            type: "image",
                            label: "Icon",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Machines",
        name: "machines",
        path: "content/machines",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "machines") {
              return "/view-machines";
            }
          },
        },
        fields: [
          {
            type: "object",
            label: "Machine Cards",
            name: "machineCard",
            list: true, // Indicates that the carousel can have multiple machine cards
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              {
                type: "string",
                label: "Machine Name",
                name: "name",
                required: true,
              },
              {
                type: "image",
                label: "Machine Image",
                name: "image",
                required: true,
              },
              {
                type: "rich-text",
                label: "Machine Description",
                name: "description",
                required: true,
                description:
                  "Please select Bullet List in the input field to add Machine's description in the correct format",
              },
              {
                type: "string",
                label: "Machine Type",
                name: "type",
                required: true,
                description:
                  "Existing types include Mill, Lathe, Inspection, Engraver, and Bandsaw",
              },
            ],
          },
        ],
      },
    ],
  },
});
