import { FaJsSquare } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaHashtag } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaRuby } from 'react-icons/fa';
import { FaSwift } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaRust } from 'react-icons/fa';
import { FaKotlin } from 'react-icons/fa';
import { FaScala } from 'react-icons/fa';
import { FaDart } from 'react-icons/fa';
import { FaLua } from 'react-icons/fa';
import { FaCc } from 'react-icons/fa';
import { FaC } from 'react-icons/fa';
import { FaRProject } from 'react-icons/fa';
import {
  FaPerl,
  FaDatabase,
  FaApple,
  FaHaskell,
  FaPhoenixFramework,
  FaGroovy,
  FaTerminal,
  FaMicrosoft,
  FaHammer,
  FaMatlab,
  FaScratch,
  FaCalculator,
  FaFortAwesomeAlt,
  FaInfinity,
  FaBrain,
  FaSmile,
  FaProjectDiagram,
  FaCode,
  FaTypo3,
  FaLambda,
  FaHeart,
  FaPuzzlePiece,
  FaMicrochip,
  FaMobileAlt,
  FaLeaf,
  FaServer,
  FaGem,
  FaFoursquare,
} from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa';
import { FaLinux } from 'react-icons/fa';

import { FaSql } from 'react-icons/fa';
import { FaObjectiveC } from 'react-icons/fa';
import { FaElixir } from 'react-icons/fa';
import { FaShell } from 'react-icons/fa';
import { FaVisualstudio } from 'react-icons/fa';
import { FaAssembly } from 'react-icons/fa';
import { FaCobol } from 'react-icons/fa';
import { FaFortAwesome } from 'react-icons/fa';
import { FaLisp } from 'react-icons/fa';
import { FaProlog } from 'react-icons/fa';
import { FaSmalltalk } from 'react-icons/fa';
import { FaBtc } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';
import { FaErlang } from 'react-icons/fa';
import { FaFsharp } from 'react-icons/fa';
import { FaClojure } from 'react-icons/fa';
import { FaDotnet } from 'react-icons/fa';
import { FaEmber } from 'react-icons/fa';
import { FaDjango } from 'react-icons/fa';
import { FaFlask } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { FaSpring } from 'react-icons/fa';
import { FaReacteurope } from 'react-icons/fa';
import { FaReactnative } from 'react-icons/fa';
import { FaSwiftui } from 'react-icons/fa';
import { FaPlSql } from 'react-icons/fa';
import { FaPerl6 } from 'react-icons/fa';
import { FaRacket } from 'react-icons/fa';
import { FaOcaml } from 'react-icons/fa';
import { SiScheme } from 'react-icons/si';
import { FaPencilAlt } from 'react-icons/fa';
import { FaFish } from 'react-icons/fa';
import { FaSquirrel } from 'react-icons/fa';

const languages = {
  javascript: <FaJsSquare size={64} color="#f7df1e" />,
  html: <FaHtml5 size={64} color="#e34f26" />,
  css: <FaCss3Alt size={64} color="#1572b6" />,
  python: <FaPython size={64} color="#3776ab" />,
  java: <FaJava size={64} color="#007396" />,
  csharp: <FaHashtag size={64} color="#239120" />,
  php: <FaPhp size={64} color="#8892bf" />,
  ruby: <FaRuby size={64} color="#cc342d" />,
  swift: <FaSwift size={64} color="#f05138" />,
  typescript: <FaReact size={64} color="#007acc" />,
  rust: <FaRust size={64} color="#000000" />,
  kotlin: <FaKotlin size={64} color="#7f52ff" />,
  scala: <FaScala size={64} color="#dc322f" />,
  dart: <FaDart size={64} color="#00b4ab" />,
  lua: <FaLua size={64} color="#2c2d72" />,
  cplus: <FaCc size={64} color="#f34b7d" />,
  c: <FaC size={64} color="#a8b9cc" />,
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
  express: <FaServer size={64} color="#000" />,
  django: <FaPython size={64} color="#4584b6" />,
  flask: <FaMicrochip size={64} color="#000" />,
  rails: <FaGem size={64} color="#cc0000" />,
  dotnet: <FaMicrosoft size={64} color="#5c2d91" />,
  react: <FaReact size={64} color="#61dafb" />,
  ember: <FaEmber size={64} color="#f23819" />,
  clojure: <FaClojure size={64} color="#5881d8" />,
  erlang: <FaErlang size={64} color="#a90533" />,
  fsharp: <FaFoursquare size={64} color="#1b82c7" />,
  ocaml: <FaCode size={64} color="#3be133" />,
  perl6: <FaPerl size={64} color="#000" />,
  racket: <FaCode size={64} color="#960122" />,
  scheme: <FaCode size={64} color="#1e4aec" />,
  sml: <FaCode size={64} color="#dc3d31" />,
  bash: <FaTerminal size={64} color="#000" />,
  perl5: <FaCode size={64} color="#333" />,
  ksh: <FaTerminal size={64} color="#000" />,
  zsh: <FaTerminal size={64} color="#000" />,
  awk: <FaCode size={64} color="#77cc00" />,
  sed: <FaCode size={64} color="#64b970" />,
  ada: <FaCode size={64} color="#02f88c" />,
  forth: <FaCode size={64} color="#341708" />,
  powershell: <FaTerminal size={64} color="#012456" />,
  csh: <FaTerminal size={64} color="#000" />,
  fish: <FaTerminal size={64} color="#000" />,
  tcsh: <FaTerminal size={64} color="#000" />,
  sh: <FaTerminal size={64} color="#000" />,
  squirrel: <FaCode size={64} color="#800000" />,
  go: <FaCode size={64} color="#00ADD8" />,
  raku: <FaCode size={64} color="#0000fb" />,
  julia: <FaCode size={64} color="#a270ba" />,
  nim: <FaCode size={64} color="#ffc107" />,
  crystal: <FaCode size={64} color="#000" />,
  haxe: <FaCode size={64} color="#EA8220" />,
  reasonml: <FaCode size={64} color="#db4c39" />,
};

export default languages;
