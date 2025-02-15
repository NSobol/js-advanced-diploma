import Character from '../Character';
import Bowman from '../Characters/Bowman';
import Daemon from '../Characters/Daemon';
import Magician from '../Characters/Magician';
import Swordman from '../Characters/Swordman';
import Undead from '../Characters/Undead';
import Vampire from '../Characters/Vampire';

test('При попытке создать новый объект класса Character выбрасывается ошибка', () => {
  expect(() => new Character(1)).toThrowError(new Error('It is forbidden to create objects of the Character class'));
});

test.each([
  [new Bowman(1)],
  [new Daemon(1)],
  [new Magician(1)],
  [new Swordman(1)],
  [new Undead(1)],
  [new Vampire(1)],
])(('Не должно быть выброса ошибки'), (char) => {
  expect(() => char).not.toThrow();
});