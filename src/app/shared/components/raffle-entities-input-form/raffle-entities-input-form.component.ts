import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { IEntitiesinputData } from '../../models/entities-input-data.interface';

@Component({
  selector: 'app-raffle-entities-input-form',
  templateUrl: './raffle-entities-input-form.component.html',
  styleUrls: ['./raffle-entities-input-form.component.scss'],
})
export class RaffleEntitiesInputFormComponent implements OnInit, OnDestroy {
  @Input() set textareaInputValue(textareaInputValue: string | null) {
    this.textareaInputText = textareaInputValue;
  }

  @Output('entitiesData') entitiesData: EventEmitter<IEntitiesinputData> =
    new EventEmitter();

  @ViewChild('logo') logo: ElementRef<HTMLImageElement>;
  @ViewChild('form') form: ElementRef<HTMLFormElement>;

  isFormSubmitted: boolean = false;
  afterSubmitTime: number = 7000;
  stepMilliseconds: number = 1000;
  textareaId: string = uuid();
  formGroup: FormGroup = new FormGroup({});
  textareaControlName: string = 'raffleEntitiesTextarea';
  entitiesSplitter: string = ',';
  textareaInputText: string | null = null;
  rotateInterval: NodeJS.Timeout;
  spinFastInterval: NodeJS.Timeout;
  submitInterval: NodeJS.Timeout;
  rotateValue: number = 0;
  imageWidth: number;
  imageInitialWidth: number;
  allIntervalSteps: number = 0;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      [this.textareaControlName]: new FormControl(
        this.textareaInputText || null,
        [Validators.required]
      ),
    });
  }

  ngOnDestroy() {
    if (this.rotateInterval) {
      clearInterval(this.rotateInterval);
    }

    if (this.spinFastInterval) {
      clearInterval(this.spinFastInterval);
    }

    if (this.submitInterval) {
      clearInterval(this.submitInterval);
    }
  }

  onSubmit() {
    this.isFormSubmitted = true;
    let speed: number = this.afterSubmitTime / this.stepMilliseconds;

    if (this.form && this.form.nativeElement) {
      this.form.nativeElement.style.height = `${
        this.form.nativeElement.getBoundingClientRect().height
      }px`;
    }

    for (let i = 2; i < speed; i += 1) {
      this.allIntervalSteps += this.stepMilliseconds / i;
    }

    if (this.logo && this.logo.nativeElement) {
      this.imageWidth = this.logo.nativeElement.getBoundingClientRect().width;
      this.imageInitialWidth = this.imageWidth;
      this.runRotateInterval(speed);
    }

    this.spinFastInterval = setInterval(() => {
      speed -= 1;
      this.runRotateInterval(speed);
    }, this.stepMilliseconds);

    this.submitInterval = setInterval(() => {
      if (this.rotateInterval) {
        clearInterval(this.rotateInterval);
        this.logo.nativeElement.style.transform = 'none';
      }

      if (this.spinFastInterval) {
        clearInterval(this.spinFastInterval);
      }

      const textareaValue: string =
        this.formGroup.controls[this.textareaControlName].value;

      const entitiesArray: string[] = textareaValue
        .split(this.entitiesSplitter)
        .map((entity) => entity.trim())
        .filter(Boolean);

      this.entitiesData.emit({
        entitiesArray,
        textareaValue,
      } as IEntitiesinputData);

      clearInterval(this.submitInterval);
    }, this.afterSubmitTime);
  }

  runRotateInterval(speed: number) {
    if (this.rotateInterval) {
      clearInterval(this.rotateInterval);
    }

    this.rotateInterval = setInterval(() => {
      this.logo.nativeElement.style.transform = `rotate(${this.rotateValue}deg)`;
      this.logo.nativeElement.style.width = `${this.imageWidth}px`;
      this.rotateValue += 1;
      this.imageWidth -= this.imageInitialWidth / this.allIntervalSteps;

      if (this.rotateValue > 360) {
        this.rotateValue = 0;
      }
    }, speed);
  }
}
