import Image from 'next/image';

type ThumbnailProps = {
  src: string;
};

export default function Thumbnail({ src }: ThumbnailProps) {
  return (
    <Image
      src={src}
      alt={src.split('/').at(-1)}
      width={832}
      height={468}
      className='mx-auto my-4 rounded-xl w-[832px] h-[468px] object-cover'
    />
  );
}
