import React from 'react';

// Update the props type to expect an object with a value property
function Text({ value }: { value: number }) {
  return (
    <div>
      <div className="text-6xl font-bold text-red-500 mb-4">{value}</div>
    </div>
  );
}

export default Text;
