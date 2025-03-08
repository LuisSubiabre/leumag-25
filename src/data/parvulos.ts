import demoImage from "../assets/img/funcionarios/demo.png";
import lbarria from "../assets/img/funcionarios/lbarria.png";
import tcardenas from "../assets/img/funcionarios/tcardenas.png";
import msolis from "../assets/img/funcionarios/msolis.png";
import dandrade from "../assets/img/funcionarios/dandrade.png";
import nrodriguez from "../assets/img/funcionarios/nrodriguez.png";
import jvenegas from "../assets/img/funcionarios/jvenegas.png";
import abarrientos from "../assets/img/funcionarios/abarrientos.png";

export type Funcionario = {
  img: string;
  nombre: string;
  correo: string;
  dpto: string;
  more: string;
};

export const equipoParvulos: Funcionario[] = [
  {
    img: lbarria,
    nombre: "Luz Barría",
    correo: "lbarria@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT2A",
  },
  {
    img: demoImage,
    nombre: "Paola Nuñez",
    correo: "pnunez@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT1A",
  },
  {
    img: msolis,
    nombre: "Maria José Solís",
    correo: "msolis@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT1B",
  },

  {
    img: tcardenas,
    nombre: "Teresa Cárdenas",
    correo: "tcardenas@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT2B",
  },

  {
    img: dandrade,
    nombre: "Deice Andrade",
    correo: "dandrade@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 1A",
  },
  {
    img: nrodriguez,
    nombre: "Ninfa Rodríguez",
    correo: "nrodriguez@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 1B",
  },
  {
    img: jvenegas,
    nombre: "Jaqueline Venegas",
    correo: "jvenegas@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 2B",
  },
  {
    img: abarrientos,
    nombre: "Alejandra Barrientos",
    correo: "abarrientos@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 2A",
  },
  {
    img: demoImage,
    nombre: "Franco Figueroa",
    correo: "ffigueroa@liceoexperimental.cl",
    dpto: "Profesor Educación Músical",
    more: "NT 1 y NT 2",
  },
];
