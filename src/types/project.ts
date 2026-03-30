export type CategoriaProyecto = "personal" | "profesional";

export interface Proyecto {
  id: string;
  nombreProyecto: string;
  descripcion: string;
  img: string;
  stack: string[];
  categoria: CategoriaProyecto;
  linkDetalle: string;
  hasLink?: boolean;
  linkSitioWeb?: string;
  hasRepositorio?: boolean;
  linkRepositorio?: string;
}
