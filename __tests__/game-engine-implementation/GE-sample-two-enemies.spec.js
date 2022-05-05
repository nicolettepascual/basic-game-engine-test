const { describe, test, expect } = global;
import GamePlay from '../../src/game-engine-implementation/GamePlay';
import Enemy from '../../src/game-engine-implementation/Enemy';

describe('GE-sample-two-enemies', function () {

    test('If both characters are enemies', () => {
        const enemy1 = new Enemy(1);
        const enemy2 = new Enemy(2);

        GamePlay.fight(enemy1, enemy2);

        /** Fight is executed only if one of the characters is Hero. 
         * Otherwise nothing happens. */
        expect(enemy1.health).toBe(30);
        expect(enemy2.health).toBe(60);
    })

});