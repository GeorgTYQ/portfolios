export const Experiences = {
  slug: "experiences",
  fields: [
    {
      name: "jobTitle",
      type: "text",
      required: true,
    },
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "startDate",
      type: "date",
    },
    {
      name: "endDate",
      type: "date",
      admin: {
        description: "Leave blank if ongoing",
      },
    },
    {
      name: "descriptions",
      type: "array",
      required: true,
      fields: [
        {
          name: "text",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};

export default Experiences;
