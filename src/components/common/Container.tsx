import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  narrow = false,
  className = '',
  id
}) => {
  return (
    <div id={id} className={`${narrow ? 'container-narrow' : 'container'} ${className}`}>
      {children}
    </div>
  );
};
