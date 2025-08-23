import { Link, useLocation } from 'react-router-dom';
import { ConnectWallet } from '@/components/web3/ConnectWallet';
import { ChartBarIcon, PlusIcon, UserIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export function Navigation() {
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home', icon: ChartBarIcon },
    { href: '/markets', label: 'Markets', icon: CurrencyDollarIcon },
    { href: '/create', label: 'Create', icon: PlusIcon },
    { href: '/portfolio', label: 'Portfolio', icon: UserIcon },
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Quantum Markets
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Connect Wallet */}
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
}