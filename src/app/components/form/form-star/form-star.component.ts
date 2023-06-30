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
      text: 'Отдыхаю'
    },
    {
      stars: 2,
      text: 'Легко'
    },
    {
      stars: 3,
      text: 'Нормально'
    },
    {
      stars: 4,
      text: 'Сложно'
    },
    {
      stars: 5,
      text: 'Очень сложно'
    }
  ]
  public disabled: boolean;
  public _value: number;

  onChanged: any = () => {
    console.log('onChange')
    
  }
  onTouched: any = () => {}

  writeValue(val: any) {
    this._value = val;
    console.log(val, 'writeValue')
  }

  registerOnChange(fn: any){
    this.onChanged = fn
    // console.log(fn, 'onChange')
  }
  registerOnTouched(fn: any){
    this.onTouched = fn
    console.log(fn, 'onTouched')

  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    console.log(isDisabled, 'isDisabled')

  }

  setRating(star: any) {
    if(!this.disabled) {
      this._value = star.stars;
      this.ratingText = star.text
      this.onChanged(star);
      // this.onChanged(star.text);
      this.onTouched();
    }
  }

}