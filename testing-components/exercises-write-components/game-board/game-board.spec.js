import { gameBaord } from './game-board.js';

describe('gameBaord: renders a list of user screen names and real names', () => {
  describe('tictactoe: X won on the middle column', () => {
    const boardData = [
      ['O', 'X', 'X'],
      ['X', 'X', 'O'],
      ['O', 'X', 'O'],
    ];
    const actual = gameBaord(boardData);

    testGameBoard(actual, boardData);
  });

  describe('empty mancala board', () => {
    const boardData = [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
    ];
    const actual = gameBaord(boardData);

    testGameBoard(actual, boardData);
  });

  describe('Play Ball!', () => {
    const boardData = [
      ['p', 'l', 'a', 'y'],
      ['b', 'a', 'l', 'l'],
    ];
    const actual = gameBaord(boardData);

    testGameBoard(actual, boardData);
  });
});

function testGameBoard(actual, boardData) {
  it('has tagName: "TABLE"', () => {
    expect(actual.tagName).toEqual('TABLE');
  });
  it(`has childElementCount: ${boardData.length}`, () => {
    expect(actual.childElementCount).toEqual(boardData.length);
  });

  for (let i = 0; i < boardData.length; i++) {
    describe(`.children[${i}]`, () => {
      const row = boardData[i];
      const actualChild = actual.children[i];
      it('has tagName: "TR"', () => {
        expect(actualChild.tagName).toEqual('TR');
      });
      it(`has childElementCount: ${row.length}`, () => {
        expect(actualChild.childElementCount).toEqual(row.length);
      });

      for (let j = 0; j < row.length; j++) {
        describe(`.children[${j}]`, () => {
          const filler = row[j];
          const actualChildChild = actualChild.children[j];
          it('has tagName: "TD"', () => {
            expect(actualChildChild.tagName).toEqual('TD');
          });
          it(`has innerText: "${filler}"`, () => {
            expect(actualChildChild.innerText).toEqual(filler);
          });
          it(`has childElementCount: 0`, () => {
            expect(actualChildChild.childElementCount).toEqual(0);
          });
          console.dir(actualChildChild);
        });
      }
    });
  }
}
