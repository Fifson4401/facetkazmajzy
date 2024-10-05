// components/ErrorBoundary.tsx

'use client';

import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Aktualizuje stan, aby następny render pokazał zapasowy interfejs użytkownika
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Możesz tutaj wysłać błąd do zewnętrznego serwisu logowania
    console.error('Błąd przechwycony przez ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Możesz dostosować ten UI zgodnie z potrzebami
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Coś poszło nie tak.</h1>
          <p>
            Przepraszamy za niedogodności. Prosimy spróbować ponownie później.
          </p>
          {process.env.NODE_ENV === 'development' &&
            this.state.error &&
            this.state.errorInfo && (
              <details
                style={{
                  whiteSpace: 'pre-wrap',
                  textAlign: 'left',
                  color: 'red',
                }}
              >
                <summary>Informacje o błędzie</summary>
                <p>{this.state.error.toString()}</p>
                <p>{this.state.errorInfo.componentStack}</p>
              </details>
            )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
