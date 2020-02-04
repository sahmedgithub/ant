import React from 'react';
import { Button as AntButton, Slider as AntSlider, 
    InputNumber as AntInputNumber, Switch as AntSwitch, 
    DatePicker as AntDatePicker,  Select as AntSelect,
    Form as AntForm  } from 'antd';

export function Button(props) {
    return <AntButton {...props}/>
}

export function Slider(props) {
    return <AntSlider {...props}/>
}

export function InputNumber(props) {
    return <AntInputNumber {...props} />
}

export function Switch(props) {
    return <AntSwitch {...props} />
}

export function DatePicker(props) {
    return <AntDatePicker {...props} />
}

export function Select(props) {
    console.log(props)
    return <AntSelect {...props} />
}
Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;

export function Form(props) {
    return <AntForm {...props} />
}
Form.Item = AntForm.Item;



