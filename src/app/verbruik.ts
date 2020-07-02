export class Verbruik {
  id: number;
  totaalverbruik: number;
  afgerekend: boolean;
  fk_gebouw: number;
  fk_kostentype: number;
  kostentype: string;
  fk_partner: number;
  partner: string
  datum: string;
}
