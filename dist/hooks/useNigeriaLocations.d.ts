import * as react from 'react';

declare const useNigeriaLocations: (defaultState?: string) => {
    states: string[];
    lgas: string[];
    selectedState: string;
    selectedLGA: string;
    setSelectedState: react.Dispatch<react.SetStateAction<string>>;
    setSelectedLGA: react.Dispatch<react.SetStateAction<string>>;
};

export { useNigeriaLocations };
