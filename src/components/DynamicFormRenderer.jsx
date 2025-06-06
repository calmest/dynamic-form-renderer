import React, { useState } from 'react';
import { useFormState } from '../hooks/useFormState';
import FieldRenderer from './FieldRenderer';

const DynamicFormRenderer = ({ schema }) => {
  const [submittedData, setSubmittedData] = useState(null);
  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset
  } = useFormState(schema.fields);

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    if (validate()) {
      setSubmittedData(formData);
    }
  };

  const handleReset = () => {
    reset();
    setSubmittedData(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{schema.title}</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {schema.fields.map(field => (
          <FieldRenderer
            key={field.name}
            field={field}
            value={formData[field.name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors[field.name]}
            touched={touched[field.name]}
          />
        ))}
        
        <div className="flex gap-4 mt-8">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
      
      {submittedData && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Submitted Data</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default DynamicFormRenderer;