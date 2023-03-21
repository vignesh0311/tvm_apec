import {NgModule} from '@angular/core';
import {ButtonModule} from '@angular/material';
import {InputModule} from '@angular/material';
import { AppCompoent} from '@angular/material';
@NgModule({
exports: [
ButtonModule,
InputModule,
AppCompoent
]
})
export class DemoLogonFormMaterial {}