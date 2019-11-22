export class Factuur {
  id: number;
  bedrag: number;
  partner: string;
  omschrijving: string;
  datum: Date;
  vervaldatum: Date;
  fk_uittreksel: number;
  vervallen:boolean;
}
