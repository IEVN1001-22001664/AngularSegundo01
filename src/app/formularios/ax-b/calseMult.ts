export class Multiplica{
a: number = 0;
b: number = 0;
detalle: string = '';

valor: number = 0;


operacion(): void {
    this.valor = 0;
    this.detalle = '';

    for (let i = 0; i < this.a; i++) {
      this.valor += this.b;
      this.detalle += this.b; 
      if (i < this.a - 1) {
        this.detalle += ' + '; 
      }
    }
    this.detalle += ' = ' + this.valor;
}
}