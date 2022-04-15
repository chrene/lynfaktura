import classNames from 'classnames';
import React from 'react';

export function Divider({ className }: { className?: string }) {
  return <div className={classNames('divider ', className)}></div>;
}
