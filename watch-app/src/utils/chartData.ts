// Shared mock dataset — keeps /stats and /stats/chart perfectly in sync.
export const WEEK_DATA = [
  { day: 'M', hours: 1.5 },
  { day: 'T', hours: 3.0 },
  { day: 'W', hours: 2.0 },
  { day: 'T', hours: 3.2 },
  { day: 'F', hours: 2.8 },
  { day: 'S', hours: 4.9 }, // peak = Saturday
  { day: 'S', hours: 1.3 },
] as const;

export const MAX_HOURS = 4.9; // Saturday

export const STATS_SUMMARY = {
  total:    '18h 42m',
  progress: '+12%',
  avg:      '2h 40m',
  peakDay:  'Sat',
} as const;
