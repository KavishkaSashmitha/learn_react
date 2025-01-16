'use client';

import React, { useState } from 'react';
import Text from '../components/Text';
import Stopwatch from '../components/Stopwatch';

const CounterApp = () => {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string>('');

  const updateCount = (type: 'increment' | 'decrement' | 'reset') => {
    setLastAction(type);
    if (type === 'reset') {
      setCount(0);
      return;
    }
    setCount((prev) => prev + (type === 'increment' ? 1 : -1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md shadow-xl">
        <div className="p-6">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              React Counter
            </h2>
            <Text value={count} />
            <div className="relative p-8">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => updateCount('decrement')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-xl font-semibold transition-all duration-200 hover:scale-105"
                >
                  -
                </button>

                <button
                  onClick={() => updateCount('reset')}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
                >
                  Reset
                </button>

                <button
                  onClick={() => updateCount('increment')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-xl font-semibold transition-all duration-200 hover:scale-105"
                >
                  +
                </button>
              </div>

              {lastAction && (
                <div className="mt-4 text-sm text-gray-600">
                  Last action: {lastAction}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="stopwatch">
        <Stopwatch />
      </div>
    </div>
  );
};

export default CounterApp;
