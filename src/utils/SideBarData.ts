// sideBarData.ts
import Icons from './IconImports.ts';

const SideBarItems = [
  {
    section: 'Customers',
    labels: [
      'Users',
      'Guarantors',
      'Loans',
      'Decision Models',
      'Savings',
      'Loan Requests',
      'Whitelist',
      'Karma',
    ],
    icons: [
      Icons.user_friends,
      Icons.users_guarantors,
      Icons.loan,
      Icons.chart_bar,
      Icons.piggy_bank,
      Icons.handshake,
      Icons.user_check,
      Icons.user_times,
    ],
  },
  {
    section: 'Businesses',
    labels: [
      'Organization',
      'Loan Products',
      'Savings Products',
      'Fees and Charges',
      'Transactions',
      'Services',
      'Service Account',
      'Settlements',
      'Reports',
    ],
    icons: [
      Icons.briefcase,
      Icons.loan,
      Icons.piggy_bank,
      Icons.percentage,
      Icons.transaction,
      Icons.galaxy,
      Icons.user_cog,
      Icons.sack,
      Icons.scroll,
    ],
  },
  {
    section: 'Settings',
    labels: ['Preferences', 'Fees and Pricing', 'Audit Logs'],
    icons: [Icons.sliders, Icons.percentage, Icons.clipboard],
  },
];

export default SideBarItems;
