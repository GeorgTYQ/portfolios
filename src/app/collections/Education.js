export const Educations = {
  slug: "educations",
  admin: {
    useAsTitle: "degree",
  },
  fields: [
    {
      name: "degree",
      type: "text",
      required: true,
    },
    {
      name: "institution",
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
      name: "grade",
      type: "text",
      admin: {
        placeholder: "e.g., WAM: 75%, GPA: 3.8",
      },
    },
  ],
};
