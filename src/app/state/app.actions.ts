export class Login {
  static readonly type = '[AppState] Login';
  constructor(public username: string, public password: string) { }
}

export class Logout {
  static readonly type = '[AppState] Logout';
}
