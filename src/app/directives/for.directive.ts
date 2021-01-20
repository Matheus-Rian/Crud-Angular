import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[crudFor]'
})
export class ForDirective implements OnInit{

  @Input('crudForEm') numbers: number[]

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {

  }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number }
      )
    }
    console.log(this.numbers)
  }
}

// <ul>
//  <li *crudFor="let n em [1, 2, 3]">{{ n }}</li>
// </ul>
