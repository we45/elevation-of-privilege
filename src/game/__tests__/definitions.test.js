import { GAMEMODE_CORNUCOPIA } from '../../utils/constants';
import { getThreatDescription } from '../definitions';
import { GAMEMODE_EOP } from '../../utils/constants';

it('produces empty value for non-existent card', () => {
  const description = getThreatDescription('NN', GAMEMODE_EOP);
  expect(description).toBe('');
});

it('produces empty value for cornucopia gamemode', () => {
  const description = getThreatDescription('D2', GAMEMODE_CORNUCOPIA);
  expect(description).toBe('');
});

it('produces correct value for existing card', () => {
  const description = getThreatDescription('D2', GAMEMODE_EOP);
  expect(description).toBe(
    'An attacker could squat on the random port or socket that the server normally uses',
  );
});
