import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Preto', value: '0' },
  { label: 'Marrom', value: '1' },
  { label: 'Vermelho', value: '2' },
  { label: 'Laranja', value: '3' },
  { label: 'Amarelo', value: '4' },
  { label: 'Verde', value: '5' },
  { label: 'Azul', value: '6' },
  { label: 'Violeta', value: '7' },
  { label: 'Cinza', value: '8' },
  { label: 'Branco', value: '9' },
];

const DropdownComponent = ({ onColorSelected }) => {
  const [value, setValue] = useState(null);

  const handleColorSelection = (item) => {
    setValue(item.value);
    onColorSelected(item.value);
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Selecione a cor"
      searchPlaceholder="Search..."
      value={value}
      onChange={handleColorSelection}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    
    width:150,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});

export default DropdownComponent;