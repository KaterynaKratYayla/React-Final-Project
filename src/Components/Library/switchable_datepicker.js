import React, { useState } from 'react';
import { DatePicker, TimePicker, Select, Space } from 'antd';
import 'antd/dist/antd.css'
import '../../App.css'

const { Option } = Select;

function PickerWithType({ type, onChange }) {
//   if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker size={'large'} picker={type} onChange={onChange} />;
}

export function SwitchablePicker() {
  const [type, setType] = useState('date');
  return (
    <Space>
      <Select value={type} onChange={setType}>
        {/* <Option value="time">Time</Option> */}
        <Option value="date">Date</Option>
        {/* <Option value="week">Week</Option> */}
        <Option value="month">Month</Option>
        {/* <Option value="quarter">Quarter</Option> */}
        {/* <Option value="year">Year</Option> */}
      </Select>
      <PickerWithType size={'size'} type={type} onChange={value => console.log(value)} />
    </Space>
  );
}