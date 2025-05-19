import { useState } from 'react';

interface PizzaCalculatorProps {
  unit: 'cm' | 'inch';
  onRemove: () => void;
  showDelete: boolean;
}

export default function PizzaCalculator({unit, onRemove, showDelete}: PizzaCalculatorProps) {
    const [diameter, setDiameter] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [isCalculated, setIsCalculated] = useState<boolean>(false);
    const [pricePerSquare, setPricePerSquare] = useState<number>(0);

    const handleDiameterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDiameter(Number(e.target.value));
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(Number(e.target.value));
    }

    const handleCalculate = () => {
      const area = Math.PI * (diameter / 2) ** 2;
      const pricePerSquare = Number((price / area).toFixed(2));
      setPricePerSquare(pricePerSquare);
      setIsCalculated(true);
    }

    const handleClear = () => {
      setDiameter(0);
      setPrice(0);
      setIsCalculated(false);
      setPricePerSquare(0);
    }

    return (
      <>
        <div className='pizza-calculator'>
            <div>
                <label>Diameter: </label>
                <input type="number"
                  placeholder="Enter the diameter of the pizza"
                  onChange={handleDiameterChange}/>
            </div>
            <div>
                <label>Price: </label>
                <input type="number"
                  placeholder="Enter the price of the pizza"
                  onChange={handlePriceChange}/>
            </div>

            <button onClick={handleCalculate} style={{marginLeft: '1rem'}}>Calculate</button>
            <button onClick={handleClear}>Clear</button>
            {showDelete && (
              <button onClick={onRemove} className="delete-button">Delete</button>
            )}
        </div>

        {isCalculated && (
          <div className="result">
            <label>Price per {unit === 'cm' ? 'cm²' : 'inch²'}: ${pricePerSquare}</label>
          </div>
        )}
      </>
    )
}