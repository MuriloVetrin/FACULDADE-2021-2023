import React from 'react';
import { Select as AntdSelect} from 'antd';

export type SelectOption = {
  value: string | number,
  label: string
}

export type SelectOptions = SelectOption[]

type SelectProps = {
  onChange: (e: string | number) => void
  defaultValue?: string | number,
  options: SelectOptions,
  label: string,
  isRequired?: boolean,
}


const Select: React.FC<SelectProps>= ({
  onChange,
  defaultValue,
  options,
  label,
  isRequired
}) => {

  return (
    <div className="md:w-3/3 mr-auto mb-8 ">
      <div className="w-full">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={label}>
          {label}
        </label>
        <AntdSelect
          onChange={onChange}
          showSearch
          id={label}
          defaultValue={defaultValue}
          style={{ width: '100%' }}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={options}
        />
        {isRequired && <p className="text-gray-600 text-xs italic">Please fill out this field.</p>}
      </div>
    </div>
  )
}

export default Select;