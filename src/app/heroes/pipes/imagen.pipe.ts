import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  ruta: string = 'assets/heroes/';
  extension: string = '.jpg'
  transform(heroe: Heroe,): string {
    if( !heroe.id && !heroe.alt_img){
      return 'assets/no-image.png'
    } else if (heroe.alt_img){
      return heroe.alt_img;
    } else {
      return `${this.ruta}${heroe.id}${this.extension}`;
    }
  }
}
