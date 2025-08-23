import { Link } from 'react-router-dom';
import { ClockIcon, CurrencyDollarIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Market {
  id: string;
  title: string;
  description: string;
  category: string;
  endDate: string;
  volume: string;
  participants: number;
  yesPrice: number;
  noPrice: number;
  status: 'active' | 'resolved' | 'upcoming';
}

interface MarketCardProps {
  market: Market;
  className?: string;
}

export function MarketCard({ market, className = "" }: MarketCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'resolved': return 'bg-muted text-muted-foreground';
      case 'upcoming': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Link to={`/markets/${market.id}`} className={`block ${className}`}>
      <Card className="market-card gradient-card border-border/50 hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <Badge className={getStatusColor(market.status)}>
              {market.status.charAt(0).toUpperCase() + market.status.slice(1)}
            </Badge>
            <Badge variant="outline" className="text-xs border-quantum-gray-light">
              {market.category}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-foreground line-clamp-2 mt-2">
            {market.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {market.description}
          </p>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Price indicators */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-success/10 border border-success/20 rounded-lg p-3">
              <div className="text-xs text-success font-medium mb-1">YES</div>
              <div className="text-lg font-bold text-success">
                ${market.yesPrice.toFixed(2)}
              </div>
            </div>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
              <div className="text-xs text-destructive font-medium mb-1">NO</div>
              <div className="text-lg font-bold text-destructive">
                ${market.noPrice.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Market stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <ClockIcon className="w-4 h-4" />
              <span>{formatDate(market.endDate)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CurrencyDollarIcon className="w-4 h-4" />
              <span>{market.volume}</span>
            </div>
            <div className="flex items-center space-x-1">
              <UsersIcon className="w-4 h-4" />
              <span>{market.participants}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}