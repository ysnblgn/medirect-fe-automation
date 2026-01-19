export const Security = {
    Funds: 'mutual-funds',
    Equities: 'equities',
    ETFs: 'etfs',
    Bonds: 'bonds',
} as const;

export type SecurityType = typeof Security[keyof typeof Security];