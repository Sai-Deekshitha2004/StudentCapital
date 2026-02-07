
export enum RiskProfile {
  CONSERVATIVE = 'Conservative',
  MODERATE = 'Moderate',
  AGGRESSIVE = 'Aggressive'
}

export interface BudgetCategory {
  id: string;
  name: string;
  spent: number;
  limit: number;
  icon: string;
  color: string;
}

export interface Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  deadline: string;
}

export type Screen = 'aaj_ka_kharcha' | 'split_budget' | 'nivesh' | 'gyaan' | 'login' | 'profile' | 'marketplace' | 'hustle';
