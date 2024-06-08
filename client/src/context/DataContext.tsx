import { createContext, useState, ReactNode, FC } from "react";
export const DataContext = createContext<DataContextType | null>(null);

interface DataContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}
interface DataContextProviderProps {
    children: ReactNode;
}

const DataContextProvider: FC<DataContextProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <DataContext.Provider value={{ loading, setLoading }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;