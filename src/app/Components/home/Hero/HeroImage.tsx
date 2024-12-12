const HeroImage = () => {
  return (
    <div className="w-full aspect-[4/3] border border-gray-200 rounded-lg relative">
      {/* First diagonal line: top-left to bottom-right */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div 
          className="absolute top-0 left-0 w-[104%] h-[1px] bg-gray-200 origin-top-left"
          style={{ transform: 'rotate(45deg)' }}
        />
      </div>
      
      {/* Second diagonal line: top-right to bottom-left */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div 
          className="absolute top-0 right-0 w-[104%] h-[1px] bg-gray-200 origin-top-right"
          style={{ transform: 'rotate(-45deg)' }}
        />
      </div>
    </div>
  );
};

export default HeroImage; 