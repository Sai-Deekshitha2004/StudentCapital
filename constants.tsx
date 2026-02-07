
import { BudgetCategory, Goal } from './types';

export const COLORS = {
  indigo: '#3F51B5',
  mint: '#00C853',
  navy: '#0D1117',
  cardBg: '#161B22',
  danger: '#FF5252',
  warning: '#FFD600'
};

export const MOCK_BUDGETS: BudgetCategory[] = [
  { id: '1', name: 'Campus Mess', spent: 3200, limit: 4500, icon: '🍛', color: '#3F51B5' },
  { id: '2', name: 'Commute (Auto)', spent: 650, limit: 1200, icon: '🛺', color: '#00C853' },
  { id: '3', name: 'Social/Weekend', spent: 1800, limit: 2000, icon: '🎬', color: '#FFD600' },
  { id: '4', name: 'Phone/Data', spent: 499, limit: 500, icon: '📶', color: '#FF5252' },
];

export const MOCK_GOALS: Goal[] = [
  { id: '1', name: 'New iPhone/Tech', target: 80000, current: 15000, deadline: 'Oct 2025' },
  { id: '2', name: 'Emergency Fund', target: 10000, current: 4000, deadline: 'Ongoing' },
];

export const DAILY_TIPS = [
  "Rule of 72: Want to double your money? Divide 72 by your return rate!",
  "Asset Allocation: Follow the 50-30-20 rule to balance needs, wants, and nivesh.",
  "Power of Now: A ₹1,000 SIP at age 20 is worth more than a ₹5,000 SIP at age 25.",
  "Inflation Alert: If your money is in a zero-interest account, it's shrinking every day."
];
