import { apiStatusEnum } from '../models/apiStatus';
import { useAppSelector } from '../store/hooks';

export function useTodoCollection() {
	const todoCollection = useAppSelector((state) => state.todo.items);
	const status = useAppSelector((state) => state.todo.status);
	const isLoading = status === apiStatusEnum.loading;
	const isError = status === apiStatusEnum.error;
	return { todoCollection, isLoading, isError };
}
