const { describe, test, expect } = global;
import GamePlay from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Enemy from '../../src/game-engine-implementation/Enemy';

/** Winner of the fight is the character that is still alive after the fight */
describe('GE-sample-simple-fight-winner', function () {

    test('If hero will defeat the enemy and defined as the winner', () => {
        const hero = new Hero(2);
        const enemy = new Enemy(4);

        GamePlay.fight(hero, enemy);
        expect(hero.isDead).toBe(false);
    })

});
