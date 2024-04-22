export default function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className='bg-neutral-50 rounded-xl border-[1px] border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 p-6 overflow-hidden'>
      {children}
    </div>
  );
}

Card.Title = function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className='text-xl font-semibold mb-2'>{children}</h2>;
};
