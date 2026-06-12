import { useNavigate }  from 'react-router-dom';
import { BrandHeader }  from '../components/BrandHeader';
import { useAppState }  from '../context/AppStateContext';
import type { DeviceName } from '../types';

const DEVICES: DeviceName[] = ['SoundWave Buds', 'Earbuds Pro', 'Sport Buds'];

function HeadphonesIcon() {
  return (
    <svg className="text-accent" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 14a9 9 0 1 1 18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="2"  y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function DevicesPage() {
  const navigate = useNavigate();
  const { connectedDevice, setPendingDevice } = useAppState();

  const handleSelect = (device: DeviceName) => {
    if (device === connectedDevice) return;
    setPendingDevice(device);
    navigate('/search', { state: { returnTo: '/devices' } });
  };

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/menu')} />

      <div className="flex flex-col px-4 pt-2 gap-3">
        <div>
          <h2 className="text-[18px] font-bold text-primary leading-tight">Devices</h2>
          <p className="text-[11px] text-secondary mt-0.5">Choose active earbuds.</p>
        </div>

        <div className="flex flex-col gap-2">
          {DEVICES.map(device => {
            const isConnected = device === connectedDevice;
            return (
              <button
                key={device}
                onClick={() => handleSelect(device)}
                disabled={isConnected}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-surface border border-border active:scale-95 transition-all active:opacity-70 disabled:cursor-default"
              >
                {/* Icon in small rounded square */}
                <div className="w-9 h-9 rounded-xl bg-surface-sel flex items-center justify-center flex-shrink-0">
                  <HeadphonesIcon />
                </div>

                {/* Name + status */}
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-[13px] font-bold text-primary leading-tight truncate">{device}</p>
                  <p className={`text-[11px] leading-tight mt-0.5 ${isConnected ? 'text-success' : 'text-secondary'}`}>
                    {isConnected ? 'Connected' : 'Saved'}
                  </p>
                </div>

                {/* Right indicator */}
                {isConnected ? (
                  <svg className="text-accent flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg className="text-secondary flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
