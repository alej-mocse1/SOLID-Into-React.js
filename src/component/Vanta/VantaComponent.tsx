import { useEffect } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";

const VantaComponent = () => {
  useEffect(() => {
    const vantaEffect = (GLOBE)({
      el: '#vanta',
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div id="vanta" style={{ width: "100vw", height: "100vh" , position:"absolute", top:"0", left:"0", zIndex:"0" }}>
    
    </div>
  );
};

export default VantaComponent;