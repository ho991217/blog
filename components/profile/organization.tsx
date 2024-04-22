type OrganizationProps = {
  name: string;
  href: string;
  imageUrl: string;
};

export default function Organization({
  name,
  href,
  imageUrl,
}: OrganizationProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-2 border-[1px] border-neutral-300 dark:border-neutral-800 p-[4px_8px_4px_4px] rounded-md hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors duration-200 ease-in-out'
    >
      <img src={imageUrl} alt={name} className='w-5 h-5 rounded-full' />
      <span className='text-xs font-semibold'>{name}</span>
    </a>
  );
}
