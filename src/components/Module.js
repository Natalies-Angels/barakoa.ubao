import React from 'react';
import Section from './Section';

export default function Module({ module }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg mb-8">
      <h1 className="text-2xl font-bold mb-4">{module.title}</h1>
      <p className="text-gray-600 mb-6">{module.preview}</p>

      {module.sections.map((section, idx) => (
        <Section key={idx} {...section} />
      ))}
    </div>
  );
}
