import React from 'react';
import Divider from '../divider';

export const FlexContainer = (props: {
  [x: string]: any;
  children: any;
  dividers?: boolean;
}) => {
  const { children, dividers, ...rest } = props;
  return (
    <div className='flex flex-col gap-8' {...rest}>
      {dividers
        ? children.map((child: React.ReactChild, index: React.Key) => {
            return (
              <React.Fragment key={index}>
                {index > 0 && <Divider className='my-8' />}
                {child}
              </React.Fragment>
            );
          })
        : children}
    </div>
  );
};
