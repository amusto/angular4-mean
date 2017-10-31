import { Component, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.component.html'
})
export class NgbdModalContent {
  newCollection = {};

  addCollection(content) {
    this.newCollection = content;
    console.log(this.newCollection);
    this.activeModal.close(this.newCollection);

    /* TODO: Add form validation and a request service to add collections.
      You can bring over the existing API requests
     */

  }

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: [ './collections.component.css' ]
})
export class CollectionsComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.result.then((result) => {
      // modalRef.closeResult = `Closed with: ${result}`;
      console.log(result);
      // console.log(`Closed with: ${result}`);
    }, (reason) => {
      // modalRef.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(`Dismissed ${reason}`);
    });
    modalRef.componentInstance.headerText = 'Create a collection then update it with your favorite movies.';
  }
}
