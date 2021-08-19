import React from "react";
const MISSING_CONTEXT_ERROR = "useContext called without a Provider";
/**
 * Creates context with no defaultValue, and a useContext hook that
 * ensures context is set up correctly.
 */
export function createContext(missingContextMessage = MISSING_CONTEXT_ERROR) {
    const Context = React.createContext(undefined);
    function useContext() {
        const MergedContext = Context;
        const context = React.useContext(MergedContext);
        if (!context)
            throw new Error(missingContextMessage);
        return context;
    }
    return [useContext, Context];
}
