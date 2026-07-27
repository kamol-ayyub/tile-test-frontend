import type { SVGProps } from 'react';

export type TileIconProps = SVGProps<SVGSVGElement>;

const OceanWave = (props: TileIconProps) => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    {...props}
  >
    <rect width='100' height='100' fill='#F5E8D0' />
    <g stroke='#1A2A4A' strokeWidth='3' fill='none' strokeLinecap='round'>
      <path d='M0 25 Q 12.5 15, 25 25 T 50 25 T 75 25 T 100 25' />
      <path d='M0 50 Q 12.5 40, 25 50 T 50 50 T 75 50 T 100 50' />
      <path d='M0 75 Q 12.5 65, 25 75 T 50 75 T 75 75 T 100 75' />
    </g>
  </svg>
);

const ForestFern = (props: TileIconProps) => {
  const frond = (cx: number) => (
    <g
      transform={`translate(${cx} 50)`}
      stroke='#4A6B3E'
      strokeWidth='2'
      strokeLinecap='round'
    >
      <line x1='0' y1='-33' x2='0' y2='33' />
      {[-26, -19, -12, -5, 2, 9, 16, 23, 30].map((y) => (
        <g key={y}>
          <line x1='0' y1={y} x2='-10' y2={y - 9} />
          <line x1='0' y1={y} x2='10' y2={y - 9} />
        </g>
      ))}
    </g>
  );
  return (
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      {...props}
    >
      <rect width='100' height='100' fill='#F5E8D0' />
      {frond(33)}
      {frond(67)}
    </svg>
  );
};

const TerracottaDot = (props: TileIconProps) => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    {...props}
  >
    <rect width='100' height='100' fill='#F5E8D0' />
    <g fill='#B86545'>
      <circle cx='22' cy='24' r='8' />
      <circle cx='50' cy='24' r='8' />
      <circle cx='78' cy='24' r='8' />
      <circle cx='36' cy='50' r='8' />
      <circle cx='64' cy='50' r='8' />
      <circle cx='22' cy='76' r='8' />
      <circle cx='50' cy='76' r='8' />
      <circle cx='78' cy='76' r='8' />
    </g>
  </svg>
);

const YellowStar = (props: TileIconProps) => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    {...props}
  >
    <rect width='100' height='100' fill='#F5E8D0' />
    <path
      d='M50 12 L56.1 35.2 L76.9 23.1 L64.8 43.9 L88 50 L64.8 56.1 L76.9 76.9 L56.1 64.8 L50 88 L43.9 64.8 L23.1 76.9 L35.2 56.1 L12 50 L35.2 43.9 L23.1 23.1 L43.9 35.2 Z'
      fill='#D4A82C'
    />
  </svg>
);

const OrangeFloral = (props: TileIconProps) => {
  const flowers: Array<[number, number]> = [
    [22, 22],
    [52, 16],
    [78, 26],
    [36, 44],
    [66, 46],
    [22, 70],
    [50, 66],
    [76, 74],
    [42, 86],
  ];
  const leaves: Array<[number, number, number]> = [
    [34, 29, 40],
    [61, 30, -35],
    [28, 57, -40],
    [59, 59, 35],
    [63, 83, -30],
  ];
  return (
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      {...props}
    >
      <rect width='100' height='100' fill='#F5E8D0' />
      <g fill='#B86545'>
        {flowers.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x - 4.4} cy={y} r='3.2' />
            <circle cx={x + 4.4} cy={y} r='3.2' />
            <circle cx={x} cy={y - 4.4} r='3.2' />
            <circle cx={x} cy={y + 4.4} r='3.2' />
          </g>
        ))}
      </g>
      <g fill='#8B5A2B'>
        {flowers.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r='1.8' />
        ))}
      </g>
      <g fill='#4A6B3E'>
        {leaves.map(([x, y, r], i) => (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx='4.5'
            ry='1.6'
            transform={`rotate(${r} ${x} ${y})`}
          />
        ))}
      </g>
    </svg>
  );
};

const BlueGeometric = (props: TileIconProps) => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    {...props}
  >
    <rect width='100' height='100' fill='#F5E8D0' />
    <g fill='#1A2A4A'>
      <path d='M0 0 L32 0 A32 32 0 0 1 0 32 Z' />
      <path d='M100 0 L68 0 A32 32 0 0 0 100 32 Z' />
      <path d='M100 100 L100 68 A32 32 0 0 0 68 100 Z' />
      <path d='M0 100 L0 68 A32 32 0 0 1 32 100 Z' />
    </g>
    <g fill='#F5E8D0'>
      <path d='M0 0 L22 0 A22 22 0 0 1 0 22 Z' />
      <path d='M100 0 L78 0 A22 22 0 0 0 100 22 Z' />
      <path d='M100 100 L100 78 A22 22 0 0 0 78 100 Z' />
      <path d='M0 100 L0 78 A22 22 0 0 1 22 100 Z' />
    </g>
    <path
      d='M50 20 Q58 42 80 50 Q58 58 50 80 Q42 58 20 50 Q42 42 50 20 Z'
      fill='#B86545'
    />
  </svg>
);

const Herringbone = (props: TileIconProps) => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    {...props}
  >
    <rect width='100' height='100' fill='#F5E8D0' />
    <g stroke='#B8933D' strokeWidth='7' fill='none'>
      <path d='M-10 25 L10 12 L30 25 L50 12 L70 25 L90 12 L110 25' />
      <path d='M-10 47 L10 34 L30 47 L50 34 L70 47 L90 34 L110 47' />
      <path d='M-10 69 L10 56 L30 69 L50 56 L70 69 L90 56 L110 69' />
      <path d='M-10 91 L10 78 L30 91 L50 78 L70 91 L90 78 L110 91' />
    </g>
  </svg>
);

const CrossPlus = (props: TileIconProps) => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    {...props}
  >
    <rect width='100' height='100' fill='#F5E8D0' />
    <g fill='#B86545'>
      <rect x='41' y='41' width='18' height='18' />
      <rect x='41' y='17' width='18' height='18' />
      <rect x='41' y='65' width='18' height='18' />
      <rect x='17' y='41' width='18' height='18' />
      <rect x='65' y='41' width='18' height='18' />
    </g>
    <g fill='#5E8C7B'>
      <rect x='16' y='16' width='16' height='16' transform='rotate(45 24 24)' />
      <rect x='68' y='16' width='16' height='16' transform='rotate(45 76 24)' />
      <rect x='16' y='68' width='16' height='16' transform='rotate(45 24 76)' />
      <rect x='68' y='68' width='16' height='16' transform='rotate(45 76 76)' />
    </g>
  </svg>
);

const PaisleyLeaf = (props: TileIconProps) => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    {...props}
  >
    <rect width='100' height='100' fill='#F5E8D0' />
    <path
      d='M30 82 Q40 52 56 32 Q64 24 74 16'
      stroke='#1A2A4A'
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
    />
    <g fill='#1A2A4A'>
      <ellipse cx='27' cy='68' rx='10' ry='3.4' transform='rotate(-50 27 68)' />
      <ellipse cx='35' cy='54' rx='10' ry='3.4' transform='rotate(-50 35 54)' />
      <ellipse cx='44' cy='40' rx='10' ry='3.4' transform='rotate(-50 44 40)' />
      <ellipse cx='55' cy='29' rx='9' ry='3.2' transform='rotate(-50 55 29)' />
      <ellipse cx='38' cy='74' rx='9' ry='3.2' transform='rotate(42 38 74)' />
      <ellipse cx='46' cy='60' rx='9' ry='3.2' transform='rotate(42 46 60)' />
      <ellipse cx='55' cy='47' rx='9' ry='3.2' transform='rotate(42 55 47)' />
      <ellipse cx='64' cy='36' rx='8' ry='3' transform='rotate(42 64 36)' />
    </g>
  </svg>
);

const SolidBlue = (props: TileIconProps) => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    {...props}
  >
    <rect width='100' height='100' fill='#1A2A4A' />
    <g fill='#B86545'>
      <path d='M0 0 L34 0 A34 34 0 0 1 0 34 Z' />
      <path d='M100 0 L66 0 A34 34 0 0 0 100 34 Z' />
      <path d='M100 100 L100 66 A34 34 0 0 0 66 100 Z' />
      <path d='M0 100 L0 66 A34 34 0 0 1 34 100 Z' />
    </g>
    <g fill='#1A2A4A'>
      <path d='M0 0 L24 0 A24 24 0 0 1 0 24 Z' />
      <path d='M100 0 L76 0 A24 24 0 0 0 100 24 Z' />
      <path d='M100 100 L100 76 A24 24 0 0 0 76 100 Z' />
      <path d='M0 100 L0 76 A24 24 0 0 1 24 100 Z' />
    </g>
    <circle cx='50' cy='50' r='14' fill='#C77A3D' />
  </svg>
);

export const TILE_ICONS = {
  oceanWave: OceanWave,
  forestFern: ForestFern,
  terracottaDot: TerracottaDot,
  yellowStar: YellowStar,
  orangeFloral: OrangeFloral,
  blueGeometric: BlueGeometric,
  herringbone: Herringbone,
  crossPlus: CrossPlus,
  paisleyLeaf: PaisleyLeaf,
  solidBlue: SolidBlue,
} as const;

export type TileName = keyof typeof TILE_ICONS;

export type TileIconComponent = (typeof TILE_ICONS)[TileName];
