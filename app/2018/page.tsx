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
    title: "Eleições 2018",
    subtitle:
      "Desempenho de JAMYL ASFURY para deputado federal com consolidação territorial por município e bairro.",
    candidateName: "JAMYL ASFURY",
    office: "DEPUTADO FEDERAL",
    totalMunicipalities: 22,
    totalVotes: 5149,
    totalSections: 1924,
    totalPollingPlaces: 693,
    topMunicipality: "Rio Branco",
    averageVotesPerMunicipality: 234,
    registeredVoters: 547358,
    turnout: 443429,
    absences: 103929,
    turnoutRate: 0.8101260966314551,
    absenceRate: 0.1898739033685449,
  },
  municipalities: [
    {
      name: "Rio Branco",
      totalVotes: 3084,
      pollingPlaces: 253,
      sections: 789,
      registeredVoters: 255361,
      turnout: 211844,
      absences: 43517,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 210,
          pollingPlaces: 28,
          sections: 77,
          registeredVoters: 20575,
          turnout: 17446,
          absences: 3129,
        },
        {
          name: "AEROPORTO VELHO",
          totalVotes: 180,
          pollingPlaces: 9,
          sections: 33,
          registeredVoters: 11100,
          turnout: 9395,
          absences: 1705,
        },
        {
          name: "BOSQUE",
          totalVotes: 153,
          pollingPlaces: 15,
          sections: 40,
          registeredVoters: 12089,
          turnout: 10016,
          absences: 2073,
        },
        {
          name: "6 DE AGOSTO",
          totalVotes: 106,
          pollingPlaces: 4,
          sections: 13,
          registeredVoters: 4387,
          turnout: 3629,
          absences: 758,
        },
        {
          name: "SANTA INES",
          totalVotes: 86,
          pollingPlaces: 4,
          sections: 13,
          registeredVoters: 4447,
          turnout: 3636,
          absences: 811,
        },
        {
          name: "SAO FRANCISCO",
          totalVotes: 82,
          pollingPlaces: 4,
          sections: 16,
          registeredVoters: 5485,
          turnout: 4410,
          absences: 1075,
        },
        {
          name: "CONJUNTO ESPERANCA",
          totalVotes: 76,
          pollingPlaces: 5,
          sections: 17,
          registeredVoters: 6238,
          turnout: 5245,
          absences: 993,
        },
        {
          name: "ESTAÇÃO EXPERIMENTAL",
          totalVotes: 74,
          pollingPlaces: 9,
          sections: 27,
          registeredVoters: 8177,
          turnout: 6926,
          absences: 1251,
        },
        {
          name: "VILA ACRE",
          totalVotes: 72,
          pollingPlaces: 6,
          sections: 19,
          registeredVoters: 6324,
          turnout: 5109,
          absences: 1215,
        },
        {
          name: "BELO JARDIM II",
          totalVotes: 71,
          pollingPlaces: 7,
          sections: 20,
          registeredVoters: 6347,
          turnout: 5061,
          absences: 1286,
        },
        {
          name: "MONTANHÊS",
          totalVotes: 66,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 2842,
          turnout: 2211,
          absences: 631,
        },
        {
          name: "CALAFATE",
          totalVotes: 62,
          pollingPlaces: 5,
          sections: 18,
          registeredVoters: 6237,
          turnout: 4935,
          absences: 1302,
        },
        {
          name: "XAVIER MAIA",
          totalVotes: 61,
          pollingPlaces: 3,
          sections: 18,
          registeredVoters: 6436,
          turnout: 5359,
          absences: 1077,
        },
        {
          name: "AVIARIO",
          totalVotes: 59,
          pollingPlaces: 4,
          sections: 15,
          registeredVoters: 5115,
          turnout: 4308,
          absences: 807,
        },
        {
          name: "BOA UNIÃO",
          totalVotes: 59,
          pollingPlaces: 3,
          sections: 11,
          registeredVoters: 3411,
          turnout: 2835,
          absences: 576,
        },
        {
          name: "TANCREDO NEVES",
          totalVotes: 58,
          pollingPlaces: 4,
          sections: 11,
          registeredVoters: 3546,
          turnout: 2932,
          absences: 614,
        },
        {
          name: "QUINZE",
          totalVotes: 48,
          pollingPlaces: 6,
          sections: 26,
          registeredVoters: 8127,
          turnout: 6876,
          absences: 1251,
        },
        {
          name: "CADEIA VELHA",
          totalVotes: 47,
          pollingPlaces: 2,
          sections: 10,
          registeredVoters: 3503,
          turnout: 2934,
          absences: 569,
        },
        {
          name: "CONJUNTO UNIVERSITÁRIO II",
          totalVotes: 47,
          pollingPlaces: 2,
          sections: 9,
          registeredVoters: 3288,
          turnout: 2856,
          absences: 432,
        },
        {
          name: "TAQUARI",
          totalVotes: 46,
          pollingPlaces: 5,
          sections: 11,
          registeredVoters: 3697,
          turnout: 2868,
          absences: 829,
        },
        {
          name: "PALHERAL",
          totalVotes: 42,
          pollingPlaces: 5,
          sections: 10,
          registeredVoters: 3261,
          turnout: 2725,
          absences: 536,
        },
        {
          name: "VITORIA",
          totalVotes: 39,
          pollingPlaces: 4,
          sections: 7,
          registeredVoters: 2549,
          turnout: 2016,
          absences: 533,
        },
        {
          name: "GLORIA",
          totalVotes: 38,
          pollingPlaces: 1,
          sections: 7,
          registeredVoters: 2037,
          turnout: 1718,
          absences: 319,
        },
        {
          name: "ISAURA PARENTE",
          totalVotes: 37,
          pollingPlaces: 3,
          sections: 11,
          registeredVoters: 3397,
          turnout: 2879,
          absences: 518,
        },
        {
          name: "SOBRAL",
          totalVotes: 37,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1908,
          turnout: 1502,
          absences: 406,
        },
        {
          name: "ALTO ALEGRE",
          totalVotes: 35,
          pollingPlaces: 3,
          sections: 9,
          registeredVoters: 2808,
          turnout: 2317,
          absences: 491,
        },
        {
          name: "CONJUNTO TUCUMÃ II",
          totalVotes: 35,
          pollingPlaces: 2,
          sections: 12,
          registeredVoters: 4100,
          turnout: 3451,
          absences: 649,
        },
        {
          name: "JARDIM EUROPA",
          totalVotes: 35,
          pollingPlaces: 1,
          sections: 7,
          registeredVoters: 2336,
          turnout: 1893,
          absences: 443,
        },
        {
          name: "JARDIM PRIMAVERA",
          totalVotes: 34,
          pollingPlaces: 3,
          sections: 9,
          registeredVoters: 3144,
          turnout: 2631,
          absences: 513,
        },
        {
          name: "JORGE LAVOCAT",
          totalVotes: 34,
          pollingPlaces: 2,
          sections: 6,
          registeredVoters: 2007,
          turnout: 1648,
          absences: 359,
        },
        {
          name: "BAHIA VELHA",
          totalVotes: 33,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1735,
          turnout: 1457,
          absences: 278,
        },
        {
          name: "BOA VISTA",
          totalVotes: 32,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1362,
          turnout: 1152,
          absences: 210,
        },
        {
          name: "GERALDO FLEMING",
          totalVotes: 32,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 2420,
          turnout: 2004,
          absences: 416,
        },
        {
          name: "DISTRITO INDUSTRIAL",
          totalVotes: 31,
          pollingPlaces: 2,
          sections: 10,
          registeredVoters: 3255,
          turnout: 2700,
          absences: 555,
        },
        {
          name: "ABRAÃO ALAB",
          totalVotes: 28,
          pollingPlaces: 3,
          sections: 8,
          registeredVoters: 2573,
          turnout: 2200,
          absences: 373,
        },
        {
          name: "CONJUNTO BELA VISTA",
          totalVotes: 27,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 2044,
          turnout: 1768,
          absences: 276,
        },
        {
          name: "PLACIDO DE CASTRO",
          totalVotes: 27,
          pollingPlaces: 2,
          sections: 5,
          registeredVoters: 1655,
          turnout: 1397,
          absences: 258,
        },
        {
          name: "VILA VERDE",
          totalVotes: 27,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1125,
          turnout: 796,
          absences: 329,
        },
        {
          name: "JOÃO EDUARDO I",
          totalVotes: 25,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 2812,
          turnout: 2339,
          absences: 473,
        },
        {
          name: "MANOEL JULIÃO",
          totalVotes: 25,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 2554,
          turnout: 2123,
          absences: 431,
        },
        {
          name: "NOVA ESPERANCA",
          totalVotes: 25,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1668,
          turnout: 1390,
          absences: 278,
        },
        {
          name: "RAMAL DA PICAREIRA",
          totalVotes: 25,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 409,
          turnout: 360,
          absences: 49,
        },
        {
          name: "RECANTO DOS BURITIS",
          totalVotes: 25,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1670,
          turnout: 1338,
          absences: 332,
        },
        {
          name: "CONJUNTO HABITACIONAL VILA BETEL 2",
          totalVotes: 24,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1484,
          turnout: 1268,
          absences: 216,
        },
        {
          name: "CONJUNTO TUCUMÃ I",
          totalVotes: 23,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1951,
          turnout: 1668,
          absences: 283,
        },
        {
          name: "RAIMUNDO MELO",
          totalVotes: 23,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1818,
          turnout: 1549,
          absences: 269,
        },
        {
          name: "TROPICAL",
          totalVotes: 23,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 2735,
          turnout: 2294,
          absences: 441,
        },
        {
          name: "CONJUNTO GUIOMARD SANTOS",
          totalVotes: 22,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 2396,
          turnout: 2007,
          absences: 389,
        },
        {
          name: "WANDERLEY DANTAS",
          totalVotes: 22,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 2342,
          turnout: 1962,
          absences: 380,
        },
        {
          name: "BAHIA NOVA",
          totalVotes: 19,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1361,
          turnout: 1178,
          absences: 183,
        },
        {
          name: "TRIANGULO VELHO",
          totalVotes: 18,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1451,
          turnout: 1241,
          absences: 210,
        },
        {
          name: "CHICO MENDES",
          totalVotes: 17,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1007,
          turnout: 789,
          absences: 218,
        },
        {
          name: "CONJUNTO TANGARA",
          totalVotes: 17,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 2631,
          turnout: 2282,
          absences: 349,
        },
        {
          name: "FLORESTA SUL",
          totalVotes: 17,
          pollingPlaces: 2,
          sections: 4,
          registeredVoters: 1519,
          turnout: 1279,
          absences: 240,
        },
        {
          name: "JARDIM ELDORADO",
          totalVotes: 17,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1373,
          turnout: 1106,
          absences: 267,
        },
        {
          name: "PLACAS",
          totalVotes: 16,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1541,
          turnout: 1248,
          absences: 293,
        },
        {
          name: "CERAMICA",
          totalVotes: 15,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 2218,
          turnout: 1790,
          absences: 428,
        },
        {
          name: "COMARA",
          totalVotes: 15,
          pollingPlaces: 2,
          sections: 6,
          registeredVoters: 2105,
          turnout: 1687,
          absences: 418,
        },
        {
          name: "CONJUNTO ESPERANÇA II",
          totalVotes: 15,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1589,
          turnout: 1315,
          absences: 274,
        },
        {
          name: "NOVA ESTACAO",
          totalVotes: 15,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1373,
          turnout: 1144,
          absences: 229,
        },
        {
          name: "TRANSACREANA",
          totalVotes: 15,
          pollingPlaces: 4,
          sections: 7,
          registeredVoters: 1815,
          turnout: 1452,
          absences: 363,
        },
        {
          name: "VILA DNER",
          totalVotes: 15,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 1714,
          turnout: 1424,
          absences: 290,
        },
        {
          name: "JOÃO EDUARDO II",
          totalVotes: 14,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 542,
          turnout: 446,
          absences: 96,
        },
        {
          name: "BENFICA",
          totalVotes: 13,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1027,
          turnout: 844,
          absences: 183,
        },
        {
          name: "MASCARENHA DE MORAIS",
          totalVotes: 13,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1811,
          turnout: 1497,
          absences: 314,
        },
        {
          name: "MOCINHA MAGALHÃES",
          totalVotes: 13,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 928,
          turnout: 758,
          absences: 170,
        },
        {
          name: "MORADA DO SOL",
          totalVotes: 13,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1027,
          turnout: 838,
          absences: 189,
        },
        {
          name: "PORTAL DA AMAZÔNIA",
          totalVotes: 13,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 751,
          turnout: 621,
          absences: 130,
        },
        {
          name: "CONQUISTA",
          totalVotes: 12,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1105,
          turnout: 870,
          absences: 235,
        },
        {
          name: "JARDIM NAZLE",
          totalVotes: 12,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 888,
          turnout: 797,
          absences: 91,
        },
        {
          name: "VILA CUSTÓDIO FREIRE",
          totalVotes: 12,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 660,
          turnout: 566,
          absences: 94,
        },
        {
          name: "BAIXA VERDE",
          totalVotes: 11,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 725,
          turnout: 594,
          absences: 131,
        },
        {
          name: "CONJUNTO UNIVERSITARIO",
          totalVotes: 11,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 722,
          turnout: 601,
          absences: 121,
        },
        {
          name: "DA PAZ",
          totalVotes: 11,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 977,
          turnout: 852,
          absences: 125,
        },
        {
          name: "DOM GIOCONDO",
          totalVotes: 11,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 958,
          turnout: 805,
          absences: 153,
        },
        {
          name: "NOVO HORIZONTE",
          totalVotes: 11,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 619,
          turnout: 513,
          absences: 106,
        },
        {
          name: "CIDADE DO POVO",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1718,
          turnout: 1396,
          absences: 322,
        },
        {
          name: "CONJUNTO WALDEMAR MACIEL",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1620,
          turnout: 1329,
          absences: 291,
        },
        {
          name: "RAMAL DA GARAPEIRA",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 513,
          turnout: 456,
          absences: 57,
        },
        {
          name: "VILA IVONETE",
          totalVotes: 10,
          pollingPlaces: 3,
          sections: 7,
          registeredVoters: 1998,
          turnout: 1658,
          absences: 340,
        },
        {
          name: "VILA SANTA CECÍLIA",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1037,
          turnout: 859,
          absences: 178,
        },
        {
          name: "AREAL",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1150,
          turnout: 894,
          absences: 256,
        },
        {
          name: "RAMAL DA CASTANHEIRA",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 863,
          turnout: 720,
          absences: 143,
        },
        {
          name: "RAMAL DA PALHEIRA",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 561,
          turnout: 466,
          absences: 95,
        },
        {
          name: "CIDADE NOVA",
          totalVotes: 8,
          pollingPlaces: 2,
          sections: 6,
          registeredVoters: 1803,
          turnout: 1490,
          absences: 313,
        },
        {
          name: "SANTA QUITERIA",
          totalVotes: 8,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1382,
          turnout: 1158,
          absences: 224,
        },
        {
          name: "APOLONIO SALES",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 684,
          turnout: 574,
          absences: 110,
        },
        {
          name: "CONJUNTO SOLAR",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1750,
          turnout: 1455,
          absences: 295,
        },
        {
          name: "PROCON",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 344,
          turnout: 285,
          absences: 59,
        },
        {
          name: "RUI LINO",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 569,
          turnout: 484,
          absences: 85,
        },
        {
          name: "CANAÃ",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 196,
          turnout: 172,
          absences: 24,
        },
        {
          name: "ADALBERTO SENA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 666,
          turnout: 546,
          absences: 120,
        },
        {
          name: "PREVENTORIO",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 737,
          turnout: 567,
          absences: 170,
        },
        {
          name: "RAMAL DO GURGEL",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 377,
          turnout: 313,
          absences: 64,
        },
        {
          name: "PARQUE SABIÁ",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 446,
          turnout: 330,
          absences: 116,
        },
        {
          name: "RAMAL ITUCUMÃ",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 220,
          turnout: 180,
          absences: 40,
        },
        {
          name: "SANTO AFONSO",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 456,
          turnout: 402,
          absences: 54,
        },
        {
          name: "ALBERT SAMPAIO",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 611,
          turnout: 527,
          absences: 84,
        },
        {
          name: "AYRTON SENA",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1065,
          turnout: 864,
          absences: 201,
        },
        {
          name: "BELO JARDIM I",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 302,
          turnout: 244,
          absences: 58,
        },
        {
          name: "RAMAL CAIPORA",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 420,
          turnout: 318,
          absences: 102,
        },
        {
          name: "BARRO VERMELHO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 273,
          turnout: 230,
          absences: 43,
        },
        {
          name: "COHAB DO BOSQUE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 218,
          turnout: 189,
          absences: 29,
        },
        {
          name: "IPASE",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 227,
          turnout: 188,
          absences: 39,
        },
        {
          name: "ELDORADO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 491,
          turnout: 420,
          absences: 71,
        },
        {
          name: "LIBERDADE",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 424,
          turnout: 353,
          absences: 71,
        },
        {
          name: "WALDEMAR MACIEL",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 342,
          turnout: 289,
          absences: 53,
        },
        {
          name: "RAMAL JARINAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 320,
          turnout: 234,
          absences: 86,
        },
        {
          name: "RAMAL UNIAO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 215,
          turnout: 178,
          absences: 37,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Cruzeiro do Sul",
      totalVotes: 383,
      pollingPlaces: 68,
      sections: 220,
      registeredVoters: 54480,
      turnout: 45577,
      absences: 8903,
      neighborhoods: [
        {
          name: "JOAO ALVES",
          totalVotes: 53,
          pollingPlaces: 3,
          sections: 20,
          registeredVoters: 5279,
          turnout: 4397,
          absences: 882,
        },
        {
          name: "PROJETO SANTA LUZIA",
          totalVotes: 37,
          pollingPlaces: 5,
          sections: 12,
          registeredVoters: 2736,
          turnout: 2250,
          absences: 486,
        },
        {
          name: "AEROPORTO VELHO",
          totalVotes: 33,
          pollingPlaces: 2,
          sections: 12,
          registeredVoters: 3328,
          turnout: 2826,
          absences: 502,
        },
        {
          name: "CENTRO",
          totalVotes: 32,
          pollingPlaces: 12,
          sections: 24,
          registeredVoters: 6094,
          turnout: 5020,
          absences: 1074,
        },
        {
          name: "VARZEA",
          totalVotes: 22,
          pollingPlaces: 2,
          sections: 4,
          registeredVoters: 967,
          turnout: 814,
          absences: 153,
        },
        {
          name: "COMUNIDADE BOA VISTA DA SANTA MARIA",
          totalVotes: 18,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 152,
          turnout: 126,
          absences: 26,
        },
        {
          name: "TELEGRAFO",
          totalVotes: 18,
          pollingPlaces: 3,
          sections: 14,
          registeredVoters: 3456,
          turnout: 2971,
          absences: 485,
        },
        {
          name: "RAMAL DA BURITIRANA",
          totalVotes: 16,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 260,
          turnout: 222,
          absences: 38,
        },
        {
          name: "ELETROACRE",
          totalVotes: 15,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1087,
          turnout: 940,
          absences: 147,
        },
        {
          name: "ESCOLA TECNICA",
          totalVotes: 13,
          pollingPlaces: 3,
          sections: 9,
          registeredVoters: 2152,
          turnout: 1849,
          absences: 303,
        },
        {
          name: "CRUZEIRAO",
          totalVotes: 11,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1095,
          turnout: 903,
          absences: 192,
        },
        {
          name: "ARTUR MAIA",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1432,
          turnout: 1192,
          absences: 240,
        },
        {
          name: "MANOEL TERCAS",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 923,
          turnout: 770,
          absences: 153,
        },
        {
          name: "COBAL",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 7,
          registeredVoters: 1720,
          turnout: 1471,
          absences: 249,
        },
        {
          name: "NOSSA DAS GRACAS",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 942,
          turnout: 789,
          absences: 153,
        },
        {
          name: " SAO JOSE",
          totalVotes: 8,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 814,
          turnout: 676,
          absences: 138,
        },
        {
          name: "MIRITIZAL",
          totalVotes: 8,
          pollingPlaces: 2,
          sections: 11,
          registeredVoters: 2922,
          turnout: 2414,
          absences: 508,
        },
        {
          name: "VILA LAGOINHA",
          totalVotes: 8,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 1744,
          turnout: 1419,
          absences: 325,
        },
        {
          name: "SAO CRISTOVAO",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 657,
          turnout: 564,
          absences: 93,
        },
        {
          name: "VILA SANTA LUZIA",
          totalVotes: 6,
          pollingPlaces: 2,
          sections: 8,
          registeredVoters: 1915,
          turnout: 1655,
          absences: 260,
        },
        {
          name: "VILA SAO PEDRO",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 476,
          turnout: 430,
          absences: 46,
        },
        {
          name: "CANELA FINA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 464,
          turnout: 392,
          absences: 72,
        },
        {
          name: "FLORESTA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1187,
          turnout: 977,
          absences: 210,
        },
        {
          name: "REMANSO",
          totalVotes: 5,
          pollingPlaces: 2,
          sections: 12,
          registeredVoters: 2808,
          turnout: 2324,
          absences: 484,
        },
        {
          name: "LIBERDADE",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1024,
          turnout: 782,
          absences: 242,
        },
        {
          name: "25 DE AGOSTO",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 418,
          turnout: 329,
          absences: 89,
        },
        {
          name: "BOCA DA ALEMANHA",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 949,
          turnout: 819,
          absences: 130,
        },
        {
          name: "SAO JOSE",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 872,
          turnout: 742,
          absences: 130,
        },
        {
          name: "VILA ASSIS BRASIL",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 1641,
          turnout: 1431,
          absences: 210,
        },
        {
          name: "ALUMINIO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 980,
          turnout: 844,
          absences: 136,
        },
        {
          name: "COMUNIDADE VISTA ALEGRE",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 213,
          turnout: 164,
          absences: 49,
        },
        {
          name: "VILA SANTA ROSA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 931,
          turnout: 838,
          absences: 93,
        },
        {
          name: "ALDEIA INDÍGENA CAMPINAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 260,
          turnout: 230,
          absences: 30,
        },
        {
          name: "COMUNIDADE DA PRAINHA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 418,
          turnout: 323,
          absences: 95,
        },
        {
          name: "COMUNIDADE OLIVENÇA RIO JURUÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 262,
          turnout: 208,
          absences: 54,
        },
        {
          name: "COMUNIDADE PERIQUITO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 507,
          turnout: 385,
          absences: 122,
        },
        {
          name: "COMUNIDADE TERRA FIRME DE CIMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 288,
          turnout: 211,
          absences: 77,
        },
        {
          name: "FOZ DO RIO VALPARAIZO - JURUA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 359,
          turnout: 275,
          absences: 84,
        },
        {
          name: "PARANÁ PENTECOSTES",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 238,
          turnout: 201,
          absences: 37,
        },
        {
          name: "RAMAL DA MARIANA I",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 161,
          turnout: 139,
          absences: 22,
        },
        {
          name: "Sem bairro",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 349,
          turnout: 265,
          absences: 84,
        },
      ],
      topNeighborhood: "JOAO ALVES",
    },
    {
      name: "Epitaciolândia",
      totalVotes: 316,
      pollingPlaces: 19,
      sections: 40,
      registeredVoters: 10775,
      turnout: 9243,
      absences: 1532,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 150,
          pollingPlaces: 7,
          sections: 18,
          registeredVoters: 5263,
          turnout: 4514,
          absences: 749,
        },
        {
          name: "AEROPORTO",
          totalVotes: 82,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 1779,
          turnout: 1508,
          absences: 271,
        },
        {
          name: "LIBERDADE",
          totalVotes: 37,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 873,
          turnout: 748,
          absences: 125,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 18,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 377,
          turnout: 331,
          absences: 46,
        },
        {
          name: "SATEL",
          totalVotes: 13,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 562,
          turnout: 468,
          absences: 94,
        },
        {
          name: "COMUNIDADE PRATA",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 279,
          turnout: 243,
          absences: 36,
        },
        {
          name: "LOTEAMENTO CRUZEIRO DO SUL",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 438,
          turnout: 362,
          absences: 76,
        },
        {
          name: "VILA PROGRESSO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 306,
          turnout: 278,
          absences: 28,
        },
        {
          name: "COMUNIDADE GUAJARA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 252,
          turnout: 209,
          absences: 43,
        },
        {
          name: "COMUNIDADE MATO GROSSO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 253,
          turnout: 219,
          absences: 34,
        },
        {
          name: "COMUNIDADE BOA ESPERANÇA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 134,
          turnout: 126,
          absences: 8,
        },
        {
          name: "RAMAL ESPERANÇA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 73,
          turnout: 65,
          absences: 8,
        },
        {
          name: "SERINGAL PORONGABA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 186,
          turnout: 172,
          absences: 14,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Brasiléia",
      totalVotes: 257,
      pollingPlaces: 29,
      sections: 63,
      registeredVoters: 16025,
      turnout: 13435,
      absences: 2590,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 55,
          pollingPlaces: 7,
          sections: 14,
          registeredVoters: 3994,
          turnout: 3344,
          absences: 650,
        },
        {
          name: "FERREIRA DA SILVA",
          totalVotes: 52,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 1839,
          turnout: 1582,
          absences: 257,
        },
        {
          name: "POLO AGROFLORESTAL",
          totalVotes: 26,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 186,
          turnout: 167,
          absences: 19,
        },
        {
          name: "TRES BOTIQUINS",
          totalVotes: 25,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 1400,
          turnout: 1211,
          absences: 189,
        },
        {
          name: "FRANCISCO JOSE MOREIRA",
          totalVotes: 24,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 1522,
          turnout: 1287,
          absences: 235,
        },
        {
          name: "ELDORADO",
          totalVotes: 22,
          pollingPlaces: 2,
          sections: 6,
          registeredVoters: 1512,
          turnout: 1255,
          absences: 257,
        },
        {
          name: "ESTRADA DO PACIFICO",
          totalVotes: 16,
          pollingPlaces: 3,
          sections: 5,
          registeredVoters: 1389,
          turnout: 1134,
          absences: 255,
        },
        {
          name: "ELADORADO",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 805,
          turnout: 692,
          absences: 113,
        },
        {
          name: "RAIMUNDO CHAAR",
          totalVotes: 9,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 529,
          turnout: 451,
          absences: 78,
        },
        {
          name: "Sem bairro",
          totalVotes: 8,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 554,
          turnout: 441,
          absences: 113,
        },
        {
          name: "CHICO LEAL",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 513,
          turnout: 444,
          absences: 69,
        },
        {
          name: "LEONARDO BARBOSA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 875,
          turnout: 708,
          absences: 167,
        },
        {
          name: "COMUNIDADE LUA NOVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 310,
          turnout: 231,
          absences: 79,
        },
        {
          name: "RAMAL SANTA HELENA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 106,
          turnout: 92,
          absences: 14,
        },
        {
          name: "RAMAL SANTA LUZIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 128,
          turnout: 110,
          absences: 18,
        },
        {
          name: "RESERVA CHICO MENDES",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 141,
          turnout: 100,
          absences: 41,
        },
        {
          name: "SERINGAL ETELVE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 222,
          turnout: 186,
          absences: 36,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Tarauacá",
      totalVotes: 179,
      pollingPlaces: 28,
      sections: 93,
      registeredVoters: 25560,
      turnout: 18202,
      absences: 7358,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 127,
          pollingPlaces: 13,
          sections: 57,
          registeredVoters: 16730,
          turnout: 11856,
          absences: 4874,
        },
        {
          name: "COMUNIDADE DOM JOACIR",
          totalVotes: 11,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 110,
          turnout: 71,
          absences: 39,
        },
        {
          name: "SENADOR POMPEU",
          totalVotes: 11,
          pollingPlaces: 1,
          sections: 7,
          registeredVoters: 2043,
          turnout: 1410,
          absences: 633,
        },
        {
          name: "COPACABANA",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1172,
          turnout: 840,
          absences: 332,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1196,
          turnout: 876,
          absences: 320,
        },
        {
          name: "LIBERDADE",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 422,
          turnout: 299,
          absences: 123,
        },
        {
          name: "TRIÂNGULO",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 975,
          turnout: 694,
          absences: 281,
        },
        {
          name: "AVELINO LEAL",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 491,
          turnout: 389,
          absences: 102,
        },
        {
          name: "CORCOVADO",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 835,
          turnout: 652,
          absences: 183,
        },
        {
          name: "SERINGAL PARAÍSO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 349,
          turnout: 252,
          absences: 97,
        },
        {
          name: "ALDEIA CAUCHO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 272,
          turnout: 226,
          absences: 46,
        },
        {
          name: "ALDEIA INDÍGENA NOVA ESPERANÇA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 196,
          turnout: 153,
          absences: 43,
        },
        {
          name: "ALDEIA INDÍGENA PRAIA DO CARAPANÃ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 283,
          turnout: 164,
          absences: 119,
        },
        {
          name: "ALDEIA SÃO VICENTE, RIO HUMAITÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 150,
          turnout: 92,
          absences: 58,
        },
        {
          name: "SERINGAL INDEPENDENCIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 76,
          turnout: 52,
          absences: 24,
        },
        {
          name: "Sem bairro",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 260,
          turnout: 176,
          absences: 84,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Plácido de Castro",
      totalVotes: 170,
      pollingPlaces: 20,
      sections: 52,
      registeredVoters: 11453,
      turnout: 9911,
      absences: 1542,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 51,
          pollingPlaces: 9,
          sections: 29,
          registeredVoters: 6635,
          turnout: 5714,
          absences: 921,
        },
        {
          name: "RAMAL NOVO HORIZONTE",
          totalVotes: 51,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 384,
          turnout: 345,
          absences: 39,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 35,
          pollingPlaces: 5,
          sections: 8,
          registeredVoters: 1783,
          turnout: 1535,
          absences: 248,
        },
        {
          name: "VILA CAMPINAS",
          totalVotes: 31,
          pollingPlaces: 3,
          sections: 11,
          registeredVoters: 2253,
          turnout: 2003,
          absences: 250,
        },
        {
          name: "Sem bairro",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 284,
          turnout: 224,
          absences: 60,
        },
        {
          name: "RAMAL MONTE ALEGRE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 114,
          turnout: 90,
          absences: 24,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Xapuri",
      totalVotes: 125,
      pollingPlaces: 18,
      sections: 49,
      registeredVoters: 11399,
      turnout: 9567,
      absences: 1832,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 82,
          pollingPlaces: 7,
          sections: 32,
          registeredVoters: 7577,
          turnout: 6332,
          absences: 1245,
        },
        {
          name: "SERINGAL CACHOEIRA",
          totalVotes: 28,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 397,
          turnout: 353,
          absences: 44,
        },
        {
          name: "VARIANTE",
          totalVotes: 8,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 530,
          turnout: 446,
          absences: 84,
        },
        {
          name: "CONSTANTINO MELO SARKIS",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 361,
          turnout: 288,
          absences: 73,
        },
        {
          name: "MUTIRAO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 433,
          turnout: 372,
          absences: 61,
        },
        {
          name: "Sem bairro",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 214,
          turnout: 183,
          absences: 31,
        },
        {
          name: "SERINGAL SÃO JOSÉ",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 134,
          turnout: 117,
          absences: 17,
        },
        {
          name: "ASSENTAMENTO TUPÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 210,
          turnout: 171,
          absences: 39,
        },
        {
          name: "SERINGAL DOIS IRMÃOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 152,
          turnout: 134,
          absences: 18,
        },
        {
          name: "SERINGAL FLORESTA",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 393,
          turnout: 341,
          absences: 52,
        },
        {
          name: "SIBERIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 998,
          turnout: 830,
          absences: 168,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Acrelândia",
      totalVotes: 92,
      pollingPlaces: 13,
      sections: 41,
      registeredVoters: 8808,
      turnout: 7260,
      absences: 1548,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 46,
          pollingPlaces: 7,
          sections: 26,
          registeredVoters: 5864,
          turnout: 4820,
          absences: 1044,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 29,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 924,
          turnout: 748,
          absences: 176,
        },
        {
          name: "RAMAL PROGRESSO",
          totalVotes: 8,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 100,
          turnout: 82,
          absences: 18,
        },
        {
          name: "RAMAL GRANADA",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 988,
          turnout: 840,
          absences: 148,
        },
        {
          name: "VILA REDENCAO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 550,
          turnout: 454,
          absences: 96,
        },
        {
          name: "PORTO LUIZ I",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 243,
          turnout: 198,
          absences: 45,
        },
        {
          name: "RAMAL DO PELE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 139,
          turnout: 118,
          absences: 21,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Senador Guiomard",
      totalVotes: 82,
      pollingPlaces: 30,
      sections: 73,
      registeredVoters: 17102,
      turnout: 14604,
      absences: 2498,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 43,
          pollingPlaces: 11,
          sections: 32,
          registeredVoters: 7459,
          turnout: 6298,
          absences: 1161,
        },
        {
          name: "TRIUNFO",
          totalVotes: 14,
          pollingPlaces: 2,
          sections: 9,
          registeredVoters: 2436,
          turnout: 2049,
          absences: 387,
        },
        {
          name: "CONJUNTO QUINARI",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 6,
          registeredVoters: 1442,
          turnout: 1261,
          absences: 181,
        },
        {
          name: "DEMOCRACIA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 536,
          turnout: 459,
          absences: 77,
        },
        {
          name: "RAMAL NOVA ALDEIA",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 534,
          turnout: 478,
          absences: 56,
        },
        {
          name: "SAO FRANCISCO",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 443,
          turnout: 363,
          absences: 80,
        },
        {
          name: "RAMAL SANTA MARIA",
          totalVotes: 3,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 485,
          turnout: 433,
          absences: 52,
        },
        {
          name: "18 DE SETEMBRO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 954,
          turnout: 795,
          absences: 159,
        },
        {
          name: "JARDIM BOTANICO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 333,
          turnout: 292,
          absences: 41,
        },
        {
          name: "RAMAL AREIA BRANCA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 190,
          turnout: 164,
          absences: 26,
        },
        {
          name: "MUFUMBO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 134,
          turnout: 125,
          absences: 9,
        },
        {
          name: "PA LIMEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 429,
          turnout: 386,
          absences: 43,
        },
        {
          name: "PSDA BONAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 492,
          turnout: 426,
          absences: 66,
        },
        {
          name: "RAMAL NABOR JUNIOR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 449,
          turnout: 390,
          absences: 59,
        },
        {
          name: "RAMAL OCO DO MUNDO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 68,
          turnout: 61,
          absences: 7,
        },
        {
          name: "RAMAL PROGRESSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 267,
          turnout: 221,
          absences: 46,
        },
        {
          name: "VILA PIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 271,
          turnout: 240,
          absences: 31,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 180,
          turnout: 163,
          absences: 17,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Porto Acre",
      totalVotes: 77,
      pollingPlaces: 17,
      sections: 51,
      registeredVoters: 12324,
      turnout: 10409,
      absences: 1915,
      neighborhoods: [
        {
          name: "Sem bairro",
          totalVotes: 77,
          pollingPlaces: 17,
          sections: 51,
          registeredVoters: 12324,
          turnout: 10409,
          absences: 1915,
        },
      ],
      topNeighborhood: "Sem bairro",
    },
    {
      name: "Feijó",
      totalVotes: 59,
      pollingPlaces: 23,
      sections: 81,
      registeredVoters: 20547,
      turnout: 14573,
      absences: 5974,
      neighborhoods: [
        {
          name: "CIDADE NOVA",
          totalVotes: 23,
          pollingPlaces: 2,
          sections: 16,
          registeredVoters: 4386,
          turnout: 3179,
          absences: 1207,
        },
        {
          name: "CENTRO",
          totalVotes: 15,
          pollingPlaces: 4,
          sections: 22,
          registeredVoters: 5686,
          turnout: 3869,
          absences: 1817,
        },
        {
          name: "NAIR ARAUJO",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 977,
          turnout: 761,
          absences: 216,
        },
        {
          name: "BELA VISTA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 8,
          registeredVoters: 2126,
          turnout: 1590,
          absences: 536,
        },
        {
          name: "ESPERANCA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 8,
          registeredVoters: 2188,
          turnout: 1611,
          absences: 577,
        },
        {
          name: "COHAB",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 989,
          turnout: 736,
          absences: 253,
        },
        {
          name: "SEGUNDO DISTRITO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 911,
          turnout: 656,
          absences: 255,
        },
        {
          name: "ALDEIA MORADA NOVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 279,
          turnout: 235,
          absences: 44,
        },
        {
          name: "ALDEIA NOVA OLINDA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 202,
          turnout: 148,
          absences: 54,
        },
        {
          name: "ALDEIA PAROA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 242,
          turnout: 213,
          absences: 29,
        },
        {
          name: "RAMAL BOM FUTURO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 143,
          turnout: 109,
          absences: 34,
        },
        {
          name: "SERINGAL BOA VISTA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 254,
          turnout: 179,
          absences: 75,
        },
        {
          name: "SERINGAL BOM PRINCIPIO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 107,
          turnout: 71,
          absences: 36,
        },
        {
          name: "SERINGAL CANADA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 290,
          turnout: 209,
          absences: 81,
        },
        {
          name: "SERINGAL FAZENDA CALIFORNIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 317,
          turnout: 118,
          absences: 199,
        },
        {
          name: "SERINGAL HUMAITA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 388,
          turnout: 224,
          absences: 164,
        },
        {
          name: "SERINGAL NOVO PORTO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 317,
          turnout: 203,
          absences: 114,
        },
        {
          name: "SERINGAL PORTO RUBIM",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 356,
          turnout: 165,
          absences: 191,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 389,
          turnout: 297,
          absences: 92,
        },
      ],
      topNeighborhood: "CIDADE NOVA",
    },
    {
      name: "Santa Rosa do Purus",
      totalVotes: 56,
      pollingPlaces: 6,
      sections: 12,
      registeredVoters: 3328,
      turnout: 2342,
      absences: 986,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 55,
          pollingPlaces: 3,
          sections: 8,
          registeredVoters: 2125,
          turnout: 1497,
          absences: 628,
        },
        {
          name: "ALDEIA NOVO MARINHO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 342,
          turnout: 242,
          absences: 100,
        },
        {
          name: "ALDEIA NOVA FRONTEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 558,
          turnout: 377,
          absences: 181,
        },
        {
          name: "ALDEIA SOBRAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 303,
          turnout: 226,
          absences: 77,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Assis Brasil",
      totalVotes: 47,
      pollingPlaces: 11,
      sections: 22,
      registeredVoters: 5727,
      turnout: 4592,
      absences: 1135,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 20,
          pollingPlaces: 3,
          sections: 9,
          registeredVoters: 2472,
          turnout: 1975,
          absences: 497,
        },
        {
          name: "CASCATA",
          totalVotes: 10,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 927,
          turnout: 763,
          absences: 164,
        },
        {
          name: "SERINGAL SÃO FRANCISCO",
          totalVotes: 8,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 68,
          turnout: 52,
          absences: 16,
        },
        {
          name: "BELA VISTA",
          totalVotes: 7,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 737,
          turnout: 576,
          absences: 161,
        },
        {
          name: "Sem bairro",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 558,
          turnout: 449,
          absences: 109,
        },
        {
          name: "ALDEIA EXTREMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 126,
          turnout: 110,
          absences: 16,
        },
        {
          name: "ALDEIA JATOBÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 236,
          turnout: 181,
          absences: 55,
        },
        {
          name: "ALDEIA TRÊS CACHOEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 114,
          turnout: 66,
          absences: 48,
        },
        {
          name: "SERINGAL ICURIÃ",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 489,
          turnout: 420,
          absences: 69,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Sena Madureira",
      totalVotes: 45,
      pollingPlaces: 42,
      sections: 98,
      registeredVoters: 28313,
      turnout: 20533,
      absences: 7780,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 17,
          pollingPlaces: 18,
          sections: 49,
          registeredVoters: 14647,
          turnout: 10516,
          absences: 4131,
        },
        {
          name: "DA PISTA",
          totalVotes: 11,
          pollingPlaces: 3,
          sections: 8,
          registeredVoters: 2332,
          turnout: 1607,
          absences: 725,
        },
        {
          name: "NITERÓI",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 709,
          turnout: 538,
          absences: 171,
        },
        {
          name: "CSU",
          totalVotes: 2,
          pollingPlaces: 3,
          sections: 7,
          registeredVoters: 1887,
          turnout: 1369,
          absences: 518,
        },
        {
          name: "ANA VIEIRA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1255,
          turnout: 864,
          absences: 391,
        },
        {
          name: "BOSQUE",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 401,
          turnout: 307,
          absences: 94,
        },
        {
          name: "EUGENIO AREAL",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 635,
          turnout: 468,
          absences: 167,
        },
        {
          name: "SERINGAL NOVA OLINDA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 287,
          turnout: 204,
          absences: 83,
        },
        {
          name: "Sem bairro",
          totalVotes: 1,
          pollingPlaces: 3,
          sections: 3,
          registeredVoters: 661,
          turnout: 509,
          absences: 152,
        },
        {
          name: "VITORIA",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 821,
          turnout: 616,
          absences: 205,
        },
        {
          name: "BOM SUCESSO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 1004,
          turnout: 764,
          absences: 240,
        },
        {
          name: "CIDADE NOVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 649,
          turnout: 492,
          absences: 157,
        },
        {
          name: "COMUNIDADE CAZUMBÁ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 276,
          turnout: 239,
          absences: 37,
        },
        {
          name: "COMUNIDADE LUA NOVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 137,
          turnout: 109,
          absences: 28,
        },
        {
          name: "CRISTO LIBERTADOR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 580,
          turnout: 402,
          absences: 178,
        },
        {
          name: "ESTRADA XIBUREMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 73,
          turnout: 73,
          absences: 0,
        },
        {
          name: "PROJETO JOAQUIM DE MATOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 339,
          turnout: 258,
          absences: 81,
        },
        {
          name: "SERINGAL RECIFE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 429,
          turnout: 336,
          absences: 93,
        },
        {
          name: "VILA MILITAR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1191,
          turnout: 862,
          absences: 329,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Marechal Thaumaturgo",
      totalVotes: 33,
      pollingPlaces: 16,
      sections: 34,
      registeredVoters: 9540,
      turnout: 7061,
      absences: 2479,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 25,
          pollingPlaces: 4,
          sections: 16,
          registeredVoters: 4709,
          turnout: 3462,
          absences: 1247,
        },
        {
          name: "SERINGAL TRIUNFO",
          totalVotes: 3,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 568,
          turnout: 456,
          absences: 112,
        },
        {
          name: "COMUNIDADE EVANGÉLICA ACURIÁ II",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 448,
          turnout: 347,
          absences: 101,
        },
        {
          name: "COMUNIDADE REMANSO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 313,
          turnout: 231,
          absences: 82,
        },
        {
          name: "FOZ DO BAJE",
          totalVotes: 1,
          pollingPlaces: 2,
          sections: 4,
          registeredVoters: 946,
          turnout: 683,
          absences: 263,
        },
        {
          name: "ALDEIA CRUZEIRINHO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 223,
          turnout: 108,
          absences: 115,
        },
        {
          name: "COMUNIDADE BELFORT",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 481,
          turnout: 366,
          absences: 115,
        },
        {
          name: "COMUNIDADE ORIENTE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 235,
          turnout: 196,
          absences: 39,
        },
        {
          name: "COMUNIDADE TETÉU",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 320,
          turnout: 215,
          absences: 105,
        },
        {
          name: "FAZENDA CACHOEIRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 171,
          turnout: 127,
          absences: 44,
        },
        {
          name: "SERINGAL CAIPORA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 302,
          turnout: 204,
          absences: 98,
        },
        {
          name: "SERINGAL RESTAURACAO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 824,
          turnout: 666,
          absences: 158,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Mâncio Lima",
      totalVotes: 30,
      pollingPlaces: 20,
      sections: 44,
      registeredVoters: 12424,
      turnout: 9748,
      absences: 2676,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 18,
          pollingPlaces: 8,
          sections: 16,
          registeredVoters: 4621,
          turnout: 3560,
          absences: 1061,
        },
        {
          name: "VILA GUARANI",
          totalVotes: 6,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1450,
          turnout: 1186,
          absences: 264,
        },
        {
          name: "SÃO VIDAL",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 4,
          registeredVoters: 1240,
          turnout: 968,
          absences: 272,
        },
        {
          name: "COLONIA SAO FRANCISCO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 7,
          registeredVoters: 2104,
          turnout: 1663,
          absences: 441,
        },
        {
          name: "COMUNIDADE BELO MONTE",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 214,
          turnout: 161,
          absences: 53,
        },
        {
          name: "ALTO PARANÁ PENTECOSTES",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 637,
          turnout: 537,
          absences: 100,
        },
        {
          name: "COMUNIDADE 3 UNIDOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 160,
          turnout: 112,
          absences: 48,
        },
        {
          name: "COMUNIDADE BOM SOSSEGO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 278,
          turnout: 195,
          absences: 83,
        },
        {
          name: "COMUNIDADE POYANAWA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 405,
          turnout: 370,
          absences: 35,
        },
        {
          name: "COMUNIDADE SÃO DOMINGOS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 190,
          turnout: 175,
          absences: 15,
        },
        {
          name: "COMUNIDADE SÃO SALVADOR",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 491,
          turnout: 343,
          absences: 148,
        },
        {
          name: "FOZ DO ANIL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 196,
          turnout: 153,
          absences: 43,
        },
        {
          name: "SERINGAL REPUBLICA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 438,
          turnout: 325,
          absences: 113,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Capixaba",
      totalVotes: 29,
      pollingPlaces: 12,
      sections: 30,
      registeredVoters: 6829,
      turnout: 5851,
      absences: 978,
      neighborhoods: [
        {
          name: "Sem bairro",
          totalVotes: 29,
          pollingPlaces: 12,
          sections: 30,
          registeredVoters: 6829,
          turnout: 5851,
          absences: 978,
        },
      ],
      topNeighborhood: "Sem bairro",
    },
    {
      name: "Manoel Urbano",
      totalVotes: 28,
      pollingPlaces: 9,
      sections: 23,
      registeredVoters: 6788,
      turnout: 4926,
      absences: 1862,
      neighborhoods: [
        {
          name: "SÃO JOSÉ",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1565,
          turnout: 1116,
          absences: 449,
        },
        {
          name: "SÃO FRANCISCO",
          totalVotes: 8,
          pollingPlaces: 2,
          sections: 7,
          registeredVoters: 2032,
          turnout: 1479,
          absences: 553,
        },
        {
          name: "CENTRO",
          totalVotes: 6,
          pollingPlaces: 3,
          sections: 7,
          registeredVoters: 2362,
          turnout: 1715,
          absences: 647,
        },
        {
          name: "ANIBAL SARAIVA",
          totalVotes: 5,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 561,
          turnout: 404,
          absences: 157,
        },
        {
          name: "ALDEIA BUAÇU",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 184,
          turnout: 139,
          absences: 45,
        },
        {
          name: "SERINGAL ITAÚBA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 84,
          turnout: 73,
          absences: 11,
        },
      ],
      topNeighborhood: "SÃO JOSÉ",
    },
    {
      name: "Bujari",
      totalVotes: 25,
      pollingPlaces: 9,
      sections: 27,
      registeredVoters: 8684,
      turnout: 6993,
      absences: 1691,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 16,
          pollingPlaces: 5,
          sections: 19,
          registeredVoters: 6308,
          turnout: 5209,
          absences: 1099,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 9,
          pollingPlaces: 1,
          sections: 5,
          registeredVoters: 1427,
          turnout: 1096,
          absences: 331,
        },
        {
          name: "PROJETO ANTIMARI",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 201,
          turnout: 123,
          absences: 78,
        },
        {
          name: "RAMAL DO ESPINHARA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 397,
          turnout: 308,
          absences: 89,
        },
        {
          name: "RAMAL LINHA NOVA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 351,
          turnout: 257,
          absences: 94,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Rodrigues Alves",
      totalVotes: 21,
      pollingPlaces: 21,
      sections: 42,
      registeredVoters: 11008,
      turnout: 8528,
      absences: 2480,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 15,
          pollingPlaces: 5,
          sections: 19,
          registeredVoters: 5301,
          turnout: 3989,
          absences: 1312,
        },
        {
          name: "FOZ DO PARANA DOS MOURAS",
          totalVotes: 4,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 718,
          turnout: 584,
          absences: 134,
        },
        {
          name: "COMUNIDADE PROFETA DO 13 DE MAIO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 616,
          turnout: 492,
          absences: 124,
        },
        {
          name: "COMUNIDADE SAO JERONIMO",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 537,
          turnout: 411,
          absences: 126,
        },
        {
          name: "AGROVILA DO MUJÚ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 286,
          turnout: 243,
          absences: 43,
        },
        {
          name: "COMUNIDADE 3 BOCAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 183,
          turnout: 119,
          absences: 64,
        },
        {
          name: "COMUNIDADE CÍCERO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 321,
          turnout: 257,
          absences: 64,
        },
        {
          name: "COMUNIDADE FORTALEZA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 174,
          turnout: 150,
          absences: 24,
        },
        {
          name: "COMUNIDADE NOVA CINTRA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 3,
          registeredVoters: 837,
          turnout: 718,
          absences: 119,
        },
        {
          name: "COMUNIDADE PUCALPA II",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 287,
          turnout: 226,
          absences: 61,
        },
        {
          name: "COMUNIDADE TORRE DA LUA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 247,
          turnout: 201,
          absences: 46,
        },
        {
          name: "PROJETO SAO PEDRO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 324,
          turnout: 250,
          absences: 74,
        },
        {
          name: "PROJETO SÃO PEDRO",
          totalVotes: 0,
          pollingPlaces: 2,
          sections: 2,
          registeredVoters: 468,
          turnout: 363,
          absences: 105,
        },
        {
          name: "RAMAL DA MARIANA II",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 179,
          turnout: 146,
          absences: 33,
        },
        {
          name: "RAMAL DO BATOQUE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 286,
          turnout: 179,
          absences: 107,
        },
        {
          name: "RAMAL DO HAVAÍ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 244,
          turnout: 200,
          absences: 44,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Porto Walter",
      totalVotes: 10,
      pollingPlaces: 13,
      sections: 23,
      registeredVoters: 6089,
      turnout: 4649,
      absences: 1440,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 7,
          pollingPlaces: 4,
          sections: 13,
          registeredVoters: 4100,
          turnout: 3111,
          absences: 989,
        },
        {
          name: "COMUNIDADE FORMIGUEIRO",
          totalVotes: 2,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 158,
          turnout: 113,
          absences: 45,
        },
        {
          name: "FOZ DO RIO GRAJAÚ",
          totalVotes: 1,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 314,
          turnout: 226,
          absences: 88,
        },
        {
          name: "COMUNIDADE 3 BOCAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 120,
          turnout: 89,
          absences: 31,
        },
        {
          name: "COMUNIDADE DA REFORMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 315,
          turnout: 213,
          absences: 102,
        },
        {
          name: "COMUNIDADE ESTIRÃO AZUL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 96,
          turnout: 79,
          absences: 17,
        },
        {
          name: "COMUNIDADE IRACEMA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 95,
          turnout: 75,
          absences: 20,
        },
        {
          name: "COMUNIDADE MORORÓ",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 412,
          turnout: 343,
          absences: 69,
        },
        {
          name: "COMUNIDADE RAIMUNDO DO VALE",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 239,
          turnout: 195,
          absences: 44,
        },
        {
          name: "COMUNIDADE VITÓRIA",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 240,
          turnout: 205,
          absences: 35,
        },
      ],
      topNeighborhood: "CENTRO",
    },
    {
      name: "Jordão",
      totalVotes: 1,
      pollingPlaces: 6,
      sections: 17,
      registeredVoters: 4794,
      turnout: 3581,
      absences: 1213,
      neighborhoods: [
        {
          name: "CENTRO",
          totalVotes: 1,
          pollingPlaces: 3,
          sections: 12,
          registeredVoters: 3464,
          turnout: 2638,
          absences: 826,
        },
        {
          name: "SERINGAL ALAGOAS",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 441,
          turnout: 315,
          absences: 126,
        },
        {
          name: "SERINGAL NOVO PORTO",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 1,
          registeredVoters: 397,
          turnout: 263,
          absences: 134,
        },
        {
          name: "ZONA RURAL",
          totalVotes: 0,
          pollingPlaces: 1,
          sections: 2,
          registeredVoters: 492,
          turnout: 365,
          absences: 127,
        },
      ],
      topNeighborhood: "CENTRO",
    },
  ],
  chartData: [
    {
      municipality: "Rio Branco",
      votes: 3084,
    },
    {
      municipality: "Cruzeiro do Sul",
      votes: 383,
    },
    {
      municipality: "Epitaciolândia",
      votes: 316,
    },
    {
      municipality: "Brasiléia",
      votes: 257,
    },
    {
      municipality: "Tarauacá",
      votes: 179,
    },
    {
      municipality: "Plácido de Castro",
      votes: 170,
    },
    {
      municipality: "Xapuri",
      votes: 125,
    },
    {
      municipality: "Acrelândia",
      votes: 92,
    },
  ],
};

const piePalette = [
  "#0f766e",
  "#0ea5a4",
  "#14b8a6",
  "#06b6d4",
  "#22d3ee",
  "#67e8f9",
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

export default function Eleicoes2018Page() {
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
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f3faf8_0%,#e6f4f1_100%)] text-slate-900">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-3xl bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 px-5 py-6 text-white shadow-[0_24px_80px_-48px_rgba(13,148,136,0.65)] sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-50/90 sm:text-sm">
                Panorama eleitoral responsivo
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {electionData.summary.title}
              </h1>
              <p className="mt-3 text-sm leading-6 text-teal-50 sm:text-base">
                {electionData.summary.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-teal-50 sm:text-sm">
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
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-50/90">
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
          <div className="rounded-3xl border border-teal-100 bg-white p-4 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
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
                    cursor={{ fill: "rgba(20,184,166,0.08)" }}
                    contentStyle={{
                      borderRadius: 16,
                      borderColor: "#99f6e4",
                      background: "rgba(255,255,255,0.98)",
                    }}
                  />
                  <Bar dataKey="votes" radius={[10, 10, 0, 0]} fill="#0f766e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <aside className="rounded-3xl border border-cyan-100 bg-[linear-gradient(180deg,rgba(236,254,255,0.95),rgba(240,253,250,0.98))] p-4 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
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
                  className="rounded-2xl border border-teal-100 bg-white px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-teal-100 bg-white p-4">
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
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
                      className:
                        "text-emerald-700 bg-emerald-50 border-emerald-200",
                      scoreColor: "text-emerald-700",
                      icon: <Building2 className="h-5 w-5 text-emerald-700" />,
                    }
                  : municipality.totalVotes >= 80
                    ? {
                        label: "Intermediário",
                        className:
                          "text-amber-700 bg-amber-50 border-amber-200",
                        scoreColor: "text-amber-700",
                        icon: <MapPinned className="h-5 w-5 text-amber-700" />,
                      }
                    : {
                        label: "Expansão",
                        className: "text-cyan-700 bg-cyan-50 border-cyan-200",
                        scoreColor: "text-cyan-700",
                        icon: <Vote className="h-5 w-5 text-cyan-700" />,
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
                          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
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
                                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
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
                                        <p className="text-2xl font-bold text-teal-700">
                                          {formatNumber(item.totalVotes)}
                                        </p>
                                        <p className="text-sm font-medium text-slate-600">
                                          {formatPercentage(localShare)} do
                                          município
                                        </p>
                                      </div>
                                    </div>
                                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-teal-100">
                                      <div
                                        className="h-full rounded-full bg-gradient-to-r from-teal-600 to-cyan-500"
                                        style={{
                                          width: `${Math.max(localShare * 100, 5)}%`,
                                        }}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="rounded-xl border border-teal-100 bg-white p-3 sm:p-4">
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
                                    cursor={{ fill: "rgba(20,184,166,0.08)" }}
                                    contentStyle={{
                                      borderRadius: 12,
                                      borderColor: "#99f6e4",
                                      background: "rgba(255,255,255,0.98)",
                                    }}
                                  />
                                  <Bar
                                    dataKey="votes"
                                    radius={[0, 10, 10, 0]}
                                    fill="#0f766e"
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
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

          <div className="rounded-3xl border border-cyan-100 bg-[linear-gradient(180deg,rgba(236,254,255,0.9),rgba(240,253,250,0.95))] p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Município em foco
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {activeData?.name ?? electionData.summary.topMunicipality}
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1.5 text-sm font-semibold text-cyan-700">
                <TrendingUp className="h-4 w-4" />
                {formatPercentage(activeShare)} do total
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-100 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Votos
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {formatNumber(activeData?.totalVotes ?? 0)}
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-100 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
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
                  className="rounded-2xl border border-cyan-100 bg-white px-4 py-4"
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
                    <strong className="text-lg font-bold text-cyan-700">
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
