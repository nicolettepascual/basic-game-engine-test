const { describe, test, expect } = global;
import GamePlay from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Boss from '../../src/game-engine-implementation/Boss';

describe('GE-sample-boss-fight', function () {

    test('If hero will take damage and defeat the boss', () => {
        const hero = new Hero(4);
        const boss = new Boss(2);

        GamePlay.fight(hero, boss);

        expect(boss.isDead).toBe(true);
        /** When Hero wins in a fight against Boss he gets one extra life */
        expect(hero.lifes).toBe(3);
        
        /** If his opponent was Enemy or Boss he gets the amount of experience points 
        * defined in configuration array, multiplied by the level of the opponent */
        expect(hero.experience).toBe(200);
    })

});
