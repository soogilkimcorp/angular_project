import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

    myForm:FormGroup;
    sku:AbstractControl;
    skupw:AbstractControl;

    constructor(fb:FormBuilder) {
        this.myForm = fb.group({
            "sku":["", Validators.compose([Validators.required, skuValidator])],
            "skupw":["", Validators.compose([Validators.required, skupwValidator])]
        });

        this.sku = this.myForm.controls["sku"];
        this.skupw = this.myForm.controls["skupw"];

        this.sku.valueChanges.subscribe(
            (value:string) => {
                console.log("sku changed to ", value)
            }
        );
        this.skupw.valueChanges.subscribe(
            (value:string) => {
                console.log("skupw changed to ", value)
            }
        );
        this.myForm.valueChanges.subscribe(
            (form:string) => {
                console.log("form changed to ", form)
            }
        );
    }

    ngOnInit() {
    }

    onSubmit(form:any):void {
        console.log("You Submit Value : ", form);
    }

}

function skuValidator(control:FormControl):any {
    if(!control.value.match(/^123/)) {
        console.log(control.value)
        return {invalidSku:true};
    }
}
function skupwValidator(control:FormControl):any {
    if(!control.value.match(/[0-9]/)) {
        console.log(control.value)
        return {invalidSkupw:true};
    }
}
