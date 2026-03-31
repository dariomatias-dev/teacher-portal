import type { Teacher } from "../types";

export const REPOSITORY: Teacher[] = [
  {
    uid: "alan-turing",
    name: "Alan Turing",
    dept: "Computação Teórica",
    curriculum: [
      {
        name: "Lógica Pura",
        major: "Ciência da Computação",
        term: "1º Semestre",
      },
      {
        name: "Máquinas Universais",
        major: "Sistemas de Informação",
        term: "4º Semestre",
      },
      {
        name: "Criptoanálise",
        major: "Engenharia de Software",
        term: "6º Semestre",
      },
    ],
  },
  {
    uid: "ada-lovelace",
    name: "Ada Lovelace",
    dept: "Arquitetura de Algoritmos",
    curriculum: [
      {
        name: "Algoritmos Simbólicos",
        major: "Engenharia de Software",
        term: "2º Semestre",
      },
      {
        name: "Motores Analíticos",
        major: "Ciência da Computação",
        term: "3º Semestre",
      },
      {
        name: "Lógica Computacional",
        major: "Matemática",
        term: "5º Semestre",
      },
    ],
  },
  {
    uid: "grace-hopper",
    name: "Grace Hopper",
    dept: "Sistemas e Linguagens",
    curriculum: [
      {
        name: "Compiladores Avançados",
        major: "Ciência da Computação",
        term: "5º Semestre",
      },
      {
        name: "Processamento de Dados",
        major: "Sistemas de Informação",
        term: "3º Semestre",
      },
      {
        name: "Estrutura de Sistemas",
        major: "Engenharia",
        term: "4º Semestre",
      },
    ],
  },
];
