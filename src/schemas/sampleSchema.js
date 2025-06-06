export const sampleSchema = {
  title: "User Registration",
  fields: [
    { 
      label: "Name", 
      type: "text", 
      name: "name", 
      required: true 
    },
    { 
      label: "Age", 
      type: "number", 
      name: "age" 
    },
    { 
      label: "Subscribe", 
      type: "checkbox", 
      name: "subscribe" 
    },
    {
      label: "Gender",
      type: "select",
      name: "gender",
      options: ["Male", "Female", "Other"]
    },
    { 
      label: "Bio", 
      type: "textarea", 
      name: "bio", 
      rows: 4 
    },
    { 
      label: "Birth Date", 
      type: "date", 
      name: "birthDate", 
      required: true 
    }
  ]
};