interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ variant = 'primary', children, onClick, className = '' }: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-black text-white hover:bg-black/90',
    outline: 'border-2 border-black text-black hover:bg-black/5'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 