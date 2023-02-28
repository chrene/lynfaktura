import React from 'react';
import classNames from 'classnames';
import { ErrorMessage } from '@hookform/error-message';

export const FormInput = (props: {
  placeholder?: string;
  label?: string;
  type?: string;
  register?: any;
  className?: string;
  errors?: any;
  onChange?: any;
}) => {
  const { placeholder, className, type, label, register, errors = {}, ...rest } = props;
  return (
    <div className={classNames('form-control relative', className)}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        className={classNames('input input-bordered focus:outline-none', className)}
        {...register}
        {...rest}
      />
      <ErrorMessage
        errors={errors}
        name={register.name}
        render={(props) => {
          return <span className="text-error mt-2">{props.message}</span>;
        }}
      />
    </div>
  );
};
