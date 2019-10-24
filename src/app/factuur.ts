export class Factuur {
  id: number;
  bedrag: number;
  fk_partner: number;
  omschrijving: string;
  datum: Date;
  vervaldatum: Date;
  fk_uittreksel: number;
}
