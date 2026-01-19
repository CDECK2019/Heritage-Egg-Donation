
import { Question } from './types';

export const BASE_COMPENSATION = 8000;

export const VALUATION_QUESTIONS: Question[] = [
  {
    id: 'age',
    label: 'Age',
    description: 'Younger donors have higher egg quality and success rates; premium reflects demand.',
    options: [
      { label: '21–25 years', premium: 2000 },
      { label: '26–30 years', premium: 1000 },
      { label: '31–35 years', premium: 500 },
      { label: 'Over 35 or under 21', premium: 0 }
    ]
  },
  {
    id: 'ethnicity',
    label: 'Ethnicity/Race',
    description: 'High demand for scarce groups drives premiums; cultural matching is highly valued.',
    options: [
      { label: 'White/Caucasian', premium: 5000 },
      { label: 'East Asian (e.g., Chinese, Japanese, Korean)', premium: 7000 },
      { label: 'Jewish', premium: 5000 },
      { label: 'South Asian/Indian or Middle Eastern', premium: 4000 },
      { label: 'Hispanic/Latino', premium: 2000 },
      { label: 'Black/African American', premium: 1000 },
      { label: 'Mixed/Other', premium: 2000 }
    ]
  },
  {
    id: 'education',
    label: 'Education Level',
    description: 'Higher education signals intelligence; Ivy League or top-tier adds major premiums.',
    options: [
      { label: 'High school/GED only', premium: 0 },
      { label: 'Associate\'s or some college', premium: 1000 },
      { label: 'Bachelor\'s degree (non-elite school)', premium: 3000 },
      { label: 'Bachelor\'s from Ivy League/top-tier (e.g., Harvard, Stanford, MIT)', premium: 10000 },
      { label: 'Master\'s/PhD (standard)', premium: 5000 },
      { label: 'Master\'s/PhD (Ivy League/top-tier)', premium: 10000 }
    ]
  },
  {
    id: 'intelligence',
    label: 'IQ or Intelligence Proxy',
    description: 'Based on tested IQ or SAT/ACT scores (e.g., SAT 1400+ ≈ IQ 130+).',
    options: [
      { label: 'IQ 140+ (or SAT 1500+)', premium: 5000 },
      { label: 'IQ 130–139 (or SAT 1400–1499)', premium: 3000 },
      { label: 'IQ 120–129 (or SAT 1300–1399)', premium: 1000 },
      { label: 'Below 120 or untested', premium: 0 }
    ]
  },
  {
    id: 'height',
    label: 'Height',
    description: 'Taller donors are often preferred for physical genetics resemblance.',
    options: [
      { label: '5\'9" or taller', premium: 2000 },
      { label: '5\'6"–5\'8"', premium: 1000 },
      { label: '5\'3"–5\'5"', premium: 500 },
      { label: 'Under 5\'3"', premium: 0 }
    ]
  },
  {
    id: 'hairColor',
    label: 'Hair Color',
    options: [
      { label: 'Blonde or Red', premium: 1000 },
      { label: 'Brown, Black, or Other', premium: 0 }
    ]
  },
  {
    id: 'eyeColor',
    label: 'Eye Color',
    options: [
      { label: 'Blue or Green', premium: 1000 },
      { label: 'Brown, Hazel, or Other', premium: 0 }
    ]
  },
  {
    id: 'athleticism',
    label: 'Athleticism',
    description: 'Competitive sports signal exceptional physical health.',
    options: [
      { label: 'College/national-level athlete or awards', premium: 2000 },
      { label: 'Recreational sports/active lifestyle', premium: 500 },
      { label: 'None', premium: 0 }
    ]
  },
  {
    id: 'talents',
    label: 'Special Talents',
    description: 'Musical, Artistic, or Multilingual abilities.',
    options: [
      { label: 'Professional/award-level', premium: 2000 },
      { label: 'Hobbyist level', premium: 1000 },
      { label: 'None', premium: 0 }
    ]
  },
  {
    id: 'previousDonations',
    label: 'Previous Successful Donations',
    description: 'Proven fertility significantly increases value.',
    options: [
      { label: '3+ successful cycles', premium: 10000 },
      { label: '1–2 successful cycles', premium: 5000 },
      { label: 'None', premium: 0 }
    ]
  },
  {
    id: 'insurance',
    label: 'Insurance Coverage',
    description: 'Access to insurance-covered fertility drugs reduces agency costs.',
    options: [
      { label: 'Yes (full or partial coverage)', premium: 1000 },
      { label: 'No', premium: 0 }
    ]
  }
];
