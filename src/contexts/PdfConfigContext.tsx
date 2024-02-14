"use client";
import { ConfigValues } from "@/types/wordListTypes";
import React, { createContext, useContext, useState, ReactNode } from "react";

const defaultConfigValues: ConfigValues = {
  paperType: "A4", // Default value
  itemHeight: "", // Default value
  itemWidth: "", // Default value
  title: "", // Default value
};

const ConfigContext = createContext<{
  config: ConfigValues;
  updateConfig: (newConfig: Partial<ConfigValues>) => void;
}>({
  config: defaultConfigValues,
  updateConfig: () => {}, // Empty function placeholder
});

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState<ConfigValues>(defaultConfigValues);

  const updateConfig = (newConfig: Partial<ConfigValues>) => {
    setConfig((currentConfig) => ({ ...currentConfig, ...newConfig }));
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

// Hook to use the config context
export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};
