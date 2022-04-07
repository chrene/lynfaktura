import classNames from 'classnames';

export const Button = (props: {
  children: any;
  onClick?: any;
  primary?: boolean;
  outline?: boolean;
  ghost?: boolean;
}) => {
  const { children, onClick, primary, outline, ghost } = props;

  const classes = classNames('btn', {
    'btn-primary': primary,
    'btn-outline': outline,
    'btn-ghost': ghost,
    'gap-2': children.length > 1,
  });

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
