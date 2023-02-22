export class Usuario {
  static usuarioCreados = 0;
  private _nombre: string;
  private _contra: string | number;
  private _numero: number;

  constructor(nombre: string, contra: string | number, numero: number) {
    this._nombre = nombre;
    this._contra = contra;
    this._numero = numero;
    Usuario.usuarioCreados++;
  }

  get nombre(): string {
    return this._nombre;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get contra(): string | number {
    return this._contra;
  }
  set contra(contra: string | number) {
    this._contra = contra;
  }

  get numero(): number {
    return this._numero;
  }
  set numero(numero: number) {
    this._numero = numero;
  }
}