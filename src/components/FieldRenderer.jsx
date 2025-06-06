import React from 'react';
import TextField from './fields/TextField';
import NumberField from './fields/NumberField';
import CheckboxField from './fields/CheckboxField';
import SelectField from './fields/SelectField';
import TextAreaField from './fields/TextAreaField';
import DateField from './fields/DateField';

const FieldRenderer = ({ field, value, onChange, onBlur, error, touched }) => {
  const fieldComponents = {
    text: TextField,
    number: NumberField,
    checkbox: CheckboxField,
    select: SelectField,
    textarea: TextAreaField,
    date: DateField
  };

  const FieldComponent = fieldComponents[field.type];
  
  if (!FieldComponent) {
    console.warn(`Unsupported field type: ${field.type}`);
    return null;
  }

  return (
    <FieldComponent
      field={field}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      touched={touched}
    />
  );
};

export default FieldRenderer;