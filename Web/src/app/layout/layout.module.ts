import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";
import { LayoutRouting } from "./layout.routing";

import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule ({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    LayoutRouting,
    FormsModule,
  ],
  providers:[

]
})

export class LayoutModule {  }