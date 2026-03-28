export interface Proyecto {
  id: string;
  nombreProyecto: string;
  descripcion: string;
  img: string;
  stack: string[];
  linkDetalle: string;
  hasLink?: boolean;
  linkSitioWeb?: string;
  hasRepositorio?: boolean;
  linkRepositorio?: string;
}
