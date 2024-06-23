import Image from 'next/image';
import Badge, { BadgeName } from './badge';
import Link from 'next/link';
import { Button } from 'nextra/components';

type ProjectProps = {
  title: string;
  description: string;
  period: string;
  techStack: BadgeName[];
  blogUrl?: string;
  githubUrl?: string;
  website?: string;
};

export default function Project({
  title,
  description,
  period,
  techStack,
  blogUrl,
  githubUrl,
  website,
}: ProjectProps) {
  return (
    <div className='flex bg-neutral-100 border-[1px] border-neutral-200 dark:bg-neutral-800 rounded-xl p-4 hover:scale-[101%] transition-transform'>
      <div>
        <h3 className='font-extrabold text-2xl mb-2'>{title}</h3>
        <p className='font-bold'>{description}</p>
        <p className='text-sm text-neutral-500'>{period}</p>
        <div className='flex gap-2 my-3'>
          {blogUrl && (
            <Button className='px-4 bg-neutral-200 text-black text-sm font-bold dark:bg-neutral-900 dark:text-neutral-200'>
              <Link href={blogUrl}>블로그</Link>
            </Button>
          )}
          {githubUrl && (
            <Button className='px-4 bg-neutral-200 text-black text-sm font-bold dark:bg-neutral-900 dark:text-neutral-200'>
              <Link href={githubUrl} passHref legacyBehavior>
                <a>깃허브</a>
              </Link>
            </Button>
          )}
          {website && (
            <Button className='px-4 bg-neutral-200 text-black text-sm font-bold dark:bg-neutral-900 dark:text-neutral-200'>
              <Link href={website} passHref legacyBehavior>
                <a>웹 페이지</a>
              </Link>
            </Button>
          )}
        </div>
        <div className='flex gap-1 flex-wrap'>
          {techStack.map((tech) => (
            <Badge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
