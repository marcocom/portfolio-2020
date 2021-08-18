import React from "react";

const MISSING_CONTEXT_ERROR = "useContext called without a Provider";

/**
 * Creates context with no defaultValue, and a useContext hook that
 * ensures context is set up correctly.
 */

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
export function createContext<BaseContextType>(
  missingContextMessage = MISSING_CONTEXT_ERROR
): [
  <ExtendedContextType>() => BaseContextType & ExtendedContextType,
  React.Context<BaseContextType | undefined>
] {
  const Context = React.createContext<BaseContextType | undefined>(undefined);

  function useContext<ExtendedContextType>(): BaseContextType &
    ExtendedContextType {
    const MergedContext = Context as React.Context<(BaseContextType & ExtendedContextType) | undefined>;
    const context = React.useContext(MergedContext);
    if (!context) throw new Error(missingContextMessage);
    return context;
  }

  return [useContext, Context];
}
