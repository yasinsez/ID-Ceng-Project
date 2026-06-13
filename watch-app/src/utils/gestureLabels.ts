import type { GestureAction } from '../types';

/** Long labels — used as gesture-row subtitles in Left/Right Controls. */
export const GESTURE_FULL: Record<GestureAction, string> = {
  playPause:  'Play/Pause',
  nextTrack:  'Next Track',
  previous:   'Previous Track',
  ancMode:    'ANC Mode',
  assistant:  'Assistant',
  none:       'None',
};

/** Short labels — used in Action Select pill buttons. */
export const GESTURE_PILL: Record<GestureAction, string> = {
  playPause:  'Play/Pause',
  nextTrack:  'Next Track',
  previous:   'Previous',
  ancMode:    'ANC Mode',
  assistant:  'Assistant',
  none:       'None',
};

/** Ordered list used to render the 2×3 action select grid. */
export const GESTURE_ACTIONS: GestureAction[] = [
  'playPause', 'nextTrack', 'previous', 'ancMode', 'assistant', 'none',
];

/** URL kebab-case param → camelCase state key. */
export const GESTURE_PARAM_KEY: Record<string, 'singleTap' | 'doubleTap' | 'pressHold'> = {
  'single-tap': 'singleTap',
  'double-tap': 'doubleTap',
  'press-hold': 'pressHold',
};

/** URL kebab-case param → human-readable display name. */
export const GESTURE_PARAM_DISPLAY: Record<string, string> = {
  'single-tap': 'Single Tap',
  'double-tap': 'Double Tap',
  'press-hold': 'Press & Hold',
};
