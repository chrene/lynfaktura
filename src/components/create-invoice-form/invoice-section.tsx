export const InvoiceSection = ({ title, ...props }) => {
  const { children } = props;
  return (
    <div className='flex flex-col gap-8' {...props}>
      <h2 className='text-lg font-bold'>{title}</h2>
      <div className='flex flex-col gap-8'>{children}</div>
    </div>
  );
};
