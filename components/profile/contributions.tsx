import { useEffect, useState } from 'react';

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface Response {
  total: {
    [year: number]: number;
    [year: string]: number;
  };
  contributions: Array<Contribution>;
}

interface NestedResponse {
  total: {
    [year: number]: number;
    [year: string]: number; // 'lastYear;
  };
  contributions: {
    [year: number]: {
      [month: number]: {
        [day: number]: Contribution;
      };
    };
  };
}

export default function Contributions() {
  const [contributions, setContributions] = useState<Response | null>(null);

  const fetchContributions = async () => {
    const response = await fetch(
      'https://github-contributions-api.jogruber.de/v4/ho991217?y=last'
    );
    const data: Response = await response.json();
    setContributions(data);
  };

  useEffect(() => {
    fetchContributions();
  }, []);

  return (
    <span className='text-neutral-500 text-sm'>
      지난 해 컨트리뷰션: {contributions?.total['lastYear'].toLocaleString()}회
    </span>
  );
}
