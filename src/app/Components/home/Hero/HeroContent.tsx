import Button from '../../common/Button/Button';

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-6 max-w-2xl mt-32">
      <h1 className="text-6xl font-bold text-white leading-tight">
        A Trusted{' '}
        <br />
        Carpool{' '}
        <br />
        Solution for Parents
      </h1>
      <p className="text-xl text-white/90">
        We are here to make carpooling safe, efficient, and easy for busy parents 
        like you. Ready to get started?
      </p>
      <div>
        <Button 
          variant="primary" 
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default HeroContent; 