import React from 'react';
import classNames from 'classnames';

export const FormInputCheckbox = (props: {
  label?: string;
  register?: any;
  className?: string;
  onChange?: any;
}) => {
  const { className, label, register, ...rest } = props;
  return (
    <div className={classNames('form-control', className)}>
      <label className='label cursor-pointer'>
        <span className='label-text'>{label}</span>
        <input type='checkbox' className='checkbox' {...register} {...rest} />
      </label>
    </div>
  );
};
