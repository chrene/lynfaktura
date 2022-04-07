import React from 'react';
import classNames from 'classnames';

export const FormInput = (props: {
  placeholder?: string;
  topLeftLabel?: string;
  type?: string;
  register?: any;
  className?: string;
}) => {
  const { placeholder, className, type, topLeftLabel, register, ...rest } =
    props;
  return (
    <div className={classNames('form-control', className)}>
      <label className='label'>
        <span className='label-text'>{topLeftLabel}</span>
      </label>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        className='input input-bordered input'
        {...register}
        {...rest}
      />
    </div>
  );
};
