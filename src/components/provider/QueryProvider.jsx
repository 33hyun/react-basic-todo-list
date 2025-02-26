import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// QueryClient 생성
const queryClient = new QueryClient();

const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;