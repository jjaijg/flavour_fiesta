import Image from 'next/image';

type FoodImageProps = {
  src: string;
  alt: string;
};

const FoodImage: React.FC<FoodImageProps> = ({ src, alt }) => {
  return (
    <div className="m-8">
      <Image
        src={src}
        width={90}
        height={130}
        className="w-40 h-40 rounded-full object-cover"
        alt={alt}
      />
    </div>
  );
};

export default FoodImage;
