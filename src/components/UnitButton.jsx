import { useState } from "react";

export default function UnitButton({selectedUnit, handleUnitChange}) {
  return (
    <div className="unit-button-container">
      <button
        className={`unit-button ${selectedUnit === 'cm' ? 'active' : ''}`}
        onClick={() => handleUnitChange('cm')}
      >
        Centimeters
      </button>
      <button
        className={`unit-button ${selectedUnit === 'inch' ? 'active' : ''}`}
        onClick={() => handleUnitChange('inch')}
      >
        Inches
      </button>
    </div>
  )

}