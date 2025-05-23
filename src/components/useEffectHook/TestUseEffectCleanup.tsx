import { useEffect } from "react";

const TestUseEffectCleanup = () => {
  const connect = () => console.log("Connected");
  const disconnect = () => console.log("Disconnected");

  useEffect(() => {
    connect();

    // This is clean up function. It should do opposite of what connect does.
    return () => {
      disconnect();
    };
  }, []);
  return <div></div>;
};

export default TestUseEffectCleanup;
