import Svg, { Path, Circle, Rect } from 'react-native-svg';

type IconName =
  | 'wave' | 'back' | 'check' | 'headphones' | 'music' | 'link'
  | 'battery' | 'volume' | 'sliders' | 'device' | 'profile' | 'gear'
  | 'help' | 'trash' | 'book' | 'power' | 'language' | 'logout'
  | 'search' | 'history' | 'stats' | 'plus' | 'chevron-right' | 'info';

interface Props { name: IconName; size?: number; color?: string; }

export function Icon({ name, size = 22, color = '#121722' }: Props) {
  const s = { fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (name) {
    case 'wave':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M4 13v-2M8 17V7M12 15V9M16 18V6M20 14v-4" {...s} strokeWidth={2.2} /></Svg>;
    case 'back':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M15 6 9 12l6 6" {...s} strokeWidth={2.3} /></Svg>;
    case 'check':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="m5 12 4.2 4.2L19 6.5" {...s} strokeWidth={3} /></Svg>;
    case 'headphones':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M4 14v4a3 3 0 0 0 3 3h1v-8H7a3 3 0 0 0-3 3Zm16 0v4a3 3 0 0 1-3 3h-1v-8h1a3 3 0 0 1 3 3ZM5 14v-2a7 7 0 0 1 14 0v2" {...s} /></Svg>;
    case 'music':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm11-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" {...s} /></Svg>;
    case 'link':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 1 0 7.1 7.1l1.1-1.1" {...s} /></Svg>;
    case 'battery':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M4 8h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Zm18 3v2" {...s} /><Path d="M6 10v4" stroke={color} strokeWidth={2} strokeLinecap="round" fill="none" /></Svg>;
    case 'volume':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M4 9v6h4l5 4V5L8 9H4Z" {...s} strokeLinejoin="round" /><Path d="M16 9.5a4 4 0 0 1 0 5" {...s} /></Svg>;
    case 'sliders':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M4 6h8m4 0h4M4 12h4m4 0h8M4 18h10m4 0h2" {...s} /><Circle cx={14} cy={6} r={2} stroke={color} strokeWidth={2} fill="none" /><Circle cx={10} cy={12} r={2} stroke={color} strokeWidth={2} fill="none" /><Circle cx={16} cy={18} r={2} stroke={color} strokeWidth={2} fill="none" /></Svg>;
    case 'device':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Rect x={6} y={3} width={12} height={18} rx={3} {...s} /><Path d="M10 18h4" {...s} /></Svg>;
    case 'profile':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" {...s} /></Svg>;
    case 'gear':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M12 8.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Z" {...s} /><Path d="M19.4 13.1v-2.2l-1.8-.4a6.4 6.4 0 0 0-.5-1.2l1-1.5-1.6-1.6-1.5 1a6.4 6.4 0 0 0-1.2-.5l-.4-1.8h-2.2l-.4 1.8a6.4 6.4 0 0 0-1.2.5l-1.5-1-1.6 1.6 1 1.5a6.4 6.4 0 0 0-.5 1.2l-1.8.4v2.2l1.8.4c.1.4.3.8.5 1.2l-1 1.5 1.6 1.6 1.5-1c.4.2.8.4 1.2.5l.4 1.8h2.2l.4-1.8c.4-.1.8-.3 1.2-.5l1.5 1 1.6-1.6-1-1.5c.2-.4.4-.8.5-1.2l1.8-.4Z" fill="none" stroke={color} strokeWidth={1.8} strokeLinejoin="round" /></Svg>;
    case 'help':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M9.5 9a2.7 2.7 0 1 1 4.4 2.1c-.9.7-1.9 1.3-1.9 2.9" {...s} /><Path d="M12 18h.01" stroke={color} strokeWidth={3} strokeLinecap="round" fill="none" /><Circle cx={12} cy={12} r={9} {...s} /></Svg>;
    case 'trash':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M4 7h16M9 7V5h6v2m-8 0 1 14h8l1-14" {...s} /></Svg>;
    case 'book':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 0-4 0V4Z" {...s} strokeLinejoin="round" /><Path d="M9 8h6M9 12h6" {...s} /></Svg>;
    case 'power':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M12 3v9M7 6.5a8 8 0 1 0 10 0" {...s} /></Svg>;
    case 'language':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M4 5h9M8 5c0 5 3 9 8 11M6 12c3 0 6-3 6-7M14 19l4-9 4 9m-6.8-3h5.6" {...s} /></Svg>;
    case 'logout':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M10 5H5v14h5M14 8l4 4-4 4M18 12H9" {...s} /></Svg>;
    case 'search':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="m20 20-4.5-4.5M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" {...s} strokeWidth={2.2} /></Svg>;
    case 'history':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-6.4 2.6L3 8" {...s} /><Path d="M3 3v5h5M12 7v5l4 2" {...s} /></Svg>;
    case 'stats':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M4 20V14M8 20V10M12 20V4M16 20V12M20 20v-6" {...s} /></Svg>;
    case 'plus':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M12 5v14M5 12h14" {...s} strokeWidth={2.5} /></Svg>;
    case 'chevron-right':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path d="M9 6l6 6-6 6" {...s} strokeWidth={2.3} /></Svg>;
    case 'info':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Circle cx={12} cy={12} r={9} {...s} /><Path d="M12 8h.01M12 11v6" {...s} strokeWidth={2.3} /></Svg>;
    default:
      return null;
  }
}
