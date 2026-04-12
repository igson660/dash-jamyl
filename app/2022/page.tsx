"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import {
  Building2,
  ChevronDown,
  MapPinned,
  TrendingUp,
  Vote,
} from "lucide-react";

type Neighborhood = {
  name: string;
  totalVotes: number;
  pollingPlaces: number;
  sections: number;
  registeredVoters: number;
  turnout: number;
  absences: number;
};

type Municipality = {
  name: string;
  totalVotes: number;
  pollingPlaces: number;
  sections: number;
  registeredVoters: number;
  turnout: number;
  absences: number;
  neighborhoods: Neighborhood[];
  topNeighborhood: string;
};

type ElectionData = {
  summary: {
    title: string;
    subtitle: string;
    candidateName: string;
    office: string;
    totalMunicipalities: number;
    totalVotes: number;
    totalSections: number;
    totalPollingPlaces: number;
    topMunicipality: string;
    averageVotesPerMunicipality: number;
    registeredVoters: number;
    turnout: number;
    absences: number;
    turnoutRate: number;
    absenceRate: number;
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
    subtitle:
      "Desempenho de JAMYL ASFURY para deputado federal com consolidação territorial por município e bairro.",
    totalMunicipalities: 22,
    totalVotes: 2385,
    totalSections: 2124,
    totalPollingPlaces: 688,
    topMunicipality: "Rio Branco",
    averageVotesPerMunicipality: 108,
    candidateName: "JAMYL ASFURY",
    office: "DEPUTADO FEDERAL",
    registeredVoters: 2385,
    turnout: 2385,
    absences: 0,
    turnoutRate: 1,
    absenceRate: 0,
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
          registeredVoters: 133,
          turnout: 133,
          absences: 0,
        },
        {
          name: "BOSQUE",
          totalVotes: 85,
          pollingPlaces: 14,
          sections: 41,
          registeredVoters: 85,
          turnout: 85,
          absences: 0,
        },
        {
          name: "AEROPORTO VELHO",
          totalVotes: 69,
          pollingPlaces: 9,
          sections: 34,
          registeredVoters: 69,
          turnout: 69,
          absences: 0,
        },
        {
          name: "ESTAÇÃO EXPERIMENTAL",
          totalVotes: 66,
          pollingPlaces: 9,
          sections: 31,
          registeredVoters: 66,
          turnout: 66,
          absences: 0,
        },
        {
          name: "CONJUNTO ESPERANCA",
          totalVotes: 48,
          pollingPlaces: 5,
          sections: 17,
          registeredVoters: 48,
          turnout: 48,
          absences: 0,
        },
        {
          name: "CALAFATE",
          totalVotes: 47,
          pollingPlaces: 6,
          sections: 23,
          registeredVoters: 47,
          turnout: 47,
          absences: 0,
        },
        {
          name: "VILA ACRE",
          totalVotes: 47,
          pollingPlaces: 6,
          sections: 24,
          registeredVoters: 47,
          turnout: 47,
          absences: 0,
        },
        {
          name: "SANTA INES",
          totalVotes: 41,
          pollingPlaces: 4,
          sections: 14,
          registeredVoters: 41,
          turnout: 41,
          absences: 0,
        },
        {
          name: "CONJUNTO UNIVERSITÁRIO II",
          totalVotes: 39,
          pollingPlaces: 2,
          sections: 10,
          registeredVoters: 39,
          turnout: 39,
          absences: 0,
        },
        {
          name: "TRANSACREANA",
          totalVotes: 35,
          pollingPlaces: 4,
          sections: 8,
          registeredVoters: 35,
          turnout: 35,
          absences: 0,
        },
        {
          name: "QUINZE",
          totalVotes: 33,
          pollingPlaces: 7,
          sections: 27,
          registeredVoters: 33,
          turnout: 33,
          absences: 0,
        },
        {
          name: "BOA UNIÃO",
          totalVotes: 30,
          pollingPlaces: 3,
          sections: 12,
          registeredVoters: 30,
          turnout: 30,
          absences: 0,
        },
        {
          name: "MONTANHÊS",
          totalVotes: 30,
          pollingPlaces: 2,
          sections: 10,
          registeredVoters: 30,
          turnout: 30,
          absences: 0,
        },
        {
          name: "CONJUNTO TUCUMÃ II",
          totalVotes: 29,
          pollingPlaces: 2,
          sections: 12,
          registeredVoters: 29,
          turnout: 29,
          absences: 0,
        },
        {
          name: "PALHERAL",
          totalVotes: 29,
          pollingPlaces: 5,
          sections: 11,
          registeredVoters: 29,
          turnout: 29,
          absences: 0,
        },
        {
          name: "SAO FRANCISCO",
          totalVotes: 28,
          pollingPlaces: 4,
          sections: 17,
          registeredVoters: 28,
          turnout: 28,
          absences: 0,
        },
        {
          name: "XAVIER MAIA",
          totalVotes: 27,
          pollingPlaces: 3,
          sections: 19,
          registeredVoters: 27,
          turnout: 27,
          absences: 0,
        },
        {
          name: "6 DE AGOSTO",
          totalVotes: 25,
          pollingPlaces: 3,
          sections: 15,
          registeredVoters: 25,
          turnout: 25,
          absences: 0,
        },
        {
          name: "AVIARIO",
          totalVotes: 25,
          pollingPlaces: 4,
          sections: 17,
          registeredVoters: 25,
          turnout: 25,
          absences: 0,
        },
        {
          name: "BELO JARDIM II",
          totalVotes: 25,
          pollingPlaces: 6,
          sections: 20,
          registeredVoters: 25,
          turnout: 25,
          absences: 0,
        },
        {
          name: "DISTRITO INDUSTRIAL",
          totalVotes: 25,
          pollingPlaces: 2,
          sections: 12,
          registeredVoters: 25,
          turnout: 25,
          absences: 0,
        },
        {
          name: "CONJUNTO GUIOMARD SANTOS",
          totalVotes: 23,
          pollingPlaces: 2,
          sections: 9,
          registeredVoters: 23,
          turnout: 23,
          absences: 0,
        },
        {
          name: "JOÃO EDUARDO I",
          totalVotes: 23,
          pollingPlaces: 2,
          sections: 10,
          registeredVoters: 23,
          turnout: 23,
          absences: 0,
        },
        {
          name: "NOVA ESPERANCA",
          totalVotes: 23,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 23,
          turnout: 23,
          absences: 0,
        },
        {
          name: "ISAURA PARENTE",
          totalVotes: 21,
          pollingPlaces: 3,
          sections: 12,
          registeredVoters: 21,
          turnout: 21,
          absences: 0,
        },
        {
          name: "CADEIA VELHA",
          totalVotes: 20,
          pollingPlaces: 2,
          sections: 12,
          registeredVoters: 20,
          turnout: 20,
          absences: 0,
        },
        {
          name: "JARDIM PRIMAVERA",
          totalVotes: 20,
          pollingPlaces: 3,
          sections: 10,
          registeredVoters: 20,
          turnout: 20,
          absences: 0,
        },
        {
          name: "CONJUNTO TUCUMÃ I",
          totalVotes: 19,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 19,
          turnout: 19,
          absences: 0,
        },
        {
          name: "GLORIA",
          totalVotes: 19,
          pollingPlaces: 1,
          sections: 7,
          registeredVoters: 19,
          turnout: 19,
          absences: 0,
        },
        {
          name: "JARDIM EUROPA",
          totalVotes: 19,
          pollingPlaces: 1,
          sections: 9,
          registeredVoters: 19,
          turnout: 19,
          absences: 0,
        },
        {
          name: "CONJUNTO ESPERANÇA II",
          totalVotes: 17,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 17,
          turnout: 17,
          absences: 0,
        },
        {
          name: "MANOEL JULIÃO",
          totalVotes: 17,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 17,
          turnout: 17,
          absences: 0,
        },
        {
          name: "ABRAÃO ALAB",
          totalVotes: 16,
          pollingPlaces: 3,
          sections: 8,
          registeredVoters: 16,
          turnout: 16,
          absences: 0,
        },
        {
          name: "CERAMICA",
          totalVotes: 16,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 16,
          turnout: 16,
          absences: 0,
        },
        {
          name: "VITORIA",
          totalVotes: 16,
          pollingPlaces: 3,
          sections: 9,
          registeredVoters: 16,
          turnout: 16,
          absences: 0,
        },
        {
          name: "BAHIA VELHA",
          totalVotes: 15,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 15,
          turnout: 15,
          absences: 0,
        },
        {
          name: "CONJUNTO BELA VISTA",
          totalVotes: 14,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 14,
          turnout: 14,
          absences: 0,
        },
        {
          name: "CONJUNTO HABITACIONAL VILA BETEL 2",
          totalVotes: 14,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 14,
          turnout: 14,
          absences: 0,
        },
        {
          name: "GERALDO FLEMING",
          totalVotes: 14,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 14,
          turnout: 14,
          absences: 0,
        },
        {
          name: "SOBRAL",
          totalVotes: 14,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 14,
          turnout: 14,
          absences: 0,
        },
        {
          name: "CONJUNTO TANGARA",
          totalVotes: 13,
          pollingPlaces: 3,
          sections: 8,
          registeredVoters: 13,
          turnout: 13,
          absences: 0,
        },
        {
          name: "FLORESTA SUL",
          totalVotes: 13,
          pollingPlaces: 2,
          sections: 6,
          registeredVoters: 13,
          turnout: 13,
          absences: 0,
        },
        {
          name: "RECANTO DOS BURITIS",
          totalVotes: 13,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 13,
          turnout: 13,
          absences: 0,
        },
        {
          name: "TANCREDO NEVES",
          totalVotes: 13,
          pollingPlaces: 4,
          sections: 11,
          registeredVoters: 13,
          turnout: 13,
          absences: 0,
        },
        {
          name: "VILA IVONETE",
          totalVotes: 13,
          pollingPlaces: 3,
          sections: 8,
          registeredVoters: 13,
          turnout: 13,
          absences: 0,
        },
        {
          name: "BOA VISTA",
          totalVotes: 12,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 12,
          turnout: 12,
          absences: 0,
        },
        {
          name: "CIDADE NOVA",
          totalVotes: 12,
          pollingPlaces: 3,
          sections: 6,
          registeredVoters: 12,
          turnout: 12,
          absences: 0,
        },
        {
          name: "RUI LINO",
          totalVotes: 12,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 12,
          turnout: 12,
          absences: 0,
        },
        {
          name: "WANDERLEY DANTAS",
          totalVotes: 12,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 12,
          turnout: 12,
          absences: 0,
        },
        {
          name: "NOVA ESTACAO",
          totalVotes: 11,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 11,
          turnout: 11,
          absences: 0,
        },
        {
          name: "PLACIDO DE CASTRO",
          totalVotes: 11,
          pollingPlaces: 2,
          sections: 5,
          registeredVoters: 11,
          turnout: 11,
          absences: 0,
        },
        {
          name: "COMARA",
          totalVotes: 10,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 10,
          turnout: 10,
          absences: 0,
        },
        {
          name: "DOM GIOCONDO",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 10,
          turnout: 10,
          absences: 0,
        },
        {
          name: "PLACAS",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 10,
          turnout: 10,
          absences: 0,
        },
        {
          name: "TAQUARI",
          totalVotes: 10,
          pollingPlaces: 5,
          sections: 12,
          registeredVoters: 10,
          turnout: 10,
          absences: 0,
        },
        {
          name: "VILA DNER",
          totalVotes: 10,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 10,
          turnout: 10,
          absences: 0,
        },
        {
          name: "ALTO ALEGRE",
          totalVotes: 9,
          pollingPlaces: 3,
          sections: 10,
          registeredVoters: 9,
          turnout: 9,
          absences: 0,
        },
        {
          name: "BAHIA NOVA",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 9,
          turnout: 9,
          absences: 0,
        },
        {
          name: "CONQUISTA",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 9,
          turnout: 9,
          absences: 0,
        },
        {
          name: "JARDIM ELDORADO",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 9,
          turnout: 9,
          absences: 0,
        },
        {
          name: "JOÃO EDUARDO II",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 9,
          turnout: 9,
          absences: 0,
        },
        {
          name: "MASCARENHA DE MORAIS",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 9,
          turnout: 9,
          absences: 0,
        },
        {
          name: "RAIMUNDO MELO",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 9,
          turnout: 9,
          absences: 0,
        },
        {
          name: "CIDADE DO POVO",
          totalVotes: 8,
          pollingPlaces: 3,
          sections: 8,
          registeredVoters: 8,
          turnout: 8,
          absences: 0,
        },
        {
          name: "CONJUNTO UNIVERSITARIO",
          totalVotes: 8,
          pollingPlaces: 2,
          sections: 3,
          registeredVoters: 8,
          turnout: 8,
          absences: 0,
        },
        {
          name: "SANTO AFONSO",
          totalVotes: 7,
          pollingPlaces: 2,
          sections: 3,
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "TRIANGULO VELHO",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "TROPICAL",
          totalVotes: 7,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "VILA CUSTÓDIO FREIRE",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "VILA VERDE",
          totalVotes: 7,
          pollingPlaces: 2,
          sections: 4,
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "ADALBERTO SENA",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 6,
          turnout: 6,
          absences: 0,
        },
        {
          name: "JARDIM NAZLE",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 6,
          turnout: 6,
          absences: 0,
        },
        {
          name: "PREVENTORIO",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 6,
          turnout: 6,
          absences: 0,
        },
        {
          name: "RAMAL DA PICAREIRA",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 6,
          turnout: 6,
          absences: 0,
        },
        {
          name: "ALBERT SAMPAIO",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "DA PAZ",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "MORADA DO SOL",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "RAMAL DA CASTANHEIRA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "SANTA QUITERIA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "AYRTON SENA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "BAIXA VERDE",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "CONJUNTO WALDEMAR MACIEL",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "JORGE LAVOCAT",
          totalVotes: 4,
          pollingPlaces: 2,
          sections: 6,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "PORTAL DA AMAZÔNIA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "RAMAL DA GARAPEIRA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "AREAL",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "BARRO VERMELHO",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "CHICO MENDES",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "MOCINHA MAGALHÃES",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "APOLONIO SALES",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "BENFICA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "CANAÃ",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "NOVO HORIZONTE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "VILA SANTA CECÍLIA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "WALDEMAR MACIEL",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "CONJUNTO SOLAR",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "RAMAL CAIPORA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "RAMAL DA PALHEIRA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "RAMAL ITUCUMÃ",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "RAMAL UNIAO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "BELO JARDIM I",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ELDORADO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "LIBERDADE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "PROCON",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL DO GURGEL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL JARINAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 1657,
      turnout: 1657,
      absences: 0,
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
          registeredVoters: 82,
          turnout: 82,
          absences: 0,
        },
        {
          name: "EUGENIO AREAL",
          totalVotes: 15,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 15,
          turnout: 15,
          absences: 0,
        },
        {
          name: "DA PISTA",
          totalVotes: 11,
          pollingPlaces: 3,
          sections: 9,
          registeredVoters: 11,
          turnout: 11,
          absences: 0,
        },
        {
          name: "CSU",
          totalVotes: 9,
          pollingPlaces: 3,
          sections: 7,
          registeredVoters: 9,
          turnout: 9,
          absences: 0,
        },
        {
          name: "NITERÓI",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 9,
          turnout: 9,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 8,
          pollingPlaces: 7,
          sections: 7,
          registeredVoters: 8,
          turnout: 8,
          absences: 0,
        },
        {
          name: "CRISTO LIBERTADOR",
          totalVotes: 8,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 8,
          turnout: 8,
          absences: 0,
        },
        {
          name: "VILA MILITAR",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "VITORIA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "BOM SUCESSO",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "ANA VIEIRA",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "BOSQUE",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "CIDADE NOVA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "SERINGAL RECIFE",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "COMUNIDADE CAZUMBÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE LUA NOVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "PROJETO JOAQUIM DE MATOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL NOVA OLINDA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 164,
      turnout: 164,
      absences: 0,
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
          registeredVoters: 22,
          turnout: 22,
          absences: 0,
        },
        {
          name: "CENTRO",
          totalVotes: 13,
          pollingPlaces: 7,
          sections: 26,
          registeredVoters: 13,
          turnout: 13,
          absences: 0,
        },
        {
          name: "ARTUR MAIA",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 6,
          turnout: 6,
          absences: 0,
        },
        {
          name: "ESCOLA TECNICA",
          totalVotes: 6,
          pollingPlaces: 3,
          sections: 12,
          registeredVoters: 6,
          turnout: 6,
          absences: 0,
        },
        {
          name: "SAO CRISTOVAO",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "SAO JOSE",
          totalVotes: 5,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "TELEGRAFO",
          totalVotes: 5,
          pollingPlaces: 2,
          sections: 12,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "AEROPORTO VELHO",
          totalVotes: 4,
          pollingPlaces: 2,
          sections: 12,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "MANOEL TERCAS",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "REMANSO",
          totalVotes: 4,
          pollingPlaces: 2,
          sections: 13,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "ALUMINIO",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "COBAL",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 7,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "MIRITIZAL",
          totalVotes: 3,
          pollingPlaces: 2,
          sections: 11,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "NOSSA DAS GRACAS",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "25 DE AGOSTO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "CRUZEIRAO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "ELETROACRE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "FLORESTA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "PROJETO SANTA LUZIA",
          totalVotes: 1,
          pollingPlaces: 5,
          sections: 13,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "RAMAL DA BURITIRANA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "VILA ASSIS BRASIL",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "VILA SANTA ROSA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ALDEIA INDÍGENA CAMPINAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "BOCA DA ALEMANHA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "CANELA FINA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 4,
          sections: 6,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE BOA VISTA DA SANTA MARIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE DA PRAINHA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE OLIVENÇA RIO JURUÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE PERIQUITO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE TERRA FIRME DE CIMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE VISTA ALEGRE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "FOZ DO RIO VALPARAIZO - JURUA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "LIBERDADE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "PARANÁ PENTECOSTES",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL DA MARIANA I",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "VARZEA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "VILA LAGOINHA",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "VILA SANTA LUZIA",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "VILA SAO PEDRO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "JOAO ALVES",
      registeredVoters: 98,
      turnout: 98,
      absences: 0,
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
          registeredVoters: 23,
          turnout: 23,
          absences: 0,
        },
        {
          name: "RAMAL NOVA ALDEIA",
          totalVotes: 17,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 17,
          turnout: 17,
          absences: 0,
        },
        {
          name: "CONJUNTO QUINARI",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 6,
          turnout: 6,
          absences: 0,
        },
        {
          name: "RAMAL SANTA MARIA",
          totalVotes: 5,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "18 DE SETEMBRO",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 4,
          pollingPlaces: 3,
          sections: 5,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "TRIUNFO",
          totalVotes: 3,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "DEMOCRACIA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "SAO FRANCISCO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "JARDIM BOTANICO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "PA LIMEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "PSDA BONAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL AREIA BRANCA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL NABOR JUNIOR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL PROGRESSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "VILA PIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 66,
      turnout: 66,
      absences: 0,
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
          registeredVoters: 23,
          turnout: 23,
          absences: 0,
        },
        {
          name: "CENTRO",
          totalVotes: 12,
          pollingPlaces: 7,
          sections: 27,
          registeredVoters: 12,
          turnout: 12,
          absences: 0,
        },
        {
          name: "PORTO LUIZ I",
          totalVotes: 8,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 8,
          turnout: 8,
          absences: 0,
        },
        {
          name: "RAMAL PROGRESSO",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "VILA REDENCAO",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "RAMAL DO PELE",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "RAMAL GRANADA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "ZONA RURAL",
      registeredVoters: 54,
      turnout: 54,
      absences: 0,
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
          registeredVoters: 20,
          turnout: 20,
          absences: 0,
        },
        {
          name: "AEROPORTO",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "SATEL",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 6,
          pollingPlaces: 3,
          sections: 5,
          registeredVoters: 6,
          turnout: 6,
          absences: 0,
        },
        {
          name: "LOTEAMENTO CRUZEIRO DO SUL",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "LIBERDADE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "VILA PROGRESSO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "COMUNIDADE MATO GROSSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE PRATA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL PORONGABA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 48,
      turnout: 48,
      absences: 0,
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
          registeredVoters: 47,
          turnout: 47,
          absences: 0,
        },
      ],
      topNeighborhood: "Centro",
      registeredVoters: 47,
      turnout: 47,
      absences: 0,
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
          registeredVoters: 12,
          turnout: 12,
          absences: 0,
        },
        {
          name: "CENTRO",
          totalVotes: 8,
          pollingPlaces: 4,
          sections: 16,
          registeredVoters: 8,
          turnout: 8,
          absences: 0,
        },
        {
          name: "POLO AGROFLORESTAL",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "TRES BOTIQUINS",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 6,
          turnout: 6,
          absences: 0,
        },
        {
          name: "FRANCISCO JOSE MOREIRA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "COMUNIDADE LUA NOVA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ELADORADO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ESTRADA DO PACIFICO",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 6,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "FERREIRA DA SILVA",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "LEONARDO BARBOSA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "RAIMUNDO CHAAR",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "CHICO LEAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ELDORADO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL SANTA LUZIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RESERVA CHICO MENDES",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "Centro",
      registeredVoters: 43,
      turnout: 43,
      absences: 0,
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
          registeredVoters: 25,
          turnout: 25,
          absences: 0,
        },
        {
          name: "COPACABANA",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "SENADOR POMPEU",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 7,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "TRIÂNGULO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "AVELINO LEAL",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 1,
          pollingPlaces: 4,
          sections: 4,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ALDEIA CAUCHO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ALDEIA INDÍGENA NOVA ESPERANÇA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ALDEIA INDÍGENA PRAIA DO CARAPANÃ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ALDEIA SÃO VICENTE, RIO HUMAITÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE DOM JOACIR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "CORCOVADO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "LIBERDADE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL INDEPENDENCIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL PARAÍSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 41,
      turnout: 41,
      absences: 0,
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
          registeredVoters: 30,
          turnout: 30,
          absences: 0,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "RAMAL DO ESPINHARA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "RAMAL LINHA NOVA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "PROJETO ANTIMARI",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 36,
      turnout: 36,
      absences: 0,
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
          registeredVoters: 22,
          turnout: 22,
          absences: 0,
        },
        {
          name: "SERINGAL CAIPORA",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 3,
          turnout: 3,
          absences: 0,
        },
        {
          name: "COMUNIDADE EVANGÉLICA ACURIÁ II",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "COMUNIDADE ORIENTE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "FAZENDA CACHOEIRA",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "FOZ DO BAJE",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 5,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ALDEIA CRUZEIRINHO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE BELFORT",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE REMANSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE TETÉU",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL RESTAURACAO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL TRIUNFO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 32,
      turnout: 32,
      absences: 0,
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
          registeredVoters: 10,
          turnout: 10,
          absences: 0,
        },
        {
          name: "VILA CAMPINAS",
          totalVotes: 10,
          pollingPlaces: 3,
          sections: 11,
          registeredVoters: 10,
          turnout: 10,
          absences: 0,
        },
        {
          name: "CENTRO",
          totalVotes: 2,
          pollingPlaces: 9,
          sections: 29,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL MONTE ALEGRE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 4,
          sections: 7,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "RAMAL NOVO HORIZONTE",
      registeredVoters: 22,
      turnout: 22,
      absences: 0,
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
          registeredVoters: 17,
          turnout: 17,
          absences: 0,
        },
      ],
      topNeighborhood: "Centro",
      registeredVoters: 17,
      turnout: 17,
      absences: 0,
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
          registeredVoters: 10,
          turnout: 10,
          absences: 0,
        },
        {
          name: "ASSENTAMENTO TUPÁ",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "SERINGAL CACHOEIRA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "SIBERIA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "CONSTANTINO MELO SARKIS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "MUTIRAO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL DOIS IRMÃOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL FLORESTA",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL SÃO JOSÉ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "VARIANTE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 14,
      turnout: 14,
      absences: 0,
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
          registeredVoters: 8,
          turnout: 8,
          absences: 0,
        },
        {
          name: "CASCATA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 4,
          turnout: 4,
          absences: 0,
        },
        {
          name: "ALDEIA EXTREMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ALDEIA JATOBÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ALDEIA TRÊS CACHOEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "BELA VISTA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL ICURIÃ",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 12,
      turnout: 12,
      absences: 0,
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
          registeredVoters: 5,
          turnout: 5,
          absences: 0,
        },
        {
          name: "COHAB",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "NAIR ARAUJO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "BELA VISTA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 8,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "CENTRO",
          totalVotes: 1,
          pollingPlaces: 4,
          sections: 22,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ESPERANCA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 8,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ALDEIA MORADA NOVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ALDEIA NOVA OLINDA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ALDEIA PAROA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL BOM FUTURO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SEGUNDO DISTRITO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL BOA VISTA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL BOM PRINCIPIO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL CANADA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL HUMAITA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL NOVO PORTO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL PORTO RUBIM",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CIDADE NOVA",
      registeredVoters: 12,
      turnout: 12,
      absences: 0,
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
          registeredVoters: 7,
          turnout: 7,
          absences: 0,
        },
        {
          name: "COLONIA SAO FRANCISCO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 8,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "VILA GUARANI",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ALTO PARANÁ PENTECOSTES",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE 3 UNIDOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE BELO MONTE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE BOM SOSSEGO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE POYANAWA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE SÃO DOMINGOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE SÃO SALVADOR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "FOZ DO ANIL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SÃO VIDAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL REPUBLICA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 9,
      turnout: 9,
      absences: 0,
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
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "SÃO FRANCISCO",
          totalVotes: 2,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "SÃO JOSÉ",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 8,
          registeredVoters: 2,
          turnout: 2,
          absences: 0,
        },
        {
          name: "ALDEIA BUAÇU",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ANIBAL SARAIVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL ITAÚBA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 6,
      turnout: 6,
      absences: 0,
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
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "COMUNIDADE PUCALPA II",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "FOZ DO PARANA DOS MOURAS",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "PROJETO SÃO PEDRO",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "AGROVILA DO MUJÚ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "Centro",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE 3 BOCAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE CÍCERO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE FORTALEZA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE NOVA CINTRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE PROFETA DO 13 DE MAIO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE SAO JERONIMO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE TORRE DA LUA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "PROJETO SAO PEDRO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL DA MARIANA II",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL DO BATOQUE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "RAMAL DO HAVAÍ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 4,
      turnout: 4,
      absences: 0,
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
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "CENTRO",
          totalVotes: 0,
          pollingPlaces: 3,
          sections: 9,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL ALAGOAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "SERINGAL NOVO PORTO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "Centro",
      registeredVoters: 1,
      turnout: 1,
      absences: 0,
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
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "COMUNIDADE 3 BOCAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE DA REFORMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE ESTIRÃO AZUL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE FORMIGUEIRO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE IRACEMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE MORORÓ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE RAIMUNDO DO VALE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "COMUNIDADE VITÓRIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "FOZ DO RIO GRAJAÚ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 1,
      turnout: 1,
      absences: 0,
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
          registeredVoters: 1,
          turnout: 1,
          absences: 0,
        },
        {
          name: "ALDEIA NOVA FRONTEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ALDEIA NOVO MARINHO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
        {
          name: "ALDEIA SOBRAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 0,
          turnout: 0,
          absences: 0,
        },
      ],
      topNeighborhood: "CENTRO",
      registeredVoters: 1,
      turnout: 1,
      absences: 0,
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
};

const piePalette = [
  "#2563eb",
  "#3b82f6",
  "#60a5fa",
  "#38bdf8",
  "#7dd3fc",
  "#bae6fd",
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

export default function Eleicoes2022Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMunicipality, setActiveMunicipality] = useState<string>(
    electionData.municipalities[0]?.name ?? "",
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const sync = () => setIsMobile(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  const activeData = useMemo(
    () =>
      electionData.municipalities.find(
        (item) => item.name === activeMunicipality,
      ) ?? electionData.municipalities[0],
    [activeMunicipality],
  );

  const donutData = useMemo(
    () =>
      electionData.municipalities
        .slice(0, 6)
        .map((item) => ({ name: item.name, votes: item.totalVotes })),
    [],
  );

  const activeShare = activeData
    ? activeData.totalVotes / Math.max(electionData.summary.totalVotes, 1)
    : 0;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#eff6ff_0%,#dbeafe_100%)] text-slate-900">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-3xl bg-gradient-to-r from-sky-800 via-blue-700 to-cyan-600 px-5 py-6 text-white shadow-[0_24px_80px_-48px_rgba(37,99,235,0.55)] sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-50/90 sm:text-sm">
                Panorama eleitoral responsivo
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {electionData.summary.title}
              </h1>
              <p className="mt-3 text-sm leading-6 text-sky-50 sm:text-base">
                {electionData.summary.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-sky-50 sm:text-sm">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                  {electionData.summary.candidateName}
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                  {electionData.summary.office}
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                  {formatNumber(electionData.summary.totalMunicipalities)}{" "}
                  municípios
                </span>
              </div>
            </div>

            <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-xl">
              {[
                {
                  label: "Votos",
                  value: formatNumber(electionData.summary.totalVotes),
                },
                {
                  label: "Seções",
                  value: formatNumber(electionData.summary.totalSections),
                },
                {
                  label: "Locais",
                  value: formatNumber(electionData.summary.totalPollingPlaces),
                },
                {
                  label: "Maior município",
                  value: electionData.summary.topMunicipality,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-50/90">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-bold text-white sm:text-2xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-sky-100 bg-white p-4 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Distribuição por município
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Concentração territorial de votos
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Os municípios abaixo representam os maiores volumes de votação do
              candidato em 2018.
            </p>

            <div className="mt-5 h-[20rem] sm:h-[24rem]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={electionData.chartData}
                  margin={{
                    top: 10,
                    right: isMobile ? 0 : 8,
                    left: isMobile ? -28 : -12,
                    bottom: isMobile ? 24 : 8,
                  }}
                >
                  <CartesianGrid
                    vertical={false}
                    strokeDasharray="3 3"
                    stroke="#cbd5e1"
                  />
                  <XAxis
                    dataKey="municipality"
                    tickLine={false}
                    axisLine={false}
                    interval={0}
                    angle={isMobile ? -34 : -18}
                    textAnchor="end"
                    height={isMobile ? 86 : 68}
                    tickFormatter={(value) =>
                      truncateLabel(value, isMobile ? 10 : 16)
                    }
                    tick={{ fontSize: isMobile ? 10 : 12, fill: "#475569" }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    width={isMobile ? 30 : 40}
                    tick={{ fontSize: isMobile ? 10 : 12, fill: "#475569" }}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(59,130,246,0.08)" }}
                    contentStyle={{
                      borderRadius: 16,
                      borderColor: "#93c5fd",
                      background: "rgba(255,255,255,0.98)",
                    }}
                  />
                  <Bar dataKey="votes" radius={[10, 10, 0, 0]} fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <aside className="rounded-3xl border border-blue-100 bg-[linear-gradient(180deg,rgba(239,246,255,0.98),rgba(224,242,254,0.98))] p-4 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Síntese geral
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Indicadores consolidados
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {[
                {
                  label: "Média por município",
                  value: formatNumber(
                    electionData.summary.averageVotesPerMunicipality,
                  ),
                },
                {
                  label: "Comparecimento",
                  value: formatNumber(electionData.summary.turnout),
                },
                {
                  label: "Taxa de comparecimento",
                  value: formatPercentage(electionData.summary.turnoutRate),
                },
                {
                  label: "Taxa de abstenção",
                  value: formatPercentage(electionData.summary.absenceRate),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-sky-100 bg-white px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-sky-100 bg-white p-4">
              <h3 className="text-lg font-bold text-slate-900">
                Leitura estratégica
              </h3>
              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <p>
                  <strong className="text-slate-900">Município líder:</strong>{" "}
                  {electionData.summary.topMunicipality}, principal polo de
                  votos da base de 2018.
                </p>
                <p>
                  <strong className="text-slate-900">Município em foco:</strong>{" "}
                  {activeData?.name ?? electionData.summary.topMunicipality}{" "}
                  responde por {formatPercentage(activeShare)} do total apurado.
                </p>
                <p>
                  <strong className="text-slate-900">
                    Bairro de destaque:
                  </strong>{" "}
                  {activeData?.topNeighborhood ?? "Sem bairro"}.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="space-y-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Municípios detalhados
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Página responsiva com foco em leitura móvel
            </h2>
          </div>

          {electionData.municipalities
            .slice(0, 10)
            .map((municipality, index) => {
              const isActive = activeMunicipality === municipality.name;
              const share =
                municipality.totalVotes /
                Math.max(electionData.summary.totalVotes, 1);
              const turnoutRate =
                municipality.registeredVoters > 0
                  ? municipality.turnout / municipality.registeredVoters
                  : 0;
              const tone =
                municipality.totalVotes >= 200
                  ? {
                      label: "Muito forte",
                      className: "text-sky-700 bg-sky-50 border-sky-200",
                      scoreColor: "text-sky-700",
                      icon: <Building2 className="h-5 w-5 text-sky-700" />,
                    }
                  : municipality.totalVotes >= 80
                    ? {
                        label: "Intermediário",
                        className: "text-blue-700 bg-blue-50 border-blue-200",
                        scoreColor: "text-blue-700",
                        icon: <MapPinned className="h-5 w-5 text-blue-700" />,
                      }
                    : {
                        label: "Expansão",
                        className: "text-blue-700 bg-cyan-50 border-cyan-200",
                        scoreColor: "text-blue-700",
                        icon: <Vote className="h-5 w-5 text-blue-700" />,
                      };

              return (
                <article
                  key={municipality.name}
                  className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMunicipality(isActive ? "" : municipality.name)
                    }
                    className="w-full text-left"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                            Município {index + 1}
                          </span>
                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-semibold ${tone.className}`}
                          >
                            {tone.label}
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
                            className={`text-3xl font-bold ${tone.scoreColor}`}
                          >
                            {formatNumber(municipality.totalVotes)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {tone.icon}
                          <ChevronDown
                            className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${isActive ? "rotate-180" : "rotate-0"}`}
                          />
                        </div>
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
                              .map((item, neighborhoodIndex) => {
                                const localShare =
                                  municipality.totalVotes > 0
                                    ? item.totalVotes / municipality.totalVotes
                                    : 0;
                                return (
                                  <div
                                    key={`${municipality.name}-${item.name}`}
                                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                                  >
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                      <div>
                                        <div className="flex items-center gap-2">
                                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                                            {neighborhoodIndex + 1}
                                          </span>
                                          <h4 className="text-base font-bold text-slate-900">
                                            {item.name}
                                          </h4>
                                        </div>
                                        <p className="mt-2 text-sm text-slate-600">
                                          {formatNumber(item.sections)} seções ·{" "}
                                          {formatNumber(item.pollingPlaces)}{" "}
                                          locais
                                        </p>
                                      </div>
                                      <div className="text-left sm:text-right">
                                        <p className="text-2xl font-bold text-sky-700">
                                          {formatNumber(item.totalVotes)}
                                        </p>
                                        <p className="text-sm font-medium text-slate-600">
                                          {formatPercentage(localShare)} do
                                          município
                                        </p>
                                      </div>
                                    </div>
                                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-sky-100">
                                      <div
                                        className="h-full rounded-full bg-gradient-to-r from-sky-600 to-blue-500"
                                        style={{
                                          width: `${Math.max(localShare * 100, 5)}%`,
                                        }}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="rounded-xl border border-sky-100 bg-white p-3 sm:p-4">
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
                                    cursor={{ fill: "rgba(59,130,246,0.08)" }}
                                    contentStyle={{
                                      borderRadius: 12,
                                      borderColor: "#99f6e4",
                                      background: "rgba(255,255,255,0.98)",
                                    }}
                                  />
                                  <Bar
                                    dataKey="votes"
                                    radius={[0, 10, 10, 0]}
                                    fill="#2563eb"
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

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Participação relativa
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Composição dos principais municípios
            </h2>
            <div className="mt-5 h-[18rem] sm:h-[22rem]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      borderRadius: 16,
                      borderColor: "#a5f3fc",
                      background: "rgba(255,255,255,0.98)",
                    }}
                  />
                  <Pie
                    data={donutData}
                    dataKey="votes"
                    nameKey="name"
                    innerRadius={isMobile ? 42 : 58}
                    outerRadius={isMobile ? 72 : 94}
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

          <div className="rounded-3xl border border-blue-100 bg-[linear-gradient(180deg,rgba(236,254,255,0.9),rgba(240,253,250,0.95))] p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Município em foco
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {activeData?.name ?? electionData.summary.topMunicipality}
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-700">
                <TrendingUp className="h-4 w-4" />
                {formatPercentage(activeShare)} do total
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  Votos
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {formatNumber(activeData?.totalVotes ?? 0)}
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  Comparecimento
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {formatPercentage(
                    activeData && activeData.registeredVoters > 0
                      ? activeData.turnout / activeData.registeredVoters
                      : 0,
                  )}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {(activeData?.neighborhoods.slice(0, 5) ?? []).map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-blue-100 bg-white px-4 py-4"
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
                    <strong className="text-lg font-bold text-blue-700">
                      {formatNumber(item.totalVotes)}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
