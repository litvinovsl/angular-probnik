import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Self } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

// import { IProduct } from "src/app/models/product";

@Component({
    selector: 'form-text',
    templateUrl: './form-text.component.html',
    styleUrls: ['./form-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormTextComponent implements ControlValueAccessor {
    @Input() name: string

    public value: string
    private onChange!: (value: string) => void
    private onTouched!: () => void

    constructor(
        @Self() private readonly ngControl: NgControl,
        private readonly changeDetector: ChangeDetectorRef
    ){
        this.ngControl.valueAccessor = this
    }

    public onEditorValueChange(event: Event): void{
        const targetDivElement = event.target as HTMLDivElement
        const content = targetDivElement.innerText
        this.onChange(content)
    }

    writeValue(value: string): void {
        this.value = value
        this.changeDetector.detectChanges()
    }
    registerOnChange(fn: (value: string) =>  void): void {
        this.onChange = fn
    }
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn
    }

}