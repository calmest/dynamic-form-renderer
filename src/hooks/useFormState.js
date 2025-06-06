import { useState, useCallback, useMemo } from 'react';

export const useFormState = (fields) => {
  const initialState = useMemo(() => {
    return fields.reduce((acc, field) => {
      if (field.type === 'checkbox') {
        acc[field.name] = false;
      } else if (field.type === 'number') {
        acc[field.name] = '';
      } else {
        acc[field.name] = '';
      }
      return acc;
    }, {});
  }, [fields]);

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = useCallback((name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const handleBlur = useCallback((name) => {
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    const allTouched = {};
    
    fields.forEach(field => {
      // Mark all fields as touched when validating
      allTouched[field.name] = true;
      
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
      
      // Additional validation for specific types
      if (field.type === 'number' && formData[field.name]) {
        const numValue = Number(formData[field.name]);
        if (isNaN(numValue)) {
          newErrors[field.name] = `${field.label} must be a valid number`;
        }
      }
      
      if (field.type === 'date' && formData[field.name]) {
        const date = new Date(formData[field.name]);
        if (isNaN(date.getTime())) {
          newErrors[field.name] = `${field.label} must be a valid date`;
        }
      }
    });
    
    setErrors(newErrors);
    setTouched(allTouched);
    return Object.keys(newErrors).length === 0;
  }, [fields, formData]);

  const reset = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
  }, [initialState]);

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset
  };
};