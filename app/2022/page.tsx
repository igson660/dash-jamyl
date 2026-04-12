"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Landmark,
  MapPinned,
  Vote,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Neighborhood = {
  name: string;
  totalVotes: number;
  pollingPlaces: number;
  sections: number;
};

type Municipality = {
  name: string;
  totalVotes: number;
  pollingPlaces: number;
  sections: number;
  neighborhoods: Neighborhood[];
  topNeighborhood: string;
};

type ElectionData = {
  summary: {
    title: string;
    subtitle: string;
    totalMunicipalities: number;
    totalVotes: number;
    totalSections: number;
    totalPollingPlaces: number;
    topMunicipality: string;
    averageVotesPerMunicipality: number;
  };
  municipalities: Municipality[];
  chartData: Array<{
    municipality: string;
    votes: number;
  }>;
};

const electionData: ElectionData = {
  summary: {
    title: "Eleições 2022",
    subtitle: "Votação agregada por município com detalhamento por bairro.",
    totalMunicipalities: 22,
    totalVotes: 2385,
    totalSections: 2124,
    totalPollingPlaces: 688,
    topMunicipality: "Rio Branco",
    averageVotesPerMunicipality: 108,
  },
  municipalities: [
    {
      name: "Rio Branco",
      totalVotes: 1657,
      pollingPlaces: 255,
      sections: 888,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 133,
          pollingPlaces: 27,
          sections: 90,
        },
        {
          name: "BOSQUE",
          totalVotes: 85,
          pollingPlaces: 14,
          sections: 41,
        },
        {
          name: "AEROPORTO VELHO",
          totalVotes: 69,
          pollingPlaces: 9,
          sections: 34,
        },
        {
          name: "ESTAÇÃO EXPERIMENTAL",
          totalVotes: 66,
          pollingPlaces: 9,
          sections: 31,
        },
        {
          name: "CONJUNTO ESPERANCA",
          totalVotes: 48,
          pollingPlaces: 5,
          sections: 17,
        },
        {
          name: "CALAFATE",
          totalVotes: 47,
          pollingPlaces: 6,
          sections: 23,
        },
        {
          name: "VILA ACRE",
          totalVotes: 47,
          pollingPlaces: 6,
          sections: 24,
        },
        {
          name: "SANTA INES",
          totalVotes: 41,
          pollingPlaces: 4,
          sections: 14,
        },
        {
          name: "CONJUNTO UNIVERSITÁRIO II",
          totalVotes: 39,
          pollingPlaces: 2,
          sections: 10,
        },
        {
          name: "TRANSACREANA",
          totalVotes: 35,
          pollingPlaces: 4,
          sections: 8,
        },
        {
          name: "QUINZE",
          totalVotes: 33,
          pollingPlaces: 7,
          sections: 27,
        },
        {
          name: "BOA UNIÃO",
          totalVotes: 30,
          pollingPlaces: 3,
          sections: 12,
        },
        {
          name: "MONTANHÊS",
          totalVotes: 30,
          pollingPlaces: 2,
          sections: 10,
        },
        {
          name: "CONJUNTO TUCUMÃ II",
          totalVotes: 29,
          pollingPlaces: 2,
          sections: 12,
        },
        {
          name: "PALHERAL",
          totalVotes: 29,
          pollingPlaces: 5,
          sections: 11,
        },
        {
          name: "SAO FRANCISCO",
          totalVotes: 28,
          pollingPlaces: 4,
          sections: 17,
        },
        {
          name: "XAVIER MAIA",
          totalVotes: 27,
          pollingPlaces: 3,
          sections: 19,
        },
        {
          name: "6 DE AGOSTO",
          totalVotes: 25,
          pollingPlaces: 3,
          sections: 15,
        },
        {
          name: "AVIARIO",
          totalVotes: 25,
          pollingPlaces: 4,
          sections: 17,
        },
        {
          name: "BELO JARDIM II",
          totalVotes: 25,
          pollingPlaces: 6,
          sections: 20,
        },
        {
          name: "DISTRITO INDUSTRIAL",
          totalVotes: 25,
          pollingPlaces: 2,
          sections: 12,
        },
        {
          name: "CONJUNTO GUIOMARD SANTOS",
          totalVotes: 23,
          pollingPlaces: 2,
          sections: 9,
        },
        {
          name: "JOÃO EDUARDO I",
          totalVotes: 23,
          pollingPlaces: 2,
          sections: 10,
        },
        {
          name: "NOVA ESPERANCA",
          totalVotes: 23,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "ISAURA PARENTE",
          totalVotes: 21,
          pollingPlaces: 3,
          sections: 12,
        },
        {
          name: "CADEIA VELHA",
          totalVotes: 20,
          pollingPlaces: 2,
          sections: 12,
        },
        {
          name: "JARDIM PRIMAVERA",
          totalVotes: 20,
          pollingPlaces: 3,
          sections: 10,
        },
        {
          name: "CONJUNTO TUCUMÃ I",
          totalVotes: 19,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "GLORIA",
          totalVotes: 19,
          pollingPlaces: 1,
          sections: 7,
        },
        {
          name: "JARDIM EUROPA",
          totalVotes: 19,
          pollingPlaces: 1,
          sections: 9,
        },
        {
          name: "CONJUNTO ESPERANÇA II",
          totalVotes: 17,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "MANOEL JULIÃO",
          totalVotes: 17,
          pollingPlaces: 2,
          sections: 8,
        },
        {
          name: "ABRAÃO ALAB",
          totalVotes: 16,
          pollingPlaces: 3,
          sections: 8,
        },
        {
          name: "CERAMICA",
          totalVotes: 16,
          pollingPlaces: 2,
          sections: 8,
        },
        {
          name: "VITORIA",
          totalVotes: 16,
          pollingPlaces: 3,
          sections: 9,
        },
        {
          name: "BAHIA VELHA",
          totalVotes: 15,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "CONJUNTO BELA VISTA",
          totalVotes: 14,
          pollingPlaces: 2,
          sections: 7,
        },
        {
          name: "CONJUNTO HABITACIONAL VILA BETEL 2",
          totalVotes: 14,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "GERALDO FLEMING",
          totalVotes: 14,
          pollingPlaces: 2,
          sections: 8,
        },
        {
          name: "SOBRAL",
          totalVotes: 14,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "CONJUNTO TANGARA",
          totalVotes: 13,
          pollingPlaces: 3,
          sections: 8,
        },
        {
          name: "FLORESTA SUL",
          totalVotes: 13,
          pollingPlaces: 2,
          sections: 6,
        },
        {
          name: "RECANTO DOS BURITIS",
          totalVotes: 13,
          pollingPlaces: 2,
          sections: 7,
        },
        {
          name: "TANCREDO NEVES",
          totalVotes: 13,
          pollingPlaces: 4,
          sections: 11,
        },
        {
          name: "VILA IVONETE",
          totalVotes: 13,
          pollingPlaces: 3,
          sections: 8,
        },
        {
          name: "BOA VISTA",
          totalVotes: 12,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "CIDADE NOVA",
          totalVotes: 12,
          pollingPlaces: 3,
          sections: 6,
        },
        {
          name: "RUI LINO",
          totalVotes: 12,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "WANDERLEY DANTAS",
          totalVotes: 12,
          pollingPlaces: 2,
          sections: 8,
        },
        {
          name: "NOVA ESTACAO",
          totalVotes: 11,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "PLACIDO DE CASTRO",
          totalVotes: 11,
          pollingPlaces: 2,
          sections: 5,
        },
        {
          name: "COMARA",
          totalVotes: 10,
          pollingPlaces: 2,
          sections: 8,
        },
        {
          name: "DOM GIOCONDO",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "PLACAS",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "TAQUARI",
          totalVotes: 10,
          pollingPlaces: 5,
          sections: 12,
        },
        {
          name: "VILA DNER",
          totalVotes: 10,
          pollingPlaces: 2,
          sections: 7,
        },
        {
          name: "ALTO ALEGRE",
          totalVotes: 9,
          pollingPlaces: 3,
          sections: 10,
        },
        {
          name: "BAHIA NOVA",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "CONQUISTA",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "JARDIM ELDORADO",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "JOÃO EDUARDO II",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "MASCARENHA DE MORAIS",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "RAIMUNDO MELO",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "CIDADE DO POVO",
          totalVotes: 8,
          pollingPlaces: 3,
          sections: 8,
        },
        {
          name: "CONJUNTO UNIVERSITARIO",
          totalVotes: 8,
          pollingPlaces: 2,
          sections: 3,
        },
        {
          name: "SANTO AFONSO",
          totalVotes: 7,
          pollingPlaces: 2,
          sections: 3,
        },
        {
          name: "TRIANGULO VELHO",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "TROPICAL",
          totalVotes: 7,
          pollingPlaces: 2,
          sections: 8,
        },
        {
          name: "VILA CUSTÓDIO FREIRE",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "VILA VERDE",
          totalVotes: 7,
          pollingPlaces: 2,
          sections: 4,
        },
        {
          name: "ADALBERTO SENA",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "JARDIM NAZLE",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "PREVENTORIO",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "RAMAL DA PICAREIRA",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "ALBERT SAMPAIO",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "DA PAZ",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "MORADA DO SOL",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "RAMAL DA CASTANHEIRA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "SANTA QUITERIA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "AYRTON SENA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "BAIXA VERDE",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "CONJUNTO WALDEMAR MACIEL",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "JORGE LAVOCAT",
          totalVotes: 4,
          pollingPlaces: 2,
          sections: 6,
        },
        {
          name: "PORTAL DA AMAZÔNIA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "RAMAL DA GARAPEIRA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "AREAL",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "BARRO VERMELHO",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "CHICO MENDES",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "MOCINHA MAGALHÃES",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "APOLONIO SALES",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "BENFICA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "CANAÃ",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "NOVO HORIZONTE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "VILA SANTA CECÍLIA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "WALDEMAR MACIEL",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "CONJUNTO SOLAR",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "RAMAL CAIPORA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "RAMAL DA PALHEIRA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "RAMAL ITUCUMÃ",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RAMAL UNIAO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "BELO JARDIM I",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "ELDORADO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "LIBERDADE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "PROCON",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RAMAL DO GURGEL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "RAMAL JARINAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Sena Madureira",
      totalVotes: 164,
      pollingPlaces: 45,
      sections: 110,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 82,
          pollingPlaces: 18,
          sections: 49,
        },
        {
          name: "EUGENIO AREAL",
          totalVotes: 15,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "DA PISTA",
          totalVotes: 11,
          pollingPlaces: 3,
          sections: 9,
        },
        {
          name: "CSU",
          totalVotes: 9,
          pollingPlaces: 3,
          sections: 7,
        },
        {
          name: "NITERÓI",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "Centro",
          totalVotes: 8,
          pollingPlaces: 7,
          sections: 7,
        },
        {
          name: "CRISTO LIBERTADOR",
          totalVotes: 8,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "VILA MILITAR",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "VITORIA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "BOM SUCESSO",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "ANA VIEIRA",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "BOSQUE",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "CIDADE NOVA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "SERINGAL RECIFE",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE CAZUMBÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE LUA NOVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "PROJETO JOAQUIM DE MATOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SERINGAL NOVA OLINDA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Cruzeiro do Sul",
      totalVotes: 98,
      pollingPlaces: 64,
      sections: 229,
      neighborhoods: [
        {
          name: "JOAO ALVES",
          totalVotes: 22,
          pollingPlaces: 3,
          sections: 20,
        },
        {
          name: "CENTRO",
          totalVotes: 13,
          pollingPlaces: 7,
          sections: 26,
        },
        {
          name: "ARTUR MAIA",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "ESCOLA TECNICA",
          totalVotes: 6,
          pollingPlaces: 3,
          sections: 12,
        },
        {
          name: "SAO CRISTOVAO",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "SAO JOSE",
          totalVotes: 5,
          pollingPlaces: 2,
          sections: 7,
        },
        {
          name: "TELEGRAFO",
          totalVotes: 5,
          pollingPlaces: 2,
          sections: 12,
        },
        {
          name: "AEROPORTO VELHO",
          totalVotes: 4,
          pollingPlaces: 2,
          sections: 12,
        },
        {
          name: "MANOEL TERCAS",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "REMANSO",
          totalVotes: 4,
          pollingPlaces: 2,
          sections: 13,
        },
        {
          name: "ALUMINIO",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "COBAL",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 7,
        },
        {
          name: "MIRITIZAL",
          totalVotes: 3,
          pollingPlaces: 2,
          sections: 11,
        },
        {
          name: "NOSSA DAS GRACAS",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "25 DE AGOSTO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "CRUZEIRAO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "ELETROACRE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "FLORESTA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "PROJETO SANTA LUZIA",
          totalVotes: 1,
          pollingPlaces: 5,
          sections: 13,
        },
        {
          name: "RAMAL DA BURITIRANA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "VILA ASSIS BRASIL",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "VILA SANTA ROSA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "ALDEIA INDÍGENA CAMPINAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "BOCA DA ALEMANHA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "CANELA FINA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 4,
          sections: 6,
        },
        {
          name: "COMUNIDADE BOA VISTA DA SANTA MARIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE DA PRAINHA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE OLIVENÇA RIO JURUÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE PERIQUITO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE TERRA FIRME DE CIMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE VISTA ALEGRE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "FOZ DO RIO VALPARAIZO - JURUA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "LIBERDADE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "PARANÁ PENTECOSTES",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RAMAL DA MARIANA I",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "VARZEA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "VILA LAGOINHA",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 7,
        },
        {
          name: "VILA SANTA LUZIA",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 8,
        },
        {
          name: "VILA SAO PEDRO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
      ],
      topNeighborhood: "JOAO ALVES",
    },
    {
      name: "Senador Guiomard",
      totalVotes: 66,
      pollingPlaces: 30,
      sections: 73,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 23,
          pollingPlaces: 10,
          sections: 31,
        },
        {
          name: "RAMAL NOVA ALDEIA",
          totalVotes: 17,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "CONJUNTO QUINARI",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "RAMAL SANTA MARIA",
          totalVotes: 5,
          pollingPlaces: 2,
          sections: 2,
        },
        {
          name: "18 DE SETEMBRO",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "Centro",
          totalVotes: 4,
          pollingPlaces: 3,
          sections: 5,
        },
        {
          name: "TRIUNFO",
          totalVotes: 3,
          pollingPlaces: 2,
          sections: 7,
        },
        {
          name: "DEMOCRACIA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SAO FRANCISCO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "JARDIM BOTANICO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "PA LIMEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "PSDA BONAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "RAMAL AREIA BRANCA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RAMAL NABOR JUNIOR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "RAMAL PROGRESSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "VILA PIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Acrelândia",
      totalVotes: 54,
      pollingPlaces: 13,
      sections: 42,
      neighborhoods: [
        {
          name: "ZONA RURAL",
          totalVotes: 23,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "CENTRO",
          totalVotes: 12,
          pollingPlaces: 7,
          sections: 27,
        },
        {
          name: "PORTO LUIZ I",
          totalVotes: 8,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RAMAL PROGRESSO",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "VILA REDENCAO",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "RAMAL DO PELE",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RAMAL GRANADA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 5,
        },
      ],
      topNeighborhood: "ZONA RURAL",
    },
    {
      name: "Epitaciolândia",
      totalVotes: 48,
      pollingPlaces: 16,
      sections: 47,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 20,
          pollingPlaces: 4,
          sections: 16,
        },
        {
          name: "AEROPORTO",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "SATEL",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "Centro",
          totalVotes: 6,
          pollingPlaces: 3,
          sections: 5,
        },
        {
          name: "LOTEAMENTO CRUZEIRO DO SUL",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "LIBERDADE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "VILA PROGRESSO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE MATO GROSSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE PRATA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "SERINGAL PORONGABA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Porto Acre",
      totalVotes: 47,
      pollingPlaces: 18,
      sections: 53,
      neighborhoods: [
        {
          name: "Centro",
          totalVotes: 47,
          pollingPlaces: 18,
          sections: 53,
        },
      ],
      topNeighborhood: "Centro",
    },
    {
      name: "Brasiléia",
      totalVotes: 43,
      pollingPlaces: 25,
      sections: 71,
      neighborhoods: [
        {
          name: "Centro",
          totalVotes: 12,
          pollingPlaces: 6,
          sections: 10,
        },
        {
          name: "CENTRO",
          totalVotes: 8,
          pollingPlaces: 4,
          sections: 16,
        },
        {
          name: "POLO AGROFLORESTAL",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "TRES BOTIQUINS",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "FRANCISCO JOSE MOREIRA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "COMUNIDADE LUA NOVA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "ELADORADO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "ESTRADA DO PACIFICO",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 6,
        },
        {
          name: "FERREIRA DA SILVA",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 7,
        },
        {
          name: "LEONARDO BARBOSA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "RAIMUNDO CHAAR",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "CHICO LEAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "ELDORADO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "RAMAL SANTA LUZIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RESERVA CHICO MENDES",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
      ],
      topNeighborhood: "Centro",
    },
    {
      name: "Tarauacá",
      totalVotes: 41,
      pollingPlaces: 30,
      sections: 101,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 25,
          pollingPlaces: 12,
          sections: 58,
        },
        {
          name: "COPACABANA",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "SENADOR POMPEU",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 7,
        },
        {
          name: "TRIÂNGULO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "AVELINO LEAL",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "Centro",
          totalVotes: 1,
          pollingPlaces: 4,
          sections: 4,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "ALDEIA CAUCHO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ALDEIA INDÍGENA NOVA ESPERANÇA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ALDEIA INDÍGENA PRAIA DO CARAPANÃ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ALDEIA SÃO VICENTE, RIO HUMAITÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE DOM JOACIR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "CORCOVADO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "LIBERDADE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SERINGAL INDEPENDENCIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "SERINGAL PARAÍSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Bujari",
      totalVotes: 36,
      pollingPlaces: 11,
      sections: 35,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 30,
          pollingPlaces: 5,
          sections: 22,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "RAMAL DO ESPINHARA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "RAMAL LINHA NOVA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 3,
        },
        {
          name: "PROJETO ANTIMARI",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Marechal Thaumaturgo",
      totalVotes: 32,
      pollingPlaces: 16,
      sections: 42,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 22,
          pollingPlaces: 4,
          sections: 19,
        },
        {
          name: "SERINGAL CAIPORA",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE EVANGÉLICA ACURIÁ II",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE ORIENTE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "FAZENDA CACHOEIRA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "FOZ DO BAJE",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 5,
        },
        {
          name: "ALDEIA CRUZEIRINHO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE BELFORT",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE REMANSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE TETÉU",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SERINGAL RESTAURACAO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "SERINGAL TRIUNFO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Plácido de Castro",
      totalVotes: 22,
      pollingPlaces: 20,
      sections: 53,
      neighborhoods: [
        {
          name: "RAMAL NOVO HORIZONTE",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "VILA CAMPINAS",
          totalVotes: 10,
          pollingPlaces: 3,
          sections: 11,
        },
        {
          name: "CENTRO",
          totalVotes: 2,
          pollingPlaces: 9,
          sections: 29,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 3,
        },
        {
          name: "RAMAL MONTE ALEGRE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 4,
          sections: 7,
        },
      ],
      topNeighborhood: "RAMAL NOVO HORIZONTE",
    },
    {
      name: "Capixaba",
      totalVotes: 17,
      pollingPlaces: 12,
      sections: 31,
      neighborhoods: [
        {
          name: "Centro",
          totalVotes: 17,
          pollingPlaces: 12,
          sections: 31,
        },
      ],
      topNeighborhood: "Centro",
    },
    {
      name: "Xapuri",
      totalVotes: 14,
      pollingPlaces: 19,
      sections: 52,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 10,
          pollingPlaces: 8,
          sections: 34,
        },
        {
          name: "ASSENTAMENTO TUPÁ",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "Centro",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "SERINGAL CACHOEIRA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SIBERIA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "CONSTANTINO MELO SARKIS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "MUTIRAO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SERINGAL DOIS IRMÃOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "SERINGAL FLORESTA",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 2,
        },
        {
          name: "SERINGAL SÃO JOSÉ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "VARIANTE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Assis Brasil",
      totalVotes: 12,
      pollingPlaces: 12,
      sections: 23,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 8,
          pollingPlaces: 3,
          sections: 11,
        },
        {
          name: "CASCATA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "ALDEIA EXTREMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ALDEIA JATOBÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ALDEIA TRÊS CACHOEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "BELA VISTA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 2,
        },
        {
          name: "SERINGAL ICURIÃ",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 2,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Feijó",
      totalVotes: 12,
      pollingPlaces: 24,
      sections: 85,
      neighborhoods: [
        {
          name: "CIDADE NOVA",
          totalVotes: 5,
          pollingPlaces: 2,
          sections: 16,
        },
        {
          name: "COHAB",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "NAIR ARAUJO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "BELA VISTA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 8,
        },
        {
          name: "CENTRO",
          totalVotes: 1,
          pollingPlaces: 4,
          sections: 22,
        },
        {
          name: "ESPERANCA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 8,
        },
        {
          name: "ALDEIA MORADA NOVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ALDEIA NOVA OLINDA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ALDEIA PAROA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 3,
        },
        {
          name: "RAMAL BOM FUTURO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "SEGUNDO DISTRITO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
        },
        {
          name: "SERINGAL BOA VISTA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "SERINGAL BOM PRINCIPIO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "SERINGAL CANADA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SERINGAL HUMAITA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SERINGAL NOVO PORTO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SERINGAL PORTO RUBIM",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
      ],
      topNeighborhood: "CIDADE NOVA",
    },
    {
      name: "Mâncio Lima",
      totalVotes: 9,
      pollingPlaces: 20,
      sections: 53,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 7,
          pollingPlaces: 8,
          sections: 20,
        },
        {
          name: "COLONIA SAO FRANCISCO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 8,
        },
        {
          name: "VILA GUARANI",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 6,
        },
        {
          name: "ALTO PARANÁ PENTECOSTES",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "COMUNIDADE 3 UNIDOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE BELO MONTE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE BOM SOSSEGO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE POYANAWA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE SÃO DOMINGOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE SÃO SALVADOR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "FOZ DO ANIL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "SÃO VIDAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 5,
        },
        {
          name: "SERINGAL REPUBLICA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Manoel Urbano",
      totalVotes: 6,
      pollingPlaces: 8,
      sections: 27,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 2,
          pollingPlaces: 2,
          sections: 7,
        },
        {
          name: "SÃO FRANCISCO",
          totalVotes: 2,
          pollingPlaces: 2,
          sections: 8,
        },
        {
          name: "SÃO JOSÉ",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 8,
        },
        {
          name: "ALDEIA BUAÇU",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ANIBAL SARAIVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SERINGAL ITAÚBA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Rodrigues Alves",
      totalVotes: 4,
      pollingPlaces: 23,
      sections: 48,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 1,
          pollingPlaces: 5,
          sections: 21,
        },
        {
          name: "COMUNIDADE PUCALPA II",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "FOZ DO PARANA DOS MOURAS",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "PROJETO SÃO PEDRO",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 2,
        },
        {
          name: "AGROVILA DO MUJÚ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 3,
        },
        {
          name: "COMUNIDADE 3 BOCAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE CÍCERO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE FORTALEZA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE NOVA CINTRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "COMUNIDADE PROFETA DO 13 DE MAIO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
        },
        {
          name: "COMUNIDADE SAO JERONIMO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE TORRE DA LUA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "PROJETO SAO PEDRO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RAMAL DA MARIANA II",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RAMAL DO BATOQUE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "RAMAL DO HAVAÍ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Jordão",
      totalVotes: 1,
      pollingPlaces: 8,
      sections: 21,
      neighborhoods: [
        {
          name: "Centro",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 6,
        },
        {
          name: "CENTRO",
          totalVotes: 0,
          pollingPlaces: 3,
          sections: 9,
        },
        {
          name: "SERINGAL ALAGOAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "SERINGAL NOVO PORTO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
      ],
      topNeighborhood: "Centro",
    },
    {
      name: "Porto Walter",
      totalVotes: 1,
      pollingPlaces: 13,
      sections: 27,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 1,
          pollingPlaces: 4,
          sections: 16,
        },
        {
          name: "COMUNIDADE 3 BOCAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE DA REFORMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE ESTIRÃO AZUL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE FORMIGUEIRO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE IRACEMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE MORORÓ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "COMUNIDADE RAIMUNDO DO VALE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "COMUNIDADE VITÓRIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "FOZ DO RIO GRAJAÚ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Santa Rosa do Purus",
      totalVotes: 1,
      pollingPlaces: 6,
      sections: 13,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 1,
          pollingPlaces: 3,
          sections: 9,
        },
        {
          name: "ALDEIA NOVA FRONTEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
        },
        {
          name: "ALDEIA NOVO MARINHO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
        {
          name: "ALDEIA SOBRAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
        },
      ],
      topNeighborhood: "CENTRO",
    },
  ],
  chartData: [
    {
      municipality: "Rio Branco",
      votes: 1657,
    },
    {
      municipality: "Sena Madureira",
      votes: 164,
    },
    {
      municipality: "Cruzeiro do Sul",
      votes: 98,
    },
    {
      municipality: "Senador Guiomard",
      votes: 66,
    },
    {
      municipality: "Acrelândia",
      votes: 54,
    },
    {
      municipality: "Epitaciolândia",
      votes: 48,
    },
    {
      municipality: "Porto Acre",
      votes: 47,
    },
    {
      municipality: "Brasiléia",
      votes: 43,
    },
    {
      municipality: "Tarauacá",
      votes: 41,
    },
    {
      municipality: "Bujari",
      votes: 36,
    },
  ],
} as const;

const piePalette = [
  "#b98a52",
  "#6f7f8c",
  "#22435d",
  "#8aa1b1",
  "#d4b28a",
  "#3d5a73",
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("pt-BR").format(value);
}

function formatPercentage(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

function truncateLabel(value: string, maxLength: number) {
  return value.length > maxLength ? `${value.slice(0, maxLength)}…` : value;
}

export default function desempenho2022() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMunicipality, setActiveMunicipality] = useState<string>(
    electionData.municipalities[0]?.name ?? "",
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const updateViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  const activeData = useMemo(
    () =>
      electionData.municipalities.find(
        (item) => item.name === activeMunicipality,
      ) ?? electionData.municipalities[0],
    [activeMunicipality],
  );

  const municipalityBarData = useMemo(
    () => electionData.chartData.map((item) => ({ ...item })),
    [],
  );

  const donutData = useMemo(() => {
    const topFive = electionData.municipalities.slice(0, 5).map((item) => ({
      name: item.name,
      votes: item.totalVotes,
    }));

    const remainder = electionData.municipalities
      .slice(5)
      .reduce((sum, item) => sum + item.totalVotes, 0);

    return remainder > 0
      ? [...topFive, { name: "Demais municípios", votes: remainder }]
      : topFive;
  }, []);

  const activeShare = activeData
    ? activeData.totalVotes / Math.max(electionData.summary.totalVotes, 1)
    : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-800 px-5 py-6 text-white shadow-lg sm:px-6 sm:py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
            Painel territorial
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {electionData.summary.title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-indigo-50 sm:text-base">
            {electionData.summary.subtitle} Visualização reorganizada com base
            no layout de referência, priorizando leitura rápida, blocos
            objetivos e boa navegação em celulares.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Total de votos",
                value: formatNumber(electionData.summary.totalVotes),
              },
              {
                label: "Municípios",
                value: formatNumber(electionData.summary.totalMunicipalities),
              },
              {
                label: "Seções",
                value: formatNumber(electionData.summary.totalSections),
              },
              {
                label: "Locais",
                value: formatNumber(electionData.summary.totalPollingPlaces),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-100">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
              Fatores territoriais
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Municípios com leitura prioritária
            </h2>
          </div>

          {electionData.municipalities
            .slice(0, 8)
            .map((municipality, index) => {
              const isActive = activeMunicipality === municipality.name;
              const share =
                municipality.totalVotes /
                Math.max(electionData.summary.totalVotes, 1);
              const statusTone =
                municipality.totalVotes >= 100
                  ? {
                      label: "Alta concentração",
                      scoreColor: "text-green-600",
                      badge: "bg-green-50 border-green-200 text-green-700",
                    }
                  : municipality.totalVotes >= 50
                    ? {
                        label: "Concentração moderada",
                        scoreColor: "text-amber-600",
                        badge: "bg-amber-50 border-amber-200 text-amber-700",
                      }
                    : {
                        label: "Baixa concentração",
                        scoreColor: "text-red-600",
                        badge: "bg-red-50 border-red-200 text-red-700",
                      };

              return (
                <article
                  key={municipality.name}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
                >
                  <button
                    type="button"
                    onClick={() => setActiveMunicipality(municipality.name)}
                    className="w-full text-left"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">
                            Município {index + 1}
                          </span>
                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusTone.badge}`}
                          >
                            {statusTone.label}
                          </span>
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
                          {municipality.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Bairro líder:{" "}
                          <strong className="text-slate-900">
                            {municipality.topNeighborhood}
                          </strong>
                          . Participação de{" "}
                          <strong className="text-slate-900">
                            {formatPercentage(share)}
                          </strong>{" "}
                          sobre o total geral e{" "}
                          <strong className="text-slate-900">
                            {formatNumber(municipality.sections)}
                          </strong>{" "}
                          seções apuradas.
                        </p>
                      </div>

                      <div className="flex items-center gap-3 sm:pl-4">
                        <div className="text-right">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Votos
                          </p>
                          <p
                            className={`text-3xl font-bold ${statusTone.scoreColor}`}
                          >
                            {formatNumber(municipality.totalVotes)}
                          </p>
                        </div>
                        {municipality.totalVotes >= 100 ? (
                          <Building2 className="h-6 w-6 text-green-600" />
                        ) : municipality.totalVotes >= 50 ? (
                          <MapPinned className="h-6 w-6 text-amber-600" />
                        ) : (
                          <Vote className="h-6 w-6 text-red-600" />
                        )}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 grid gap-4 border-t border-slate-200 pt-5 lg:grid-cols-[1.15fr_0.85fr]">
                          <div className="space-y-3">
                            {municipality.neighborhoods
                              .slice(0, isMobile ? 4 : 6)
                              .map((neighborhood, neighborhoodIndex) => {
                                const localShare =
                                  municipality.totalVotes > 0
                                    ? neighborhood.totalVotes /
                                      municipality.totalVotes
                                    : 0;

                                return (
                                  <div
                                    key={`${municipality.name}-${neighborhood.name}`}
                                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                                  >
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                      <div>
                                        <div className="flex items-center gap-2">
                                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                                            {neighborhoodIndex + 1}
                                          </span>
                                          <h4 className="text-base font-bold text-slate-900">
                                            {neighborhood.name}
                                          </h4>
                                        </div>
                                        <p className="mt-2 text-sm text-slate-600">
                                          {formatNumber(neighborhood.sections)}{" "}
                                          seções ·{" "}
                                          {formatNumber(
                                            neighborhood.pollingPlaces,
                                          )}{" "}
                                          locais
                                        </p>
                                      </div>
                                      <div className="text-left sm:text-right">
                                        <p className="text-2xl font-bold text-indigo-700">
                                          {formatNumber(
                                            neighborhood.totalVotes,
                                          )}
                                        </p>
                                        <p className="text-sm font-medium text-slate-600">
                                          {formatPercentage(localShare)} do
                                          município
                                        </p>
                                      </div>
                                    </div>
                                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                                      <div
                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700"
                                        style={{
                                          width: `${Math.max(localShare * 100, 5)}%`,
                                        }}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
                            <h4 className="text-lg font-bold text-slate-900">
                              Distribuição local
                            </h4>
                            <p className="mt-1 text-sm text-slate-600">
                              Comparativo dos bairros com maior volume de votos.
                            </p>
                            <div className="mt-4 h-[16rem] sm:h-[18rem]">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  layout="vertical"
                                  data={municipality.neighborhoods
                                    .slice(0, isMobile ? 4 : 6)
                                    .map((item) => ({
                                      neighborhood: item.name,
                                      votes: item.totalVotes,
                                    }))}
                                  margin={{
                                    top: 8,
                                    right: 8,
                                    bottom: 0,
                                    left: isMobile ? 0 : 8,
                                  }}
                                >
                                  <CartesianGrid
                                    horizontal={false}
                                    strokeDasharray="3 3"
                                    stroke="#cbd5e1"
                                  />
                                  <XAxis
                                    type="number"
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{
                                      fill: "#475569",
                                      fontSize: isMobile ? 10 : 12,
                                    }}
                                  />
                                  <YAxis
                                    type="category"
                                    dataKey="neighborhood"
                                    tickLine={false}
                                    axisLine={false}
                                    width={isMobile ? 72 : 108}
                                    tickFormatter={(value) =>
                                      truncateLabel(value, isMobile ? 10 : 16)
                                    }
                                    tick={{
                                      fill: "#475569",
                                      fontSize: isMobile ? 10 : 12,
                                    }}
                                  />
                                  <Tooltip
                                    cursor={{ fill: "rgba(99,102,241,0.08)" }}
                                    contentStyle={{
                                      borderRadius: 12,
                                      borderColor: "#cbd5e1",
                                      background: "rgba(255,255,255,0.98)",
                                    }}
                                  />
                                  <Bar
                                    dataKey="votes"
                                    radius={[0, 10, 10, 0]}
                                    fill="#4f46e5"
                                  />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Cenários comparativos
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Leitura sintética dos municípios com maior votação e sua
              participação relativa no conjunto.
            </p>

            <div className="mt-5 space-y-3">
              {electionData.municipalities.slice(0, 5).map((item) => {
                const share =
                  item.totalVotes /
                  Math.max(electionData.summary.totalVotes, 1);
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-4"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {formatNumber(item.totalVotes)} votos ·{" "}
                        {formatNumber(item.sections)} seções
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-indigo-700">
                        {formatPercentage(share)}
                      </p>
                      <p className="text-sm font-semibold text-slate-700">
                        {item.topNeighborhood}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 h-[18rem] sm:h-[20rem]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      borderColor: "#cbd5e1",
                      background: "rgba(255,255,255,0.98)",
                    }}
                  />
                  <Pie
                    data={donutData}
                    dataKey="votes"
                    nameKey="name"
                    innerRadius={isMobile ? 42 : 58}
                    outerRadius={isMobile ? 72 : 96}
                    paddingAngle={3}
                  >
                    {donutData.map((entry, index) => (
                      <Cell
                        key={`${entry.name}-${index}`}
                        fill={piePalette[index % piePalette.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <aside className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm sm:p-6">
            <h2 className="text-xl font-bold text-indigo-900 sm:text-2xl">
              Conclusão territorial
            </h2>
            <p className="mt-3 text-sm leading-6 text-indigo-800">
              <strong>
                Município em foco:{" "}
                {activeData?.name ?? electionData.summary.topMunicipality}
              </strong>
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-indigo-100 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                  Votos no foco
                </p>
                <p className="mt-2 text-3xl font-bold text-indigo-900">
                  {formatNumber(activeData?.totalVotes ?? 0)}
                </p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                  Participação geral
                </p>
                <p className="mt-2 text-3xl font-bold text-indigo-900">
                  {formatPercentage(activeShare)}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-indigo-100 bg-white px-4 py-4">
              <h3 className="text-lg font-bold text-indigo-900">
                Síntese executiva
              </h3>
              <div className="mt-3 space-y-2 text-sm leading-6 text-indigo-800">
                <p>
                  <strong>Ponto forte:</strong>{" "}
                  {electionData.summary.topMunicipality} lidera o conjunto e
                  funciona como principal polo de concentração eleitoral.
                </p>
                <p>
                  <strong>Bairro de maior destaque:</strong>{" "}
                  {activeData?.topNeighborhood ?? "Centro"}, com{" "}
                  {formatNumber(activeData?.neighborhoods[0]?.totalVotes ?? 0)}{" "}
                  votos no município selecionado.
                </p>
                <p>
                  <strong>Média municipal:</strong>{" "}
                  {formatNumber(
                    electionData.summary.averageVotesPerMunicipality,
                  )}{" "}
                  votos por município.
                </p>
                <p>
                  <strong>Recomendação:</strong> priorizar expansão nos
                  municípios intermediários e reforçar presença nos bairros com
                  maior participação relativa.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {(activeData?.neighborhoods.slice(0, 5) ?? []).map(
                (item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="rounded-xl border border-indigo-100 bg-white px-4 py-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-slate-600">
                          {formatNumber(item.sections)} seções ·{" "}
                          {formatNumber(item.pollingPlaces)} locais
                        </p>
                      </div>
                      <strong className="text-lg font-bold text-indigo-900">
                        {formatNumber(item.totalVotes)}
                      </strong>
                    </div>
                  </div>
                ),
              )}
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
