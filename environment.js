export const environment = process.env
export const NODE_ENV = environment.NODE_ENV
export const isDevMode = Object.is(NODE_ENV, 'development')
export const isProdMode = Object.is(NODE_ENV, 'production')

export const isServer = process && process.server
export const isBrowser = process && process.browser