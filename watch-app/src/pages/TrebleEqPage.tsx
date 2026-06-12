import { EQScreen } from '../components/EQScreen';

export default function TrebleEqPage() {
  return (
    <EQScreen
      title="Treble EQ"
      field="treble"
      valueLabel="Treble EQ value"
      centerLabel="Save"
    />
  );
}
