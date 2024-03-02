import cls from "./Sidebar.module.scss";
import { Filter } from "features";

export const Sidebar = () => {
	return ( <div className={cls["sidebar"]}>
		<Filter/>
	</div> );
};
 