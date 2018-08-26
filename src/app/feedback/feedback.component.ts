import { Component, OnInit, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import {FormBuilder, FormGroup,  Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators/debounceTime';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  public feedbackForm : FormGroup;
  @Output() closeFeedbackForm = new EventEmitter();

  private telephoneValueChangedSubscription : Subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email:  ['', Validators.compose([Validators.required, Validators.email])],
      telephone: ['', Validators.pattern('[0-9]{11}')],
      message:  ['', Validators.required]
    });


   this.telephoneValueChangedSubscription = this.feedbackForm.statusChanges.subscribe(status => {
      console.log(status);
    })


  }

  ngOnDestroy() {
    this.telephoneValueChangedSubscription.unsubscribe();
  }

  hideFeedbackForm() {
    this.closeFeedbackForm.emit();
  }

  @HostListener('document:keyup', ['$event']) onkeyup(event: KeyboardEvent): void {
    if(event.key === "Escape") {
      this.hideFeedbackForm();
    }
  }



}
