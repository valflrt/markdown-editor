import { Component, ComponentProps } from "react";

export default class ErrorBoundary extends Component<{
  onError?: () => any;
}> {
  public state: {
    hasError: boolean;
  };

  constructor(props: ComponentProps<any>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    if (this.props.onError) this.props.onError();
  }

  render() {
    return !this.state.hasError ? this.props.children : null;
  }
}
