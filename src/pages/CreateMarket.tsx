import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CreateMarket = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    endDate: '',
    minDeposit: '',
  });

  const categories = ['Crypto', 'AI', 'Stocks', 'Economics', 'Politics', 'Sports', 'Tech', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Creating market:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-smooth">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground">Create New Market</CardTitle>
            <p className="text-muted-foreground">
              Create a prediction market for any real-world event
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Market Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-foreground font-medium">
                  Market Title *
                </Label>
                <Input
                  id="title"
                  placeholder="e.g., Will Bitcoin reach $100,000 by end of 2024?"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-card border-border"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground font-medium">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about how this market will be resolved..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="bg-card border-border min-h-[120px]"
                  required
                />
              </div>

              {/* Category and End Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-foreground font-medium">
                    Category *
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate" className="text-foreground font-medium">
                    Resolution Date *
                  </Label>
                  <Input
                    id="endDate"
                    type="datetime-local"
                    value={formData.endDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                    className="bg-card border-border"
                    required
                  />
                </div>
              </div>

              {/* Minimum Deposit */}
              <div className="space-y-2">
                <Label htmlFor="minDeposit" className="text-foreground font-medium">
                  Minimum Proposal Deposit (ETH) *
                </Label>
                <Input
                  id="minDeposit"
                  type="number"
                  step="0.01"
                  placeholder="0.1"
                  value={formData.minDeposit}
                  onChange={(e) => setFormData(prev => ({ ...prev, minDeposit: e.target.value }))}
                  className="bg-card border-border"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  Amount required for users to submit resolution proposals
                </p>
              </div>

              {/* Market Rules */}
              <Card className="bg-muted/20 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Market Creation Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Markets must be based on verifiable, real-world events</p>
                  <p>• Resolution criteria must be clear and objective</p>
                  <p>• End date must be in the future</p>
                  <p>• You will need to pay gas fees for market creation</p>
                  <p>• Markets cannot be edited once created</p>
                </CardContent>
              </Card>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" className="btn-quantum flex-1">
                  Create Market
                </Button>
                <Button type="button" variant="outline" className="btn-outline-quantum flex-1">
                  Preview Market
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateMarket;