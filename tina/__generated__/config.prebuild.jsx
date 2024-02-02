// tina/config.ts
import { defineConfig } from "tinacms";
var branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";
var config_default = defineConfig({
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
        label: "Global Settings",
        name: "globals",
        path: "content/globals",
        format: "json",
        fields: [
          {
            type: "object",
            label: "Navigation",
            name: "navigation",
            fields: [
              {
                type: "image",
                label: "Logo",
                name: "logo",
              },
              {
                type: "object",
                label: "Navigation Links",
                name: "navigationLinks",
                list: true,
                // Allows for an array of navigation links
                fields: [
                  {
                    type: "string",
                    label: "Nav Link Name",
                    name: "text",
                  },
                  {
                    type: "string",
                    label: "Nav Link URL",
                    name: "url",
                    list: true,
                    options: [
                      { label: "Home", value: "/" },
                      { label: "About Us", value: "/about-us" },
                      { label: "View Machines", value: "/view-machines" },
                      { label: "Careers", value: "/careers" },
                      {
                        label: "Request a Quote / Contact Us",
                        value: "/request-quote",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Footer",
            name: "footer",
            fields: [
              {
                type: "image",
                label: "Logo",
                name: "logo",
              },
              {
                type: "rich-text",
                label: "Mailing Address",
                name: "mailingAddress",
              },
              {
                type: "rich-text",
                label: "Shipping Address",
                name: "shippingAddress",
              },
              {
                type: "string",
                label: "Phone",
                name: "phone",
              },
              {
                type: "string",
                label: "Email",
                name: "email",
              },
            ],
          },
        ],
      },
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
                    list: true,
                    // Indicates that the carousel can have multiple machine cards
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
            ],
          },
        ],
      },
    ],
  },
});
export { config_default as default };
