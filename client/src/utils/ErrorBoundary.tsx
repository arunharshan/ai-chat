import React from 'react';

type Props = {
    children: React.ReactNode;
}
type State = {
    hasError:boolean;
}

class ErrorBoundary extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props);
        this.state = {hasError:false}
    }
     static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong 😢</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;