export default function getHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  } if (character.health <= 50 && character.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
export const character = { name: 'Маг', health: 90 };
