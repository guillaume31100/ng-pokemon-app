import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  //directive attribut => entouré []
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 160;


  //ElementRef => Composant de Angular/core qui permet de récuperer une reference du DOM
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  //propriété d'entée pour la directive
  @Input('pkmnBorderCard') bordercolor: string;//alias

  //Permet de lier une méthode de la directive à un evenement donné
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.bordercolor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  // Méthode qui permet de définir la hauteur du elementRef
  private setHeight(defaultHeight: number) {
    // this pour accédder a la ref de l'élémént 
    //nativeElement pour accéder à l'élément natif
    this.el.nativeElement.style.height = `${defaultHeight}px`
  }

  // Méthode qui permet de définir la couleur du border initial du elementRef
  private setBorder(initialColor: string) {
    this.el.nativeElement.style.border = `solid 4px ${initialColor} `
  }

}
