import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
	 selector: '[autoGrow]',
	 host: {
	 	'(focus)': 'onFocus()',
	 	'(blur)': 'onBlur()'
	 }
})

export class AutoGrowDirective {
	//_el: ElementRef;

	constructor(private el: ElementRef, private renderer: Renderer) {
		//this._el = el;
	}

	onFocus() {
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '340');
	};

	onBlur() {
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '170');
	};
}