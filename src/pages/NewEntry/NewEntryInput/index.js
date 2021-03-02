import React from 'react';
import InputMoney from '~/components/Core/InputMoney';

const NewEntryInput = (props) => {
  const { value, onChangeValue, onChangeDebit } = props;

  return (
    <InputMoney
      value={value}
      onChangeDebit={onChangeDebit}
      onChangeValue={onChangeValue}
    />
  );
};

export default NewEntryInput;
