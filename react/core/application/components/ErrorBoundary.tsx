import { Fragment, PropsWithChildren } from 'react';

const ErrorBoundary = ({ children }: PropsWithChildren) => {
      return (
            <Fragment>
                  {children}
            </Fragment>
      );
};

export { ErrorBoundary };
