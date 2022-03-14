import {Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter();

  constructor(private ref: ElementRef ) {
    console.log(this.ref.nativeElement);
  }

  ngOnInit() {
    document.body.appendChild(this.ref.nativeElement);
  }

  ngOnDestroy() {
    this.ref.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }

}
