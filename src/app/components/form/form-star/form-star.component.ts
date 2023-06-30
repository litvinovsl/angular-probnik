import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'form-star',
  templateUrl: './form-star.component.html',
  styleUrls: ['./form-star.component.scss'],
  providers: [     
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => FormStarComponent),
      multi: true     
    }   
  ]
})
export class FormStarComponent implements ControlValueAccessor {
  @Input() ratingText: string; 
  public ratings = [
    {
      stars: 1,
      text: 'must GTFO ASAP'
    },
    {
      stars: 2,
      text: 'meh'
    },
    {
      stars: 3,
      text: 'it\'s ok'
    },
    {
      stars: 4,
      text: 'I\'d be sad if a black hole ate it'
    },
    {
      stars: 5,
      text: '10/10 would write review on Amazon'
    }
  ]
  public disabled: boolean;
  public _value: number;

  onChanged: any = () => {}
  onTouched: any = () => {}

  writeValue(val: any) {
    this._value = val;
  }

  registerOnChange(fn: any){
    this.onChanged = fn
  }
  registerOnTouched(fn: any){
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(star: any) {
    if(!this.disabled) {
      this._value = star.stars;
      this.ratingText = star.text
      this.onChanged(star.stars);
      this.onTouched();
    }
  }

}