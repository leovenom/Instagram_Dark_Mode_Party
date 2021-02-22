const isRunningOnClient = (): boolean => typeof window === "object";

export default isRunningOnClient;
