import classNames from 'classnames';
import React, { ChangeEventHandler } from 'react';

export const FormInputCheckbox = (props: {
  onChange?: ChangeEventHandler<unknown> | undefined;
  label: string;
  className?: string;
  register: any;
}) => {
  const { onChange, label, register, className } = props;
  return (
    <div className={classNames('form-control', className)}>
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
