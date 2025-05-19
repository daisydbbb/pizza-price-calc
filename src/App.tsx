import { useState } from 'react';
import UnitButton from './components/UnitButton';
import PizzaCalculator from './components/PizzaCalculator';

function App() {
  const [unit, setUnit] = useState<'cm' | 'inch'>('cm');
  const [calculators, setCalculators] = useState<number[]>([0]);

  const handleUnitChange = (newUnit: 'cm' | 'inch') => {
    setUnit(newUnit);
  };

  const handleAddCalculator = () => {
    setCalculators(prev => [...prev, prev.length]);
  };

  const handleRemoveCalculator = (id: number) => {
    setCalculators(prev => prev.filter(calcId => calcId !== id));
  };

  return (
    <div className="container">
      <div className="header">Pizza price per square 🍕</div>
      <div>
        <UnitButton
          selectedUnit={unit}
          handleUnitChange={handleUnitChange}
          handleAddCalculator={handleAddCalculator}
        />
      </div>
      {calculators.map(id => (
        <PizzaCalculator
          key={id}
          unit={unit}
          onRemove={() => handleRemoveCalculator(id)} // callback function
          showDelete={calculators.length > 1}
        />
      ))}
    </div>
  );
}

export default App;
