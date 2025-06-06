import React from 'react';

const DateField = ({ field, value, onChange, onBlur, error, touched }) => (
  <div className="mb-6">
    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
      {field.label}
      {field.required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      id={field.name}
      type="date"
      value={value}
      onChange={(e) => onChange(field.name, e.target.value)}
      onBlur={() => onBlur(field.name)}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        error && touched ? 'border-red-500' : 'border-gray-300'
      }`}
    />
    {error && touched && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);

export default DateField;