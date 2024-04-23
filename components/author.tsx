type AuthorProps = {
  date: string;
  by?: string;
};

export default function Author({ date, by = 'by' }: AuthorProps) {
  return (
    <div className='mt-4 mb-16 text-gray-500 text-sm'>
      {date} {by}
      <span className="after:content-[','] last:after:content-['']">
        <a
          key={'이호연'}
          href={'https://github.com/ho991217'}
          target='_blank'
          className='mx-1 text-current underline [text-underline-position:from-font] decoration-from-font'
        >
          이호연
        </a>
      </span>
    </div>
  );
}
