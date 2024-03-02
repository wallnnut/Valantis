import { Item } from "shared/api/types";
import cls from "./CardList.module.scss";
import { observer} from "mobx-react-lite";
import { cardStore } from "entities";
import { paginate } from "shared/lib/paginate";
import { Pagination } from "features";
import { Cards } from "shared/ui";

export const CardList = observer(() => {
	const activePage = cardStore.getActivePage;
	const limit = cardStore.getLimitPerPage;
	const pageCount = cardStore.getPageCount;
	const items = cardStore.getItems;
	const handlePageChange = (index: number) => {
		cardStore.changePage(index);
	};
	const isLoading = cardStore.getLoadingStatus;
	const cards: Item[] = paginate(items, activePage, limit);

	
	return (
		<div >
			<div className={cls["card-wrapper"]}>
				<Pagination activePage={activePage} countVisiblePages={12} onPageChange={handlePageChange} totalPages={pageCount} />
				<h2 className={cls["list-header"]}>Список товаров</h2>
				<Cards cards={cards} loading={isLoading} />
				<Pagination activePage={activePage} countVisiblePages={12} onPageChange={handlePageChange} totalPages={pageCount} />
			</div>
		</div>
	);
});


 