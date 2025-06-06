import React from 'react';

const SelectField = ({ field, value, onChange, onBlur, error, touched }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {field.label}
      {field.required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(field.name, e.target.value)}
      onBlur={() => onBlur(field.name)}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        error && touched ? 'border-red-500' : 'border-gray-300'
      }`}
    >
      <option value="">Select an option</option>
      {field.options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    {error && touched && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);

export default SelectField;