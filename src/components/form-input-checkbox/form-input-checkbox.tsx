import React, { ChangeEventHandler } from 'react';

export const FormInputCheckbox = (props: {
  onChange?: ChangeEventHandler<unknown> | undefined;
  label: string;
  register: any;
}) => {
  const { onChange, label, register } = props;
  return (
    <div className='form-control'>
      <label className='label cursor-pointer'>
        <span className='font-bold label-text'>{label}</span>
        <input
          type='checkbox'
          className='toggle toggle-primary'
          onChange={onChange}
          {...register}
        />
      </label>
    </div>
  );
};
