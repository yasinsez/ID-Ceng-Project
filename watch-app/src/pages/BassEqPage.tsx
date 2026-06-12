import { EQScreen } from '../components/EQScreen';

export default function BassEqPage() {
  return (
    <EQScreen
      title="Bass EQ"
      field="bass"
      valueLabel="Bass EQ value"
      centerLabel="Next"
      nextRoute="/sound/eq/mid"
    />
  );
}
