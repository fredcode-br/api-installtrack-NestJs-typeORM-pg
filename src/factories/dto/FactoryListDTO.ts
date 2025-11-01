export class FactoryListDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly country: string,
    readonly state: string,
    readonly city: string,
  ) {}
}
