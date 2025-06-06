import React from 'react';

const CheckboxField = ({ field, value, onChange }) => (
  <div className="mb-6">
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={value || false}
        onChange={(e) => onChange(field.name, e.target.checked)}
        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <span className="text-sm font-medium text-gray-700">{field.label}</span>
    </label>
  </div>
);

export default CheckboxField;