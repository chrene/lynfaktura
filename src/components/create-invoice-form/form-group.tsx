import classNames from 'classnames';

export const FormGroup = (props: {
  [x: string]: any;
  children: any;
  className?: string;
  autoCols?: boolean;
  cols?: boolean;
}) => {
  const { children, className, autoCols, cols, ...rest } = props;
  return (
    <div
      className={classNames('grid gap-4 lg:gap-8', className, {
        'grid-flow-col grid-auto-fr': autoCols && !cols,
        'grid-cols-12': cols && !autoCols,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
