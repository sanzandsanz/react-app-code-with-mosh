import { useEffect, useState } from "react";

const TestUseEffect = () => {
  const [product, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log("useEffect called");
    setProduct(["Product 1", "Product 2", "Product 3"]);
  }, []);

  return <div>Test </div>;
};

export default TestUseEffect;
