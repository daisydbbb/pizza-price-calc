import { useState } from 'react';
import UnitButton from './components/UnitButton';


function App() {
  const [unit, setUnit] = useState<'cm' | 'inch'>('cm');
  const handleUnitChange = (newUnit: 'cm' | 'inch') => {
    setUnit(newUnit);
  };

  return (
    <div className="container">
      <div className="header">Pizza price per square 🍕</div>
      <UnitButton selectedUnit={unit} handleUnitChange={handleUnitChange} />

    </div>
  );
}

export default App;
