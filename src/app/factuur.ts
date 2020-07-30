export class Factuur {
  id: number;
  bedrag: number;
  partner: string;
  fk_partner: number;
  omschrijving: string;
  datum: string;
  vervaldatum: string;
  betaald: boolean;
  vervallen:boolean;
  aangemaand: string;
  type: string;
  fk_type: number
}
