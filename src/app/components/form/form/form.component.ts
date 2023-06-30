import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {JobPlaceService} from '../../../services/job-place.service'


@Component({
    selector: 'form-component',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
    @Input() data: any 
    jobs:object = [];
    title: string
    isShow: boolean = false

    constructor(private jobPlaceService: JobPlaceService){}
    ngOnInit(): void {
        this.data = this.form.value
        this.jobPlaceService.getJobPlace().subscribe((res) => {
            this.jobs = res;
          })
    }
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        otche: new FormControl('', Validators.required),
        married: new FormControl(false),
        oldest: new FormControl(false),
        stars: new FormControl({value: null, disabled: false})
    })

    submit() {
        if (this.isValid()) {
            this.data = this.form.value
            this.isShow = true
            console.log(this.data)

        }

    }
    isValid() {
        return this.form.status === 'VALID'
    }


    // @Input() title: string
    // details = false


}