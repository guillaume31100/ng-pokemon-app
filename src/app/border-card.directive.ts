import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  //directive attribut => entouré []
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  //ElementRef => Composant de Angular/core qui permet de récuperer une reference du DOM
  constructor(private el: ElementRef) {
    this.setHeight(200);
    this.setBorder('#f5f5f5');
  }

  //Permet de lier une méthode de la directive à un evenement donné
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  // Méthode qui permet de définir la hauteur du elementRef
  private setHeight(height: number) {
    // this pour accédder a la ref de l'élémént 
    //nativeElement pour accéder à l'élément natif
    this.el.nativeElement.style.height = `${height}px`
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color} `
  }

}
