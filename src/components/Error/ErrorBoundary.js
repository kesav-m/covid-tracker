import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    isValid: true
  };

  componentDidCatch(error) {
    this.setState({ isValid: false });
  }

  render() {
    const { isValid } = this.state;
    const { children } = this.props;
    if (!isValid) {
      return <div>Error</div>;
    }
    return children;
  }
}
