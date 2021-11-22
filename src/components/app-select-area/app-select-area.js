import Select, { components } from 'react-select';
import arrowSelect from './arrow_select.svg';

import './app-select-area.scss'
 
const options = [
    { value: '7', label: 'водитель' },
    { value: '9', label: 'кассир' },
    { value: '8', label: 'пекарь' },
    { value: '11', label: 'повар' },
    { value: '12', label: 'приемщик' },
    { value: '10', label: 'продавец' },
    { value: '6', label: 'товаровед' }
];

const DropdownIndicator = (
  props: ElementConfig<typeof components.DropdownIndicator>
) => {
  return (
    <components.DropdownIndicator {...props}>
          <img src={arrowSelect} alt={"icon"}/>
    </components.DropdownIndicator>
  );
};
const SelectArea = ({change}) => {
  return <Select options={options}
    placeholder='Выбирете...'
    components={{ DropdownIndicator }}
    onChange={change}
            />
}

export default SelectArea;