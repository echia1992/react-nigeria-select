import { useEffect, useState } from "react";
import { nigerianStates } from "../data/states";

export const useNigeriaLocations = (defaultState?: string) => {
  const [selectedState, setSelectedState] = useState<string>(
    defaultState || ""
  );
  const [selectedLGA, setSelectedLGA] = useState<string>("");
  const [availableLGAs, setAvailableLGAs] = useState<string[]>([]);

  useEffect(() => {
    if (selectedState) {
      const state = nigerianStates.find(
        (s) => s.state.toLowerCase() === selectedState.toLowerCase()
      );
      if (state) {
        setAvailableLGAs(state.lgas);
      } else {
        setAvailableLGAs([]);
      }
    } else {
      setAvailableLGAs([]);
    }
    setSelectedLGA("");
  }, [selectedState]);

  return {
    states: nigerianStates.map((s) => s.state),
    lgas: availableLGAs,
    selectedState,
    selectedLGA,
    setSelectedState,
    setSelectedLGA,
  };
};

// import { useState, useEffect } from "react";
// import { nigerianStates } from "../data/states";

// export const useNigeriaLocations = (defaultState?: string) => {
//   const [selectedState, setSelectedState] = useState(defaultState || "");
//   const [selectedLGA, setSelectedLGA] = useState("");
//   const [availablelg, setAvailablelg] = useState([]);

//   useEffect(() => {
//     if (selectedState) {
//       const state = nigerianStates.find(
//         (s) => s.state.toLowerCase() === selectedState.toLowerCase()
//       );
//       if (state) {
//         setAvailablelg(state.lg);
//       } else {
//         setAvailablelg([]);
//       }
//     } else {
//       setAvailablelg([]);
//     }
//     setSelectedLGA("");
//   }, [selectedState]);

//   return {
//     states: nigerianStates.map((s) => s.state),
//     lg: availablelg,
//     selectedState,
//     selectedLGA,
//     setSelectedState,
//     setSelectedLGA,
//   };
// };
