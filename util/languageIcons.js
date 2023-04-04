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
  javascript: <FaJsSquare color="#f7df1e" />,
  html: <FaHtml5 color="#e34f26" />,
  css: <FaCss3Alt color="#1572b6" />,
  python: <FaPython color="#3776ab" />,
  java: <FaJava color="#007396" />,
  csharp: <FaHashtag color="#239120" />,
  php: <FaPhp color="#8892bf" />,
  ruby: <FaRuby color="#cc342d" />,
  swift: <FaSwift color="#f05138" />,
  typescript: <FaReact color="#007acc" />,
  rust: <FaRust color="#000000" />,
  kotlin: <FaKotlin color="#7f52ff" />,
  scala: <FaScala color="#dc322f" />,
  dart: <FaDart color="#00b4ab" />,
  lua: <FaLua color="#2c2d72" />,
  cplus: <FaCc color="#f34b7d" />,
  c: <FaC color="#a8b9cc" />,
  r: <FaRProject color="#276dc3" />,
  perl: <FaPerl color="#0093B2" />,
  sql: <FaDatabase color="#F29111" />,
  objectivec: <FaApple color="#999999" />,
  haskell: <FaLambda color="#5D4F85" />,
  elixir: <FaHeart color="#6E4A7E" />,
  groovy: <FaJava color="#4298B8" />,
  shell: <FaTerminal color="#89e051" />,
  visualbasic: <FaMicrosoft color="#0175C2" />,
  assembly: <FaMicrochip color="#007396" />,
  matlab: <FaCalculator color="#0076A8" />,
  scratch: <FaPuzzlePiece color="#4D97EA" />,
  cobol: <FaCode color="#220000" />,
  fortran: <FaCode color="#734F96" />,
  lisp: <FaCode color="#7F5AB6" />,
  prolog: <FaCode color="#6D5ACF" />,
  smalltalk: <FaCode color="#596706" />,
  basic: <FaCode color="#0000FF" />,
  pascal: <FaCode color="#E3F171" />,
  plsql: <FaDatabase color="#f0ad4e" />,
  swiftui: <FaSwift color="#ffac45" />,
  reactnative: <FaMobileAlt color="#61dafb" />,
  angular: <FaAngular color="#dd0031" />,
  vuejs: <FaVuejs color="#41b883" />,
  spring: <FaLeaf color="#6db33f" />,
  laravel: <FaPhp color="#f4645f" />,
  nodejs: <FaNodeJs color="#43853d" />,
  express: <FaServer color="#000" />,
  django: <FaPython color="#4584b6" />,
  flask: <FaMicrochip color="#000" />,
  rails: <FaGem color="#cc0000" />,
  dotnet: <FaMicrosoft color="#5c2d91" />,
  react: <FaReact color="#61dafb" />,
  ember: <FaEmber color="#f23819" />,
  clojure: <FaClojure color="#5881d8" />,
  erlang: <FaErlang color="#a90533" />,
  fsharp: <FaFoursquare color="#1b82c7" />,
  ocaml: <FaCode color="#3be133" />,
  perl6: <FaPerl color="#000" />,
  racket: <FaCode color="#960122" />,
  scheme: <FaCode color="#1e4aec" />,
  sml: <FaCode color="#dc3d31" />,
  bash: <FaTerminal color="#000" />,
  perl5: <FaCode color="#333" />,
  ksh: <FaTerminal color="#000" />,
  zsh: <FaTerminal color="#000" />,
  awk: <FaCode color="#77cc00" />,
  sed: <FaCode color="#64b970" />,
  ada: <FaCode color="#02f88c" />,
  forth: <FaCode color="#341708" />,
  powershell: <FaTerminal color="#012456" />,
  csh: <FaTerminal color="#000" />,
  fish: <FaTerminal color="#000" />,
  tcsh: <FaTerminal color="#000" />,
  sh: <FaTerminal color="#000" />,
  squirrel: <FaCode color="#800000" />,
  go: <FaCode color="#00ADD8" />,
  raku: <FaCode color="#0000fb" />,
  julia: <FaCode color="#a270ba" />,
  nim: <FaCode color="#ffc107" />,
  crystal: <FaCode color="#000" />,
  haxe: <FaCode color="#EA8220" />,
  reasonml: <FaCode color="#db4c39" />,
};

export default languages;
