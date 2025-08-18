'use client';

import React, { Component, ReactNode } from 'react';
import Button from '@/components/ui/Button/TapeButton';
import Header from '@/components/ui/Header';
import Text from '@/components/ui/Text';
import DoodleContainer from '@/components/ui/Doodle/DoodleContainer';
import { Doodle } from '@/components/ui/Doodle/doodle.types';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

const doodles: Doodle[] = [
  {
    src: 'exclamation-mark-1',
    width: '50',
    height: '50',
    bottom: '20',
    left: '20',
    rotate: -15,
  },
  {
    src: 'exclamation-mark-2',
    width: '30',
    height: '30',
    top: '20',
    right: '20',
    rotate: 15,
  },
];

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center  p-4 text-center">
          <DoodleContainer doodles={doodles}>
            <div className="max-w-lg rounded-lg p-8 shadow-lg">
              <Header level={1} withHighlighter text='Ups! Coś poszło nie tak.'/>
                
              <Text className="my-4">
                Przepraszamy za niedogodności. Nasi technicy zostali poinformowani i pracują nad rozwiązaniem problemu.
              </Text>
              <Button href={'/'}>
                Wróć na stronę główną
              </Button>
              {process.env.NODE_ENV === 'development' &&
                this.state.error &&
                this.state.errorInfo && (
                  <details className="mt-4 whitespace-pre-wrap text-left text-red-500">
                    <summary>Szczegóły błędu</summary>
                    <p>{this.state.error.toString()}</p>
                    <p>{this.state.errorInfo.componentStack}</p>
                  </details>
                )}
            </div>
          </DoodleContainer>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
