const { describe, test, expect } = global;
import GamePlay from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Boss from '../../src/game-engine-implementation/Boss';
import Enemy from '../../src/game-engine-implementation/Enemy';

describe('GE-sample-resurrecting-hero', function () {

    test('If hero will die and resurrect before winning', () => {
        const hero = new Hero(1);
        const enemy = new Enemy(4);

        GamePlay.fight(hero, enemy);

        expect(enemy.isDead).toBe(true);
        expect(hero.lifes).toBe(1);
    })

});
