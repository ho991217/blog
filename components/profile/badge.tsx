interface Badge {
  name: string;
  color: string;
}

export const badgeName = [
  { name: 'React', color: '#268FAB' },
  { name: 'Next.js', color: '#000' },
  { name: 'TypeScript', color: '#2F74C0' },
  { name: 'styled-components', color: '#F79472' },
  { name: 'pm2', color: '#1A045D' },
  { name: 'zustand', color: '#E8B03C' },
  { name: 'Sentry', color: '#351D3E' },
  { name: 'turborepo', color: '#D12D6C' },
  { name: 'Prisma', color: '#2D3748' },
  { name: 'express.js', color: '#8BBF3D' },
  { name: 'RDS', color: '#3369A4' },
  { name: 'Vercel', color: '#000' },
  { name: 'Tailwindcss', color: '#16B1B4' },
  { name: 'Ant Design', color: '#158CF7' },
  { name: 'React Query', color: '#F73E51' },
  { name: 'GraphQL', color: '#DD34A6' },
] as ReadonlyArray<Badge>;

export type BadgeName =
  | 'React'
  | 'Next.js'
  | 'TypeScript'
  | 'styled-components'
  | 'pm2'
  | 'zustand'
  | 'Sentry'
  | 'turborepo'
  | 'Prisma'
  | 'express.js'
  | 'RDS'
  | 'Vercel'
  | 'Tailwindcss'
  | 'Ant Design'
  | 'React Query'
  | 'GraphQL';

export default function Badge({ name }: { name: BadgeName }) {
  const color = badgeName.find((badge) => badge.name === name)?.color;
  return (
    <div
      className='flex py-1 px-3 rounded-full w-auto text-white text-sm font-bold'
      style={{ backgroundColor: color }}
    >
      {name}
    </div>
  );
}
