import React from "react";
// import { useOutletContext } from "react-router-dom";

interface IBaseCardProps {
	cardTitle: string;
	cardMain: React.ReactNode;
	cardActions: React.ReactNode;
}

const BaseCard: React.FC<IBaseCardProps> = ({
	cardTitle,
	cardMain,
	cardActions,
}) => {
	return (
		<div className="card displayFlex">
			<section className="card_title_container">
				<h1 className="card_title">{cardTitle}</h1>
			</section>
			<section className="card_main_container">{cardMain}</section>
			<section className="card_action_container displayFlex">
				{cardActions}
			</section>
		</div>
	);
};

export default BaseCard;
