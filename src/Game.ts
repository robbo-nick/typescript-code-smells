export enum Symbol {
  X = 'X',
  O = 'O'
}

export class Game {
  private _nextSymbol: string = Symbol.X;
  private _board: Board = new Board();

  public Play(symbol: Symbol, x: number, y: number): void {

    this.CheckIsValidPlayer(symbol)
    this.CheckIsValidPosition(symbol, x, y);

    // update game state
    this._nextSymbol = symbol === Symbol.X ? Symbol.O : Symbol.X;
    this._board.AddTileAt(symbol, x, y);
  }

  private CheckIsValidPlayer(symbol: Symbol) {
    if (symbol !== this._nextSymbol) {
      throw new Error('Invalid player moving');
    }
  }

  private CheckIsValidPosition(symbol: Symbol, x: number, y: number) {
    if (this._board.GetSymbolAt(x, y) != ' ') {
      throw new Error('Invalid position');
    }
  }

  public Winner(): string {
    //if the positions in first row are taken
    if (
      this._board.GetSymbolAt(0, 0) != ' ' &&
      this._board.GetSymbolAt(0, 1) != ' ' &&
      this._board.GetSymbolAt(0, 2) != ' '
    ) {
      //if first row is full with same symbol
      if (
        this._board.GetSymbolAt(0, 0) == this._board.GetSymbolAt(0, 1) &&
        this._board.GetSymbolAt(0, 2) == this._board.GetSymbolAt(0, 1)
      ) {
        return this._board.GetSymbolAt(0, 0);
      }
    }

    //if the positions in first row are taken
    if (
      this._board.GetSymbolAt(1, 0) != ' ' &&
      this._board.GetSymbolAt(1, 1) != ' ' &&
      this._board.GetSymbolAt(1, 2) != ' '
    ) {
      //if middle row is full with same symbol
      if (
        this._board.GetSymbolAt(1, 0) == this._board.GetSymbolAt(1, 1) &&
        this._board.GetSymbolAt(1, 2) == this._board.GetSymbolAt(1, 1)
      ) {
        return this._board.GetSymbolAt(1, 0);
      }
    }

    //if the positions in first row are taken
    if (
      this._board.GetSymbolAt(2, 0) != ' ' &&
      this._board.GetSymbolAt(2, 1) != ' ' &&
      this._board.GetSymbolAt(2, 2) != ' '
    ) {
      //if middle row is full with same symbol
      if (
        this._board.GetSymbolAt(2, 0) == this._board.GetSymbolAt(2, 1) &&
        this._board.GetSymbolAt(2, 2) == this._board.GetSymbolAt(2, 1)
      ) {
        return this._board.GetSymbolAt(2, 0);
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
