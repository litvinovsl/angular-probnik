import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

// import { IProduct } from "src/app/models/product";

@Component({
    selector: 'form-component',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{
    ngOnInit(): void {
    }
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        otche: new FormControl('', Validators.required),
        married: new FormControl(false),
        oldest: new FormControl(false, Validators.requiredTrue),
        stars: new FormControl (1)
    })
    submit(){
        console.log(this.form.value)
        console.log(this.form.status)
    }
    isValid(){
        return this.form.status === 'VALID'
    }


    @Input() title: string
    // details = false


}