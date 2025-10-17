export class ClaseZod {
  nombre: string = '';
  apellidoP: string = '';
  apellidoM: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';
  nombreCompleto: string = '';
  edad: number = 0;
  signo: string = '';
  imagen: string = '';

  calcularEdad(): void {
    const hoy = new Date();
    const nacimiento = new Date(this.anio, this.mes - 1, this.dia);
    let edadCalc = hoy.getFullYear() - nacimiento.getFullYear();
    const mesDiferencia = hoy.getMonth() - nacimiento.getMonth();

    if (mesDiferencia < 0 || (mesDiferencia === 0 && hoy.getDate() < nacimiento.getDate())) {
      edadCalc--;
    }

    this.edad = edadCalc;
    this.nombreCompleto = `${this.nombre} ${this.apellidoP} ${this.apellidoM}`;
  }

  obtenerSigno(): void {
    const signos = [
      'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente',
      'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
    ];
    const indice = (this.anio - 4) % 12;
    this.signo = signos[indice];
  }
  obtenerImagen(): void {
  const imagenes: Record<string, string> = {
    'Rata': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Rat.svg/1920px-Rat.svg.png',
    'Buey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ox.svg/1920px-Ox.svg.png',
    'Tigre': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tiger.svg/1920px-Tiger.svg.png',
    'Conejo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Rabbit.svg/1920px-Rabbit.svg.png',
    'Dragón': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Dragon.svg/1920px-Dragon.svg.png',
    'Serpiente': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Snake.svg/1920px-Snake.svg.png',
    'Caballo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Horse.svg/1920px-Horse.svg.png',
    'Cabra': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Goat.svg/1920px-Goat.svg.png',
    'Mono': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Monkey.svg/1920px-Monkey.svg.png',
    'Gallo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rooster.svg/1920px-Rooster.svg.png',
    'Perro': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Dog_2.svg/1920px-Dog_2.svg.png',
    'Cerdo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Boar.svg/1920px-Boar.svg.png'
  };
  this.imagen = imagenes[this.signo] || '';
}

}
