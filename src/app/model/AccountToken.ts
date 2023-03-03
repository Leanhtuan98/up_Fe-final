import {Role} from "./Role";

export class AccountToken{
  private _id: number;
  private _username: string;
  private _avatar: string;
  private _address: string;
  private _phone: string;
  private _token:string;
  private _roles: Role[];


  constructor(id: number, username: string, avatar: string, address: string, phone: string, token: string, roles: Role[]) {
    this._id = id;
    this._username = username;
    this._avatar = avatar;
    this._address = address;
    this._phone = phone;
    this._token = token;
    this._roles = roles;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get roles(): Role[] {
    return this._roles;
  }

  set roles(value: Role[]) {
    this._roles = value;
  }
}
