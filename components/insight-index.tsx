import { getPagesUnderRoute } from 'nextra/context';
import Link from 'next/link';

export default function InsightIndex() {
  return getPagesUnderRoute('/insight').map((page) => {
    return (
      <div key={page.route} className='mb-10'>
        <h3>
          <Link
            href={page.route}
            style={{ color: 'inherit', textDecoration: 'none' }}
            className='block font-semibold mt-8 text-2xl leading-9'
          >
            {page.meta?.title || page.meta?.title || page.name}
            {page.meta?.image && (
              <img
                src={page.meta.image}
                alt={page.meta?.title || page.name}
                className='w-full h-48 object-cover rounded-lg mt-1'
              />
            )}
          </Link>
        </h3>
        {page.meta?.description && (
          <p className='opacity-80 leading-7'>{page.meta?.description} </p>
        )}
        {page.meta?.date && (
          <p className='opacity-50 text-sm mt-1 leading-7'>{page.meta.date}</p>
        )}
        <span className='inline-block mt-4'>
          <Link
            href={page.route}
            className='text-[color:hsl(var(--nextra-primary-hue),100%,50%)] underline underline-offset-2 decoration-from-font'
          >
            더 보기 →
          </Link>
        </span>
      </div>
    );
  });
}
