import React from 'react';
import style from './Filter.module.css';

const Filter = ({ manufacturers, filterValues: { text, manufacture }, onChange }) => {
  const handleChange = (value) => {
    onChange({
      text: value.text || text,
      manufacture: value.manufacture || manufacture,
    });
  };

  const handleClear = () => {
    onChange({ text: '', manufacture: 'All' });
  };

  return (
    <div className={style.Filter}>
      <div className={style.FilterHeader}>
        <h4>Search</h4>
        <button className={style.Clear} onClick={handleClear}>
          Clear
        </button>
      </div>
      <div>
        <input
          type='text'
          placeholder='search...'
          value={text}
          onChange={(e) => handleChange({ text: e.target.value })}
        />
      </div>
      <h4>Manufacturer</h4>
      <div>
        {manufacturers.map((item) => (
          <div key={item}>
            <input
              type='radio'
              name='manufacturere'
              id={item}
              value={item}
              checked={item === manufacture}
              onChange={(e) => handleChange({ manufacture: e.target.value })}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
