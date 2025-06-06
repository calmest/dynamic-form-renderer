# Dynamic Form Renderer

A lightweight, schema-driven React component for rendering dynamic forms with built-in validation, state management, and a clean, modular architecture.

## 🚀 Features

### Core Requirements ✅
- **Dynamic Field Rendering**: Automatically generates form fields based on JSON schema
- **Internal State Management**: Built-in form state handling with custom hooks
- **Form Submission**: Displays submitted data as formatted JSON
- **Required Field Validation**: Validates required fields with error messages

### Bonus Features 🌟
- **Additional Field Types**: Support for `textarea` and `date` fields
- **Field Validation Messages**: Real-time validation with user-friendly error messages
- **Modular Architecture**: Reusable field components and custom hooks
- **Responsive Design**: Mobile-first, fully responsive layout using Tailwind CSS
- **Touch State Handling**: Shows errors only after field interaction
- **Reset Functionality**: Clear form and start over

## 📦 Installation

```bash
npm install
```

## 🛠️ Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

## 📋 Schema Format

The form renderer accepts a schema object with the following structure:

```javascript
{
  "title": "Form Title",
  "fields": [
    {
      "label": "Field Label",
      "type": "field-type",
      "name": "field_name",
      "required": true/false,
      "options": ["option1", "option2"], // For select fields
      "rows": 4 // For textarea fields
    }
  ]
}
```

### Supported Field Types

| Type | Description | Additional Properties |
|------|-------------|----------------------|
| `text` | Single-line text input | - |
| `number` | Numeric input | - |
| `checkbox` | Boolean checkbox | - |
| `select` | Dropdown selection | `options: string[]` |
| `textarea` | Multi-line text input | `rows: number` (optional) |
| `date` | Date picker | - |

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests with UI:

```bash
npm run test:ui
```

Generate test coverage:

```bash
npm run test:coverage
```

## 📄 License

MIT License