import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import type moment from 'moment';
import { type RangePickerProps as DefaultRangePickerProps } from "antd/lib/date-picker";
export type SelectOption = {
  value: string | number,
  label: string
}
const { RangePicker } = AntdDatePicker;
export type RangePickerValue = moment.Moment;
export type RangePickerValues = [RangePickerValue, RangePickerValue];

export type RangePickerProps = Omit<DefaultRangePickerProps, "onChange"> & {
  label?: string;
  isRequired?: boolean;
  onChange: (values: RangePickerValues) => void;
};

const DatePicker: React.FC<RangePickerProps>= ({
  label = "Date Interval",
  format = "MM-DD-YYYY",
  isRequired,
  onChange,
  ...rest
}) => {

  return (
    <div className="md:w-3/3 mr-auto mb-8 ">
      <div className="w-full">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={label}>
          {label}
        </label>
        <RangePicker
          {...rest}
          format={format}
          onChange={(e) => onChange(e as RangePickerValues)}
        />
        {isRequired && <p className="text-gray-600 text-xs italic">Please fill out this field.</p>}
      </div>
    </div>
  )
}

export default DatePicker;