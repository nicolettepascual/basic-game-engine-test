const { describe, test, expect } = global;
import GamePlay from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';

describe('GE-sample-hero-vs-hero-resurrect', function () {

    test('If hero, taking damage, will die then defeat another hero', () => {
        const hero1 = new Hero(2);
        const hero2 = new Hero(3);

        GamePlay.fight(hero1, hero2);
        expect(hero1.isDead).toBe(true);
        expect(hero2.isDead).toBe(false);
        expect(hero2.health).toBe(110);
        /** hero was expected to die once */
        expect(hero2.lifes).toBe(1);
    })

});
