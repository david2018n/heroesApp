import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  ruta: string = 'assets/heroes/';
  extension: string = '.jpg'
  transform(heroe: Heroe,): string {
    return `${this.ruta}${heroe.id}${this.extension}`;
  }
}
