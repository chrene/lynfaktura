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
      <label className='label cursor-pointer px-0 py-1 whitespace-nowrap gap-8'>
        <span className='font-semibold label-text'>{label}</span>
        <input
          type='checkbox'
          className='toggle toggle-accent'
          onChange={onChange}
          {...register}
        />
      </label>
    </div>
  );
};
