import { FaJsSquare } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaRuby } from 'react-icons/fa';
import { FaSwift } from 'react-icons/fa';
import { FaRust } from 'react-icons/fa';
import { FaRProject } from 'react-icons/fa';
import {
  FaPerl,
  FaDatabase,
  FaApple,
  FaTerminal,
  FaMicrosoft,
  FaCalculator,
  FaCode,
  FaLambda,
  FaHeart,
  FaPuzzlePiece,
  FaMicrochip,
  FaMobileAlt,
  FaLeaf,
  FaServer,
  FaGem,
} from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { FaErlang } from 'react-icons/fa';
import { FaClojure } from 'react-icons/fa';
import { FaEmber } from 'react-icons/fa';
import { DiFsharp } from 'react-icons/di';
import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiDart,
  SiLua,
  SiReact,
  SiScala,
  SiTypescript,
  SiKotlin,
} from 'react-icons/si';

const languages = {
  javascript: <FaJsSquare size={64} color="#f7df1e" />,
  html: <FaHtml5 size={64} color="#e34f26" />,
  css: <FaCss3Alt size={64} color="#1572b6" />,
  python: <FaPython size={64} color="#3776ab" />,
  java: <FaJava size={64} color="#007396" />,
  csharp: <SiCsharp size={64} color="#239120" />,
  php: <FaPhp size={64} color="#8892bf" />,
  ruby: <FaRuby size={64} color="#cc342d" />,
  swift: <FaSwift size={64} color="#f05138" />,
  typescript: <SiTypescript size={64} color="#007acc" />,
  rust: <FaRust size={64} color="#000000" />,
  kotlin: <SiKotlin size={64} color="#7f52ff" />,
  scala: <SiScala size={64} color="#dc322f" />,
  dart: <SiDart size={64} color="#00b4ab" />,
  lua: <SiLua size={64} color="#2c2d72" />,
  'c++': <SiCplusplus size={64} color="#f34b7d" />,
  cplus: <SiCplusplus size={64} color="#f34b7d" />,
  c: <SiC size={64} color="#a8b9cc" />,
  r: <FaRProject size={64} color="#276dc3" />,
  perl: <FaPerl size={64} color="#0093B2" />,
  sql: <FaDatabase size={64} color="#F29111" />,
  objectivec: <FaApple size={64} color="#999999" />,
  haskell: <FaLambda size={64} color="#5D4F85" />,
  elixir: <FaHeart size={64} color="#6E4A7E" />,
  groovy: <FaJava size={64} color="#4298B8" />,
  shell: <FaTerminal size={64} color="#89e051" />,
  visualbasic: <FaMicrosoft size={64} color="#0175C2" />,
  assembly: <FaMicrochip size={64} color="#007396" />,
  matlab: <FaCalculator size={64} color="#0076A8" />,
  scratch: <FaPuzzlePiece size={64} color="#4D97EA" />,
  cobol: <FaCode size={64} color="#220000" />,
  fortran: <FaCode size={64} color="#734F96" />,
  lisp: <FaCode size={64} color="#7F5AB6" />,
  prolog: <FaCode size={64} color="#6D5ACF" />,
  smalltalk: <FaCode size={64} color="#596706" />,
  basic: <FaCode size={64} color="#0000FF" />,
  pascal: <FaCode size={64} color="#E3F171" />,
  plsql: <FaDatabase size={64} color="#f0ad4e" />,
  swiftui: <FaSwift size={64} color="#ffac45" />,
  reactnative: <FaMobileAlt size={64} color="#61dafb" />,
  angular: <FaAngular size={64} color="#dd0031" />,
  vuejs: <FaVuejs size={64} color="#41b883" />,
  spring: <FaLeaf size={64} color="#6db33f" />,
  laravel: <FaPhp size={64} color="#f4645f" />,
  nodejs: <FaNodeJs size={64} color="#43853d" />,
  express: <FaServer size={64} color="#000000" />,
  django: <FaPython size={64} color="#4584b6" />,
  flask: <FaMicrochip size={64} color="#000000" />,
  rails: <FaGem size={64} color="#cc0000" />,
  dotnet: <FaMicrosoft size={64} color="#5c2d91" />,
  react: <SiReact size={64} color="#61dafb" />,
  ember: <FaEmber size={64} color="#f23819" />,
  clojure: <FaClojure size={64} color="#5881d8" />,
  erlang: <FaErlang size={64} color="#a90533" />,
  fsharp: <DiFsharp size={64} color="#1b82c7" />,
  ocaml: <FaCode size={64} color="#3be133" />,
  perl6: <FaPerl size={64} color="#000000" />,
  racket: <FaCode size={64} color="#960122" />,
  scheme: <FaCode size={64} color="#1e4aec" />,
  sml: <FaCode size={64} color="#dc3d31" />,
  bash: <FaTerminal size={64} color="#000000" />,
  perl5: <FaCode size={64} color="#333" />,
  ksh: <FaTerminal size={64} color="#000000" />,
  zsh: <FaTerminal size={64} color="#000000" />,
  awk: <FaCode size={64} color="#77cc00" />,
  sed: <FaCode size={64} color="#64b970" />,
  ada: <FaCode size={64} color="#02f88c" />,
  forth: <FaCode size={64} color="#341708" />,
  powershell: <FaTerminal size={64} color="#012456" />,
  csh: <FaTerminal size={64} color="#000000" />,
  fish: <FaTerminal size={64} color="#000000" />,
  tcsh: <FaTerminal size={64} color="#000000" />,
  sh: <FaTerminal size={64} color="#000000" />,
  squirrel: <FaCode size={64} color="#800000" />,
  go: <FaCode size={64} color="#00ADD8" />,
  raku: <FaCode size={64} color="#0000fb" />,
  julia: <FaCode size={64} color="#a270ba" />,
  nim: <FaCode size={64} color="#ffc107" />,
  crystal: <FaCode size={64} color="#000000" />,
  haxe: <FaCode size={64} color="#EA8220" />,
  reasonml: <FaCode size={64} color="#db4c39" />,
};

export default languages;
