import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './client/home/home.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { FooterComponent } from './client/footer/footer.component';
import { ServicesComponent } from './client/services/services.component';
import { AproposComponent } from './client/apropos/apropos.component';
import { OffresComponent } from './client/offres/offres.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { ContactComponent } from './client/contact/contact.component';
import { LettreComponent } from './client/dashboard/lettre/lettre.component';
import { WrapperComponent } from './client/dashboard/wrapper/wrapper.component';
import { DocumentsComponent } from './client/dashboard/documents/documents.component';
import { PersonnalProfileComponent } from './client/dashboard/personnal-profile/personnal-profile.component';
import { EntrepriseProfileComponent } from './client/dashboard/entreprise-profile/entreprise-profile.component';
import { DomiciliateEntrepriseComponent } from './client/dashboard/domiciliate-entreprise/domiciliate-entreprise.component';
import { StatutoryComponent } from './client/dashboard/statutory/statutory.component';
import { WelcomeWrapperComponent } from './client/welcome-wrapper/welcome-wrapper.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
	
  {
  path:'',
  component:WelcomeWrapperComponent
},
{
  path:'login',
  component:LoginComponent 
},
{
  path:'register/:offre',
  component:WelcomeWrapperComponent
},
{
  path:'services',
  component:WelcomeWrapperComponent
  
},
{
  path:'apropos',
  component:WelcomeWrapperComponent
},
{
  path:'offres',
  component:WelcomeWrapperComponent
},
{
  path:'contact',
  component:WelcomeWrapperComponent
},
{
  path:'letters',
  component:WrapperComponent,
  canActivate:[AuthGuard]
},
{
  path:'letters/:id',
  component:WrapperComponent,
  canActivate:[AuthGuard]
},
{
  path:'documents',
  component: WrapperComponent,
  canActivate:[AuthGuard]
},
{
  path:'domicilate/offres',
  component:WrapperComponent,
  canActivate:[AuthGuard]
},
{
  path:'domicilate/register/:offre',
  component:WrapperComponent,
  canActivate:[AuthGuard]
},
{
  path:'personal-profile',
  component:WrapperComponent,
  canActivate:[AuthGuard]
},
{
  path:'entreprise-profile/:idEnt',
  component:WrapperComponent,
  canActivate:[AuthGuard]
},
{
  path:'statutory',
  component:WrapperComponent,
  canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
