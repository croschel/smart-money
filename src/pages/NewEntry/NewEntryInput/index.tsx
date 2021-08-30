import React from 'react';
import InputMoney from '~/components/Core/InputMoney';

interface NewEntryInputProps {
  value: string;
  onChangeValue: () => void;
  onChangeDebit: () => void;
}

const NewEntryInput = ({
  value,
  onChangeValue,
  onChangeDebit,
}: NewEntryInputProps) => {
  return (
    <InputMoney
      value={value}
      onChangeDebit={onChangeDebit}
      onChangeValue={onChangeValue}
    />
  );
};

export default NewEntryInput;
