const { describe, test, expect } = global;
import GamePlay from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Enemy from '../../src/game-engine-implementation/Enemy';

describe('GE-sample-hero-vs-hero', function () {

    test('If hero will defeat another hero', () => {
        const enemy = new Enemy(4);

        const hero1 = new Hero(2);
        const hero2 = new Hero(4);

        GamePlay.fight(hero1, enemy);
        expect(hero1.isDead).toBe(false);
        GamePlay.fight(hero1, hero2);
        /** If his opponent was another Hero 
         * he gets 50% of the current opponent's experience points */
        expect(hero2.experience).toBe(200);
    })

});
