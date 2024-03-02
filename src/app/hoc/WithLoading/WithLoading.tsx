import { Loader } from "shared/ui";

interface WithLoadingProps {
	loading: boolean;
  }
export const withLoading = <P extends object>(
	Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => {
	const WithLoadingComponent: React.FC<P & WithLoadingProps> = ({
		loading,
		...props
	}: WithLoadingProps) =>
		loading ? <Loader /> : <Component {...props as P} />;
  
	WithLoadingComponent.displayName = `WithLoading(${Component.displayName || Component.name || "Componen"})`;
  
	return WithLoadingComponent;
};


