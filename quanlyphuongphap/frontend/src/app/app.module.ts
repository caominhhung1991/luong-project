import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { ModalsModule } from './modals/modals.module';
import { HttpModule } from '@angular/http';


// Service
import { AppServiceService } from './services/app-service.service';

// component
import { AppComponent } from './app.component';
import { PhuongphapComponent } from './components/phuongphap/phuongphap.component';
import { CongthucComponent } from './components/congthuc/congthuc.component';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';
import { CommentComponent } from './components/comment/comment.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AddMethodModalComponent } from './modals/add-method-modal/add-method-modal.component';
import { NavFilterComponent } from './components/navs/nav-filter/nav-filter.component';
import { UpdateMethodModalComponent } from './modals/update-method-modal/update-method-modal.component';
import { MathService } from './services/math.service';
import { AnimateJqueryService } from './services/animate-jquery.service';
import { CkeditorUpdateComponent } from './components/ckeditor-update/ckeditor-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    PhuongphapComponent,
    CongthucComponent,
    CkeditorComponent,
    CommentComponent,
    SidebarComponent,
    HeaderComponent,
    AddMethodModalComponent,
    NavFilterComponent,
    UpdateMethodModalComponent,
    CkeditorUpdateComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    ModalsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AppServiceService,
    MathService,
    AnimateJqueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
