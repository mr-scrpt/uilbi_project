import { Component, ErrorInfo, Suspense } from 'react'
import { ErrorPage } from '@/page/ErrorPage'
import { ErrorBoundryProps } from '../type/props.type'
import { ErrorBoundryState } from '../type/state.type'

export class ErrorBoundary extends Component<
  ErrorBoundryProps,
  ErrorBoundryState
> {
  constructor(props: ErrorBoundryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback="">
          <ErrorPage />
        </Suspense>
      )
    }

    return children
  }
}

// export default ErrorBoundary
