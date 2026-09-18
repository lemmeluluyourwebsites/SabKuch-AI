import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  showArrow?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  type = 'button',
  className = '',
  disabled = false,
  fullWidth = false,
  showArrow = false
}) => {
  const commonClasses = `btn btn-primary ${fullWidth ? 'w-full' : ''} ${className}`;
  const widthStyle = fullWidth ? { width: '100%' } : {};

  if (href) {
    return (
      <a href={href} className={commonClasses} style={widthStyle}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="btn-icon" size={15} />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={commonClasses}
      style={widthStyle}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="btn-icon" size={15} />}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  type = 'button',
  className = '',
  disabled = false,
  fullWidth = false,
  showArrow = false
}) => {
  const commonClasses = `btn btn-secondary ${fullWidth ? 'w-full' : ''} ${className}`;
  const widthStyle = fullWidth ? { width: '100%' } : {};

  if (href) {
    return (
      <a href={href} className={commonClasses} style={widthStyle}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="btn-icon" size={15} />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={commonClasses}
      style={widthStyle}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="btn-icon" size={15} />}
    </button>
  );
};
