
import React from "react";

interface IProps {
  children: React.ReactElement;
}

interface IState {
  hasError?: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div >
          <main>
            <div className="" >
              <div className="" >
                <div className="">
                  <div className="text-center">
                    <p className="">Something went wrong</p>
                    <button
                      onClick={() => {
                        window.location.reload();
                      }}
                      >
                      Reload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }
    return this.props.children;
  }
  
}

export default ErrorBoundary;
