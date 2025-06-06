import React from 'react';
import DynamicFormRenderer from './components/DynamicFormRenderer';
import { sampleSchema } from './schemas/sampleSchema';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <DynamicFormRenderer schema={sampleSchema} />
    </div>
  );
}

export default App;