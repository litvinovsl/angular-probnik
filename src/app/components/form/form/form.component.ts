import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { IUser } from "src/app/models/user";


@Component({
    selector: 'form-component',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{
    @Input() data: any
    title: string
    isShow: boolean = false
    ngOnInit(): void {
        this.data = this.form.value
    }
    form = new FormGroup({
        name: new FormControl('d', Validators.required),
        lastName: new FormControl('d', Validators.required),
        otche: new FormControl('d', Validators.required),
        married: new FormControl(false),
        oldest: new FormControl(false),
        stars: new FormControl (1)
    })
    
    submit(){
        // console.log(this.form.value)
        // console.log(this.form.status)
        // this.data = this.form.value
        if (this.isValid()){
            this.data = this.form.value
            this.isShow = true
        console.log(this.data)

        }

    }
    isValid(){
        return this.form.status === 'VALID'
    }


    // @Input() title: string
    // details = false


}