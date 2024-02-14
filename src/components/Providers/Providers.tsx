"use client";

import { ConfigProvider } from "@/contexts/PdfConfigContext";
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
        <WordListProvider>
          <ConfigProvider>{children}</ConfigProvider>
        </WordListProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
