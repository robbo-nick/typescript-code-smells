export enum Symbol {
  X = 'X',
  O = 'O'
}

export class Game {
  private _nextSymbol: Symbol = Symbol.X;
  private _board: Board = new Board();

  public Play(x: number, y: number): void {
    this.CheckIsValidPosition(this._nextSymbol, x, y);

    this._board.AddTileAt(this._nextSymbol, x, y);
    this.switchNextPlayer();
  }

  private switchNextPlayer() {
    this._nextSymbol = this._nextSymbol === Symbol.X ? Symbol.O : Symbol.X;
  }

  private CheckIsValidPosition(symbol: Symbol, x: number, y: number) {
    if (this._board.GetSymbolAt(x, y) != ' ') {
      throw new Error('Invalid position');
    }
  }

  public Winner(): string {
    let winner = ' ';

    for (let i = 0; i < 3; i++) {
      winner = this.FindWinnerInARow(i);
      if (winner != ' ') {
        break;
      }
    }

    return winner;
  }

  private FindWinnerInARow(row: number): string {
    if (
      this._board.GetSymbolAt(row, 0) != ' ' &&
      this._board.GetSymbolAt(row, 1) != ' ' &&
      this._board.GetSymbolAt(row, 2) != ' '
    ) {
      //if middle row is full with same symbol
      if (
        this._board.GetSymbolAt(row, 0) == this._board.GetSymbolAt(row, 1) &&
        this._board.GetSymbolAt(row, 2) == this._board.GetSymbolAt(row, 1)
      ) {
        return this._board.GetSymbolAt(row, 0);
      }
    }
    return ' ';
  }
}

interface Tile {
  X: number;
  Y: number;
  Symbol: string;
}

class Board {
  private _plays: Tile[] = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const tile: Tile = { X: i, Y: j, Symbol: ' ' };
        this._plays.push(tile);
      }
    }
  }

  public GetSymbolAt(x: number, y: number): string {
    return this._plays.find((t: Tile) => t.X == x && t.Y == y)!.Symbol;
  }

  public AddTileAt(symbol: string, x: number, y: number): void {
    this._plays.find((t: Tile) => t.X == x && t.Y == y)!.Symbol = symbol;
  }
}
