interface ErrorProps {
  error: Error;
}

export const FallbackPage = ({ error }: ErrorProps) => {
  console.error(982100, error);
  return (
    <div role="alert" style={{ padding: "20px" }}>
      <h1>
        Oops, there was an error:{" "}
        <span style={{ color: "red" }}>{error.name}</span>
      </h1>
      <h3 style={{ color: "yellow" }}>{error.message}</h3>
      <div style={{ padding: "0 20px" }}>
        <p style={{ color: "green" }}>{error.stack}</p>
      </div>
    </div>
  );
};
