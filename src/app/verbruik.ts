export class Verbruik {
  id: number;
  totaalverbruik: number;
  afgerekend: boolean;
  fk_gebouw: number;
  fk_kostentype: number;
  kostentype: string;
  datum: string;
}
