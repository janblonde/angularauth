export class Factuur {
  id: number;
  bedrag: number;
  partner: string;
  fk_partner: number;
  omschrijving: string;
  datum: string;
  vervaldatum: string;
  fk_uittreksel: number;
  vervallen:boolean;
  type: string;
}
