import { Tecnologia } from './tecnologia.interface';

export interface Proyecto {
  id: string;
  nombre: string;
  tecnologias: Tecnologia[];
}
