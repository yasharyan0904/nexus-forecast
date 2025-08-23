import { Navigation } from '@/components/layout/Navigation';
import { MarketCard } from '@/components/markets/MarketCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, ChartBarSquareIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const trendingMarkets = [
  {
    id: '1',
    title: 'Will Bitcoin reach $100,000 by end of 2024?',
    description: 'Market prediction for Bitcoin price reaching six-figure milestone by December 31, 2024.',
    category: 'Crypto',
    endDate: '2024-12-31',
    volume: '$2.4M',
    participants: 1247,
    yesPrice: 0.65,
    noPrice: 0.35,
    status: 'active' as const,
  },
  {
    id: '2',
    title: 'Will OpenAI release GPT-5 in 2024?',
    description: 'Prediction market for the release of GPT-5 by OpenAI within the 2024 calendar year.',
    category: 'AI',
    endDate: '2024-12-31',
    volume: '$1.8M',
    participants: 892,
    yesPrice: 0.42,
    noPrice: 0.58,
    status: 'active' as const,
  },
  {
    id: '3',
    title: 'Will Tesla stock hit $300 before Q2 2024?',
    description: 'Market for Tesla stock price prediction reaching $300 per share before Q2 2024.',
    category: 'Stocks',
    endDate: '2024-06-30',
    volume: '$956K',
    participants: 567,
    yesPrice: 0.28,
    noPrice: 0.72,
    status: 'active' as const,
  },
  {
    id: '4',
    title: 'Will SpaceX successfully land on Mars by 2026?',
    description: 'Prediction for SpaceX achieving the first successful Mars landing mission by 2026.',
    category: 'Space',
    endDate: '2026-12-31',
    volume: '$3.2M',
    participants: 2134,
    yesPrice: 0.15,
    noPrice: 0.85,
    status: 'active' as const,
  },
  {
    id: '5',
    title: 'Will the Fed cut rates by 50bp in next meeting?',
    description: 'Federal Reserve interest rate cut prediction for the upcoming FOMC meeting.',
    category: 'Economics',
    endDate: '2024-03-20',
    volume: '$1.2M',
    participants: 743,
    yesPrice: 0.73,
    noPrice: 0.27,
    status: 'active' as const,
  },
  {
    id: '6',
    title: 'Will Ethereum 2.0 staking exceed 40M ETH?',
    description: 'Prediction for total Ethereum staked in ETH 2.0 to surpass 40 million ETH.',
    category: 'Crypto',
    endDate: '2024-09-30',
    volume: '$842K',
    participants: 421,
    yesPrice: 0.89,
    noPrice: 0.11,
    status: 'active' as const,
  },
  // Add 2 more to complete the 4x2 grid
  {
    id: '7',
    title: 'Will Apple announce VR headset successor in 2024?',
    description: 'Market for Apple announcing a new VR/AR headset product in 2024.',
    category: 'Tech',
    endDate: '2024-12-31',
    volume: '$1.5M',
    participants: 689,
    yesPrice: 0.56,
    noPrice: 0.44,
    status: 'active' as const,
  },
  {
    id: '8',
    title: 'Will global inflation drop below 3% by mid-2024?',
    description: 'Prediction for global average inflation rate dropping below 3% by June 2024.',
    category: 'Economics',
    endDate: '2024-06-30',
    volume: '$2.1M',
    participants: 1543,
    yesPrice: 0.61,
    noPrice: 0.39,
    status: 'active' as const,
  },
];

const stats = [
  { name: 'Total Value Locked', value: '$24.7M', icon: CurrencyDollarIcon },
  { name: 'Active Traders', value: '12,847', icon: UsersIcon },
  { name: 'Markets Created', value: '1,247', icon: ChartBarSquareIcon },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Predict the Future
              <span className="block text-primary-glow">Earn Real Returns</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Trade on the outcomes of real-world events. From crypto prices to political elections, 
              make informed predictions and earn rewards on Quantum Markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/markets">
                <Button size="lg" className="btn-quantum px-8 py-4 text-lg">
                  Explore Markets
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/create">
                <Button size="lg" variant="outline" className="btn-outline-quantum px-8 py-4 text-lg">
                  Create Market
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.name} className="gradient-card border-border/50">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.name}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trending Markets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Trending Markets</h2>
            <Link to="/markets">
              <Button variant="outline" className="btn-outline-quantum">
                View All Markets
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingMarkets.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity Feed */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Mock activity items */}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground">Alice</span>
                    <span className="text-muted-foreground"> bought </span>
                    <span className="text-success font-medium">100 YES</span>
                    <span className="text-muted-foreground"> tokens in </span>
                    <span className="font-medium text-foreground">Bitcoin $100K</span>
                  </div>
                  <span className="text-sm text-muted-foreground">2m ago</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground">Bob</span>
                    <span className="text-muted-foreground"> sold </span>
                    <span className="text-destructive font-medium">50 NO</span>
                    <span className="text-muted-foreground"> tokens in </span>
                    <span className="font-medium text-foreground">GPT-5 Release</span>
                  </div>
                  <span className="text-sm text-muted-foreground">5m ago</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground">Charlie</span>
                    <span className="text-muted-foreground"> created market </span>
                    <span className="font-medium text-foreground">Tesla Stock Prediction</span>
                  </div>
                  <span className="text-sm text-muted-foreground">10m ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
