import { writable } from "svelte/store"
import { browser } from "$app/env"

const primaryColorKey = "primaryColor"
const primaryColorAttribute = "data-primary-color"
export enum PrimaryColor {
    Red = 0,
    Gold = 1,
    Green = 2,
    Blue = 3,
    Purple = 4
}

function getPrimaryColor(): PrimaryColor {
    if (browser) {
        const stored: PrimaryColor = parseInt(localStorage.getItem(primaryColorKey))
        if (!isNaN(stored) && stored <= 4 && stored >= 0) {
            return stored
        }        
    }

    return PrimaryColor.Blue;
}

export const primaryColor = writable<PrimaryColor>(getPrimaryColor())
primaryColor.subscribe(val => {
    if (browser) {
        document.documentElement.setAttribute(primaryColorAttribute, val.toString())
        localStorage.setItem(primaryColorKey, val.toString())
    }
})

export function cyclePrimaryColor() {
    primaryColor.update((currentColor) => {
        let nextColor: PrimaryColor = currentColor + 1;
        if (nextColor > PrimaryColor.Purple) {
            nextColor = 0;
        }
        return nextColor;
    });
}

const themeKey = "theme"
export enum Theme {
    Dark = "dark",
    Light = "light"
}

export const theme = writable<Theme>(browser && localStorage.getItem(themeKey) === Theme.Dark ? Theme.Dark : Theme.Light || Theme.Light)
theme.subscribe(val => {
  if (browser) {
      if (val == Theme.Dark) {
        document.documentElement.classList.add(Theme.Dark)
      } else {
        document.documentElement.classList.remove(Theme.Dark)
      }
    
    localStorage.setItem(themeKey, val)
  }
})

export function toggleTheme() {
    theme.update(currentTheme => currentTheme === Theme.Dark ? Theme.Light : Theme.Dark);
}