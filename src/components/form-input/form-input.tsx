import React from 'react';
import classNames from 'classnames';
import { ErrorMessage } from '@hookform/error-message';

const getValue = (object, keys) =>
  keys.split('.').reduce((o, k) => (o || {})[k], object);

export const FormInput = (props: {
  placeholder?: string;
  topLeftLabel?: string;
  type?: string;
  register?: any;
  className?: string;
  errors?: any;
  onChange?: any;
}) => {
  const {
    placeholder,
    className,
    type,
    topLeftLabel,
    register,
    errors = {},
    ...rest
  } = props;
  return (
    <div className={classNames('form-control', className)}>
      <label className='label'>
        <span className='label-text'>{topLeftLabel}</span>
      </label>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        className={classNames('input input-bordered', className)}
        {...register}
        {...rest}
      />
      <ErrorMessage
        errors={errors}
        name={register.name}
        render={(props) => {
          return <span className='text-error mt-2'>{props.message}</span>;
        }}
      />
    </div>
  );
};
