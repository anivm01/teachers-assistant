"use client";

import { WordListProvider } from "@/contexts/WordListContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <WordListProvider>{children}</WordListProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
