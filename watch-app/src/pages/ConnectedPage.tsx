import { useNavigate, useLocation } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';
import { useAppState }  from '../context/AppStateContext';

export default function ConnectedPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pendingDevice, setConnectedDevice, setPendingDevice } = useAppState();

  const returnTo: string = (location.state as { returnTo?: string } | null)?.returnTo ?? '/home';

  const handleContinue = () => {
    if (pendingDevice) {
      setConnectedDevice(pendingDevice);
      setPendingDevice(null);
    }
    navigate(returnTo);
  };

  return (
    <div className="flex flex-col h-full">
      <BrandHeader hideInDark />

      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
        <div className="w-20 h-20 rounded-full border-2 border-success bg-green-50 dark:bg-green-950 flex items-center justify-center flex-shrink-0">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12l5 5L20 7" stroke="#24C26A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="text-center">
          <p className="text-[17px] font-bold text-primary leading-tight">Connected</p>
          <p className="text-[11px] text-secondary mt-1.5">Your earbuds are ready.</p>
        </div>
      </div>

      <div className="px-4 pb-5 flex-shrink-0">
        <button
          onClick={handleContinue}
          className="w-full h-[44px] rounded-2xl bg-accent text-white font-semibold text-[14px] active:scale-95 transition-all active:opacity-90"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
