export const CNC_VIEWBOX = { w: 990, h: 300 };

/** Geometric single-stroke toolpaths for "Xsphere" — top-down CNC job. */
export const CNC_PATHS: { id: string; d: string }[] = [
  { id: 'x-1', d: 'M 70,96 L 170,228' },
  { id: 'x-2', d: 'M 170,96 L 70,228' },
  { id: 's-1', d: 'M 282,108 L 228,108 Q 204,108 204,130 Q 204,150 228,152 L 258,154 Q 286,158 286,188 Q 286,218 256,224 L 214,224' },
  { id: 'p-1', d: 'M 320,228 L 320,96 L 368,96 A 45 45 0 0 1 368,186 L 320,186' },
  { id: 'h-1', d: 'M 440,96 L 440,228' },
  { id: 'h-2', d: 'M 550,96 L 550,228' },
  { id: 'h-3', d: 'M 440,162 L 550,162' },
  { id: 'e1-1', d: 'M 670,96 L 580,96 L 580,228 L 670,228' },
  { id: 'e1-2', d: 'M 580,162 L 652,162' },
  { id: 'r-1', d: 'M 700,228 L 700,96 L 748,96 A 45 45 0 0 1 748,186 L 700,186' },
  { id: 'r-2', d: 'M 732,186 L 805,228' },
  { id: 'e2-1', d: 'M 925,96 L 835,96 L 835,228 L 925,228' },
  { id: 'e2-2', d: 'M 835,162 L 907,162' },
];

export const CNC_HOME = { x: 48, y: 54 };
export const CNC_PARK = { x: 940, y: 48 };
export const CNC_TRAVEL = 820;
export const CNC_CUT = 360;
export const CNC_PIERCE = 0.07;
