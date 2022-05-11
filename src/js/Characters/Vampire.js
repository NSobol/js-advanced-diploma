import Character from '../Character';
/* вампир */

export default class Swordman extends Character {
  constructor(level, type = 'Swordman') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
    this.distance = 2;
    this.attackRange = 2;
  }
}
