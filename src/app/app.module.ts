import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { FooterComponent } from './client/footer/footer.component';
import { ServicesComponent } from './client/services/services.component';
import { AproposComponent } from './client/apropos/apropos.component';
import { OffresComponent } from './client/offres/offres.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { ContactComponent } from './client/contact/contact.component';
import { ServicesPackComponent } from './client/services-pack/services-pack.component';
import { AproposPackComponent } from './client/apropos-pack/apropos-pack.component';
import { LettreComponent } from './client/dashboard/lettre/lettre.component';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { HeaderComponent } from './client/dashboard/header/header.component';
import { WrapperComponent } from './client/dashboard/wrapper/wrapper.component';
import { DocumentsComponent } from './client/dashboard/documents/documents.component';
import { PersonnalProfileComponent } from './client/dashboard/personnal-profile/personnal-profile.component';
import { EntrepriseProfileComponent } from './client/dashboard/entreprise-profile/entreprise-profile.component';
import { DomiciliateEntrepriseComponent } from './client/dashboard/domiciliate-entreprise/domiciliate-entreprise.component';
import { StatutoryComponent } from './client/dashboard/statutory/statutory.component';
import { WelcomeWrapperComponent } from './client/welcome-wrapper/welcome-wrapper.component';
import { OffresPackComponent } from './client/offres-pack/offres-pack.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    AproposComponent,
    OffresComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ServicesPackComponent,
    AproposPackComponent,
    LettreComponent,
    ConfirmEqualValidatorDirective,
    HeaderComponent,
    WrapperComponent,
    DocumentsComponent,
    PersonnalProfileComponent,
    EntrepriseProfileComponent,
    DomiciliateEntrepriseComponent,
    StatutoryComponent,
    WelcomeWrapperComponent,
    OffresPackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
