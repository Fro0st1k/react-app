import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error: error, errorInfo: info });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h1>Something went wrong.</h1>
          {this.state.error && this.state.error.toString()}
          <br/>
          {this.state.errorInfo.componentStack}
        </>
      );
    }
    return this.props.children;
  }
}
