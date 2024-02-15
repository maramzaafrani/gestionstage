import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { ContactComponent } from './contact/contact.component';
import { ConventionComponent } from './convention/convention.component';
import { DemandeComponent } from './demande/demande.component';
import { DepotComponent } from './depot/depot.component';
import { JournalComponent } from './journal/journal.component';
import { AffectationComponent } from './affectation/affectation.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'connecter', component: ConnecterComponent },
  { path: 'convention', component: ConventionComponent },
  { path: 'demande', component: DemandeComponent },
  { path: 'depot', component: DepotComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'affectation', component: AffectationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }