interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ variant = 'primary', children, onClick, className = '', type = 'button' }: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-lg font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-[#008540] text-white hover:bg-[#008540]/90',
    outline: 'border-2 border-[#008540] text-[#008540] hover:bg-[#008540]/5'
  };

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 