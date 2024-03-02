import { AppLink } from "shared/ui";
import packageFile from "../../../package.json";
import cls from "./AboutProject.module.scss";


export const AboutProject = () => {
	return ( <div className={cls["about-project"]}>
		<h2 className={cls["page-header"]}>О проекте</h2>
		<div>
			<ul className={cls["about-list"]}>
				<li className={cls["about-item"]}>
					<h2>Зависимости проекта</h2>
					<div style={{
						display: "flex",
						flexDirection: "row",
						gap: "50px"
					}}>
						<ul className={cls["list"]}>
							<h3 className={cls["header"]}>Dependencies</h3>
							{Object.keys(packageFile.dependencies).map(el => 
								<li className={cls["list-item"]} key={el}>
									{el}
								</li>)}
						</ul>
						<ul className={cls["list"]}>
							<h3 className={cls["header"]}>DevDependencies</h3>
							{Object.keys(packageFile.devDependencies).map(el => 
								<li className={cls["list-item"]} key={el}>
									{el}
								</li>)}
						</ul>
					</div>
					
				</li>
				<li className={cls["about-item"]}>
					<h2>Ссылка на github</h2>
					<AppLink to="https://github.com/wallnnut/Valantis">https://github.com/wallnnut/Valantis</AppLink>
				</li>
			</ul>
			
		</div>
	</div> );
};
 