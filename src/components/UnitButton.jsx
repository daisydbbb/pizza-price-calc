import { IoMdAddCircleOutline } from "react-icons/io";

export default function UnitButton({selectedUnit, handleUnitChange, handleAddCalculator}) {
  return (
    <div className="unit-button-wrapper">
      <div className="unit-button-container">
        <button
          className={`unit-button ${selectedUnit === 'inch' ? 'active' : ''}`}
          onClick={() => handleUnitChange('inch')}
        >
          Inches
        </button>
        <button
          className={`unit-button ${selectedUnit === 'cm' ? 'active' : ''}`}
          onClick={() => handleUnitChange('cm')}
        >
          Centimeters
        </button>
      </div>
      <div className="add-button-container">
        <IoMdAddCircleOutline
          style={{marginTop: '1rem', fontSize: '2rem', cursor: 'pointer'}}
          onClick={handleAddCalculator}
        />
      </div>
    </div>
  )
}