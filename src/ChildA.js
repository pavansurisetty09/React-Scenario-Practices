import React, { useEffect, useState } from "react";

export const ChildA = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h4>Child A</h4>
    </div>
  );
};
