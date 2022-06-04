import GameStateService from '../GameStateService';

test('Метод load должен выбросить ошибку №1', () => {
  const stateService = new GameStateService(null);
  expect(() => stateService.load()).toThrowError(new Error('Invalid state'));
});