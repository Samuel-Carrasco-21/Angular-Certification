import { Directive, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngCreateHtml]',
  standalone: true
})
export class CreateHtmlDirective implements OnInit {

  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  set ngCreateHtml(value: boolean) {
    console.log('ENTRO')
    if (value) {
      console.log('ENTRO A CREAR')
      this.sendMessage.emit('Se ha creado')
      this.viewContainer.createEmbeddedView(this.templateRef)

    } else {
      this.sendMessage.emit('No se ha creado el html')
      this.viewContainer.clear()

    }
  }

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    // no es necesario, ya que se tiene control del mismo setter
  }

}
