import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

/** Catches render errors so a broken section can't blank the whole page. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
        >
          <h1 className="text-2xl font-bold text-foreground">
            Something went wrong.
          </h1>
          <p className="max-w-md text-muted">
            An unexpected error occurred while rendering the page. Please
            refresh — if it persists, reach out via email.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-gradient-to-r from-accent-from to-accent-to px-6 py-2.5 text-sm font-medium text-white"
          >
            Reload page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
