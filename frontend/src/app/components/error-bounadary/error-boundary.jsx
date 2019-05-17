import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error, errorInfo: info });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <h1>Something went wrong.</h1>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </>
      );
    }

    return children;
  }
}
