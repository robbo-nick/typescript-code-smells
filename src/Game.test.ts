import { Game, Symbol } from './Game';

describe('TicTacToe game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should not allow a player to play in last played position', () => {
    game.Play( 0, 0);
    expect(() => game.Play( 0, 0)).toThrow();
  });

  it('should not allow a player to play in any played position', () => {
    game.Play( 0, 0);
    game.Play( 1, 0);
    expect(() => game.Play( 0, 0)).toThrow();
  });

  it('should declare player X as winner if it plays three in top row', () => {
    game.Play( 0, 0);
    game.Play( 1, 0);
    game.Play( 0, 1);
    game.Play( 1, 1);
    game.Play( 0, 2);

    var winner = game.Winner();

    expect(winner).toBe(Symbol.X);
  });

  it('should declare player O as winner if it plays three in top row', () => {
    game.Play( 1, 0);
    game.Play( 0, 0);
    game.Play( 1, 1);
    game.Play( 0, 1);
    game.Play( 2, 2);
    game.Play( 0, 2);

    var winner = game.Winner();

    expect(winner).toBe(Symbol.O);
  });

  it('should declare player X as winner if it plays three in middle row', () => {
    game.Play( 1, 0);
    game.Play( 0, 0);
    game.Play( 1, 1);
    game.Play( 0, 1);
    game.Play( 1, 2);

    var winner = game.Winner();

    expect(winner).toBe(Symbol.X);
  });

  it('should declare player O as winner if it plays three in middle row', () => {
    game.Play( 0, 0);
    game.Play( 1, 0);
    game.Play( 2, 1);
    game.Play( 1, 1);
    game.Play( 2, 2);
    game.Play( 1, 2);

    var winner = game.Winner();

    expect(winner).toBe(Symbol.O);
  });

  it('should declare player X as winner if it plays three in bottom row', () => {
    game.Play( 2, 0);
    game.Play( 0, 0);
    game.Play( 2, 1);
    game.Play( 0, 1);
    game.Play( 2, 2);

    var winner = game.Winner();

    expect(winner).toBe(Symbol.X);
  });

  it('should declare player O as winner if it plays three in bottom row', () => {
    game.Play( 0, 0);
    game.Play( 2, 0);
    game.Play( 1, 1);
    game.Play( 2, 1);
    game.Play( 0, 1);
    game.Play( 2, 2);

    var winner = game.Winner();

    expect(winner).toBe(Symbol.O);
  });
});
