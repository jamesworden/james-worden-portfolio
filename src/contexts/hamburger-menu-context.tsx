import React, { useState, createContext, ReactNode, useContext } from 'react';

export interface HamburgerMenuDetails {
	isOpen: boolean;
}

export const defaultHamburgerMenuDetails: HamburgerMenuDetails = {
	isOpen: false,
};

const HamburgerMenuContext = createContext(defaultHamburgerMenuDetails);
const HambugerMenuUpdateContext = createContext(() => {});

export function useHamburgerMenu() {
	return useContext(HamburgerMenuContext);
}

export function useHamburgerMenuUpdate() {
	return useContext(HambugerMenuUpdateContext);
}

interface HamburgerMenuProviderProps {
	children: ReactNode;
}

export const HamburgerMenuProvider: React.FC<HamburgerMenuProviderProps> = ({ children }) => {
	const [hamburgerMenu, setHamburgerMenu] = useState(defaultHamburgerMenuDetails);

	function toggleIsOpen() {
		setHamburgerMenu({ ...hamburgerMenu, isOpen: !hamburgerMenu.isOpen });
	}

	return (
		<HamburgerMenuContext.Provider value={hamburgerMenu}>
			<HambugerMenuUpdateContext.Provider value={toggleIsOpen}>
				{children}
			</HambugerMenuUpdateContext.Provider>
		</HamburgerMenuContext.Provider>
	);
};
