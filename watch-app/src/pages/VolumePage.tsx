import { useNavigate }  from 'react-router-dom';
import { BrandHeader }  from '../components/BrandHeader';
import { ControlRow }   from '../components/ControlRow';
import { useAppState }  from '../context/AppStateContext';
import type { VolumeStep } from '../types';

const STEP_CYCLE: Record<VolumeStep, VolumeStep> = { 1: 5, 5: 10, 10: 1 };

export default function VolumePage() {
  const navigate = useNavigate();
  const { volume, setVolume, volumeStep, setVolumeStep } = useAppState();

  const change = (delta: number) =>
    setVolume(Math.max(0, Math.min(100, volume + delta)));

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/menu')} />

      {/* Title — centred per design */}
      <div className="text-center px-4 pt-1 flex-shrink-0">
        <h2 className="text-[18px] font-bold text-primary">Volume</h2>
        <p className="text-[11px] text-secondary mt-0.5">Tap once or hold to adjust fast.</p>
      </div>

      {/* Large numeric display */}
      <div className="flex-1 flex flex-col items-center justify-center gap-0.5">
        <p className="text-[72px] font-bold text-primary leading-none tabular-nums">{volume}</p>
        <p className="text-[13px] text-secondary">Volume</p>
      </div>

      {/* Controls */}
      <div className="px-4 pb-5 flex-shrink-0">
        <ControlRow
          centerLabel={`${volumeStep} step`}
          onDecrement={() => change(-volumeStep)}
          onIncrement={() => change(+volumeStep)}
          onCenter={() => setVolumeStep(STEP_CYCLE[volumeStep])}
        />
      </div>
    </div>
  );
}
