import CNC from '../Resources/Logo/cnc.svg';
import Conventional from '../Resources/Logo/Conventional.svg';
import Electrical from '../Resources/Logo/electrical.svg';
import Mold from '../Resources/Logo/mold.svg';
import Sheet from '../Resources/Logo/Sheet Metal.svg';
import Welding from '../Resources/Logo/weild.svg';
import GearBox from '../Resources/Logo/Gear.svg';


export const departments = [
    {
      name: "CNC",
      description: "High-precision CNC machining solutions for all your manufacturing needs",
      icon: Conventional,
      path: "/cnc" 
    },
    {
      name: "Conventional",
      description: "Reliable conventional machining for precise and durable components",
      icon: CNC,
      path: "/conventional" 
    },
    {
      name: "Electrical",
      description: "Advanced electrical machining for intricate and accurate parts",
      icon: Electrical,
      path: "/electrical"
    },
    {
      name: "Mold & Die",
      description: "Expert Mold & Die solutions for high-quality, custom manufacturing.",
      icon: Mold,
      path: "/mold" 
    },
    {
      name: "Sheet Metal",
      description: "Precision sheet metal fabrication for versatile and durable products",
      icon: Sheet,
      path: "/sheetmetal" 
    },
    {
      name: "Welding",
      description: "Expert welding services for strong and reliable joints",
      icon: Welding,
      path: "/welding" 
    },
    {
        name: "GearBox",
        description: "High-performance gearbox manufacturing for efficient and reliable power transmission",
        icon: GearBox,
        path: "/gearbox"
    },
    // Add more departments as needed
  ];
  