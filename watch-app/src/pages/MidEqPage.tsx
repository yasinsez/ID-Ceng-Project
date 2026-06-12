import { EQScreen } from '../components/EQScreen';

export default function MidEqPage() {
  return (
    <EQScreen
      title="Mid EQ"
      field="mid"
      valueLabel="Mid EQ value"
      centerLabel="Next"
      nextRoute="/sound/eq/treble"
    />
  );
}
