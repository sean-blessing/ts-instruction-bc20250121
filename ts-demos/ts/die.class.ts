export class Die {
  value!: number;

  constructor() {}

  roll(): void {
    this.value = Math.floor(Math.random() * 6) + 1;
  }
}
