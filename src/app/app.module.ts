import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CaptureComponent } from './capture/capture.component';
import { ServicesComponent } from './services/services.component';
import { TrainersComponent } from './trainers/trainers.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServiceTypeComponent } from './service-type/service-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CaptureComponent,
    ServicesComponent,
    TrainersComponent,
    EquipmentComponent,
    NutritionComponent,
    ContactsComponent,
    ServiceTypeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
