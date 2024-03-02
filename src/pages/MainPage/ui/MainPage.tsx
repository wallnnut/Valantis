import { cardStore } from "entities";
import { observer } from "mobx-react-lite";
import { type FC, useEffect } from "react";
import { MainPageLayout } from "shared/layouts";
import { Overlay } from "shared/ui";
import { Navbar, CardList, Sidebar } from "widgets";

const MainPage: FC = observer(() => {
	const loadingStatus = cardStore.getLoadingStatus;
	useEffect(() => {
		if(!cardStore.getIdsLength) {
			cardStore.fetchIds(false);
		} 
		cardStore.fetchBrands({field: "brand", offset: 0, limit: 200});
	},[]);
	return (
		<>
			<MainPageLayout header={<Navbar />} main={<CardList />} sidebar={<Sidebar />}/>
			<Overlay isLoading={loadingStatus} />
		</>
		
	);
});

export default MainPage;
