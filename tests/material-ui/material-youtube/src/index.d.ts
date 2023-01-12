import {PaletteColorOptions, ThemeOptions} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral?: PaletteColorOptions
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions
  }

  interface SimplePaletteColorOptions {
    darker?: string
    lighter?: string
  }

  interface PaletteColor {
    darker?: string
    lighter?: string
  }
}
