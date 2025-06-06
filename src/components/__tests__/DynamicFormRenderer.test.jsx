import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DynamicFormRenderer from '../DynamicFormRenderer';

const mockSchema = {
  title: "Test Form",
  fields: [
    { label: "Name", type: "text", name: "name", required: true },
    { label: "Age", type: "number", name: "age" },
    { label: "Subscribe", type: "checkbox", name: "subscribe" }
  ]
};

describe('DynamicFormRenderer', () => {
  test('renders form with title', () => {
    render(<DynamicFormRenderer schema={mockSchema} />);
    expect(screen.getByText('Test Form')).toBeInTheDocument();
  });

  test('renders all fields from schema', () => {
    render(<DynamicFormRenderer schema={mockSchema} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  test('shows validation error for required fields', async () => {
    render(<DynamicFormRenderer schema={mockSchema} />);
    const submitButton = screen.getByText('Submit');
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
    });
  });

  test('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<DynamicFormRenderer schema={mockSchema} />);
    
    const nameInput = screen.getByLabelText(/Name/);
    await user.type(nameInput, 'John Doe');
    
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Submitted Data')).toBeInTheDocument();
      expect(screen.getByText(/"name": "John Doe"/)).toBeInTheDocument();
    });
  });

  test('resets form when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<DynamicFormRenderer schema={mockSchema} />);
    
    const nameInput = screen.getByLabelText(/Name/);
    await user.type(nameInput, 'John Doe');
    
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);
    
    expect(nameInput.value).toBe('');
  });
});