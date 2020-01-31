export class Factuur {
  id: number;
  bedrag: number;
  partner: string;
  fk_partner: number;
  omschrijving: string;
  datum: Date;
  vervaldatum: Date;
  fk_uittreksel: number;
  vervallen:boolean;
  type: string;
}
