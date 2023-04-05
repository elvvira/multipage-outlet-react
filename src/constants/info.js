import { v4 } from 'uuid';

const CardHomeInfo = [
	{
		id: v4(),
		title: 'Personal Finances',
		info: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ',
		src: 'public/assets/home/desktop/icon-personal-finances.svg'
	},
	{
		id: v4(),
		title: 'Banking & Coverage',
		info: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
		src: 'public/assets/home/desktop/icon-banking-and-coverage.svg'
	},
	{
		id: v4(),
		title: 'Consumer Payments',
		info: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
		src: 'public/assets/home/desktop/icon-consumer-payments.svg'
	}
];

const FREE_PLAN = {
	id: v4(),
	plan: 'Free Plan',
	price: '$0.00',
	features: [
		{ id: v4(), name: 'Transactions', value: true },
		{ id: v4(), name: 'Auth', value: true },
		{ id: v4(), name: 'Identity', value: true },
		{ id: v4(), name: 'Investments', value: false },
		{ id: v4(), name: 'Assets', value: false },
		{ id: v4(), name: 'Liabilities', value: false },
		{ id: v4(), name: 'Income', value: false }
	]
};

const BASIC_PLAN = {
	id: v4(),
	plan: 'Basic Plan',
	price: '$249.00',
	features: [
		{ id: v4(), name: 'Transactions', value: true },
		{ id: v4(), name: 'Auth', value: true },
		{ id: v4(), name: 'Identity', value: true },
		{ id: v4(), name: 'Investments', value: true },
		{ id: v4(), name: 'Assets', value: true },
		{ id: v4(), name: 'Liabilities', value: false },
		{ id: v4(), name: 'Income', value: false }
	]
};

const PREMIUM_PLAN = {
	id: v4(),
	plan: 'Premium Plan',
	price: '$499.00',
	features: [
		{ id: v4(), name: 'Transactions', value: true },
		{ id: v4(), name: 'Auth', value: true },
		{ id: v4(), name: 'Identity', value: true },
		{ id: v4(), name: 'Investments', value: true },
		{ id: v4(), name: 'Assets', value: true },
		{ id: v4(), name: 'Liabilities', value: true },
		{ id: v4(), name: 'Income', value: true }
	]
};

export const PRICING_PLANS = {
	free: FREE_PLAN,
	basic: BASIC_PLAN,
	premium: PREMIUM_PLAN
};
export { CardHomeInfo };
