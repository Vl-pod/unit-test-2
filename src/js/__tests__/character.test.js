import getHealthStatus from '../getHealth';

test('health more than 50', () => {
  const character = { name: 'Маг', health: 90 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('health between 50 and 15', () => {
  const character = { name: 'Воин', health: 30 };
  expect(getHealthStatus(character)).toBe('wounded');
});

test('health less than 15', () => {
  const character = { name: 'Лучник', health: 10 };
  expect(getHealthStatus(character)).toBe('critical');
});
