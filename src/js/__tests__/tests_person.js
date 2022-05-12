import Bowman from '../Characters/Bowman';
import Daemon from '../Characters/Daemon';
import Swordman from '../Characters/Swordman';
import Magician from '../Characters/Magician';
import Undead from '../Characters/Undead';
import Vampire from '../Characters/Vampire';

test('Тестирование создания объекта класса Bowman', () => {
  const exp = {
    level: undefined,
    attack: 25,
    defence: 25,
    health: 50,
    type: 'Bowman',
    distance: 2,
    attackRange: 2,
  };

  const resolve = new Bowman();
  expect(resolve).toEqual(exp);
});

test('Тестирование создания объекта класса Daemon', () => {
  const exp = {
    level: undefined,
    attack: 10,
    defence: 40,
    health: 50,
    type: 'Daemon',
    distance: 1,
    attackRange: 4,
  };

  const resolve = new Daemon();
  expect(resolve).toEqual(exp);
});

test('Тестирование создания объекта класса Swordman', () => {
  const exp = {
    level: undefined,
    attack: 40,
    defence: 10,
    health: 50,
    type: 'Swordman',
    distance: 4,
    attackRange: 1,
  };

  const resolve = new Swordman();
  expect(resolve).toEqual(exp);
});

test('Тестирование создания объекта класса Magician', () => {
  const exp = {
    level: undefined,
    attack: 10,
    defence: 40,
    health: 50,
    type: 'Magician',
    distance: 1,
    attackRange: 4,
  };

  const resolve = new Magician();
  expect(resolve).toEqual(exp);
});

test('Тестирование создания объекта класса Vampire', () => {
  const exp = {
    level: undefined,
    attack: 25,
    defence: 25,
    health: 50,
    type: 'Vampire',
    distance: 2,
    attackRange: 2,
  };

  const resolve = new Vampire();
  expect(resolve).toEqual(exp);
});

test('Тестирование создания объекта класса Undead', () => {
  const exp = {
    level: undefined,
    attack: 40,
    defence: 10,
    health: 50,
    type: 'Undead',
    distance: 4,
    attackRange: 1,
  };

  const resolve = new Undead();
  expect(resolve).toEqual(exp);
});