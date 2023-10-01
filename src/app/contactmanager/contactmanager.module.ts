import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MaterialModule} from "../shared/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { NotesComponent } from './components/notes/notes.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";

const routes: Routes =[
  {
    path: "", component: ContactmanagerAppComponent,
    children: [
      {path: ":id", component: MainContentComponent},
      {path: "", component: MainContentComponent}
    ]
  },
  {path: "**", redirectTo: ""}
]

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,

  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule { }
